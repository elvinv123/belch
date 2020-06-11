# json.partial! "api/businesses/business", business: @business

# json.extract! @business, :id, :name, :price_range, :address, :longitude, :latitude, :phone_number, :hours, :website

# json.business do
  json.partial! '/api/businesses/business', business: @business
  # json.reviewIds @business.reviews.pluck(:id)
# end

@business.reviews.includes(:author).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.author.id do
      json.extract! review.author, :id, :fname, :lname, :zipcode
      # if(review.author.photo.attached?)
      #   json.photoUrl  review.author.photo.service_url
      # else
      #   json.photoUrl ""
      # end
      
      json.photoUrl review.author.photo.attached? ? url_for(review.author.photo) : ""
    end
  end
end

