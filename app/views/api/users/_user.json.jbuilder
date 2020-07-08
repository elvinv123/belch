json.extract! user, :id, :email, :fname, :lname, :zipcode, :birthYear, :birthMonth, :birthDay
if(user.photo.attached?)
    json.photoUrl url_for(user.photo)
end
