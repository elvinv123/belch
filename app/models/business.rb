class Business < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price_range, :address, :longitude, :latitude, :phone_number, :hours, :website, presence: true
    
end