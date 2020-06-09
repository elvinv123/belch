@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :address, 
        :longitude, :latitude, :phone_number, 
        :hours, :website, :average_rating
    end
end