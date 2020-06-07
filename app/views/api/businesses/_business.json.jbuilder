json.extract! business, :id, :name, :address, 
:longitude, :latitude, :phone_number, 
:hours, :website, :average_rating
#json.picture_url bench.picture_url || url_for(bench.photo)
json.photoUrls business.photos.map { |file| url_for(file) }