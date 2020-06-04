# json.partial! "api/businesses/business", business: @business

json.extract! @business, :id, :name, :price_range, :address, :longitude, :latitude, :phone_number, :hours, :website