class Category < ApplicationRecord
    validates :name, presence: true 

    has_many :categories_businesses, inverse_of: :category, dependent: :destroy
    has_many :businesses, through: :categories_businesses, source: :business
end