json.extract! review, :id, :rating, :body, :business_id, :author_id, :created_at
if(review.photo.attached?)
    json.photoUrl url_for(review.photo)
end