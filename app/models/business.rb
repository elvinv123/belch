class Business < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price_range, :address, :longitude, :latitude, :phone_number, :hours, :website, presence: true
    
    has_many :reviews,
    foreign_key: :business_id,
    primary_key: :id,
    class_name: :Review

    def average_rating
        reviews.average(:rating)
    end
end