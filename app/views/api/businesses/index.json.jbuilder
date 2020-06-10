@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :address, 
        :longitude, :latitude, :phone_number, 
        :hours, :website, :average_rating

    business.reviews.includes(:author).each do |review|
        json.reviews do
            json.set! review.id do
                json.partial! 'api/reviews/review', review: review
            end
        end
    end
    json.photoUrls business.photos.map { |file| url_for(file) }
    end
end


