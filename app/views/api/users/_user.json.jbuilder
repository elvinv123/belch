json.extract! user, :id, :email, :fname, :lname, :zipcode, :birthYear, :birthMonth, :birthDay
json.photoUrl url_for(user.photo)
