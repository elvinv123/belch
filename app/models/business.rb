class Business < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price_range, :address, :longitude, :latitude, :phone_number, :hours, :website, presence: true
    
    has_many :reviews,
    foreign_key: :business_id,
    primary_key: :id,
    class_name: :Review

    has_many :categories_businesses, inverse_of: :business, dependent: :destroy
    has_many :categories, through: :categories_businesses, source: :category    
    has_many_attached :photos

    def self.search_category(category)
       
        if(category.include?('$'))
            return Business.where(price_range: category)
        else 
            cat_id = Category.find_by!(name: category).id
            cat_b = CategoriesBusiness.find_by(category_id: cat_id)
            return Category.find(cat_id).businesses
        end
    end

    def average_rating
        reviews.average(:rating)
    end
end