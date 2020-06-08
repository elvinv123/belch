json.extract! business, :id, :name, :address, 
:longitude, :latitude, :phone_number, 
:hours, :website, :average_rating
json.photoUrls business.photos.map { |file| url_for(file) }