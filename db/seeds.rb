# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
##users
demo_user = User.create({email: "demouser@demo.com", password: "demouser", fname:"John", lname: "Appleseed",zipcode:"95014" })
user1 = User.create({email: "Rafael1969@gmail.com", password: "123456", fname:"Rafael", lname: "Smith", zipcode:"10017" })
user2 = User.create({email: "LeonardoT165@live.com", password: "123456", fname:"Leonardo", lname: "Peroni", zipcode:"11416" })
user3 = User.create({email: "Chuckielovesfood@gmail.com", password: "123456", fname:"Chuck", lname: "Finster",zipcode:"95014" })

#businesses
danis = Business.create({name: 'Dani\'s House of Pizza', price_range: '$', address: '81-28 Lefferts Blvd, Kew Gardens, NY 11415', latitude: 40.705850, longitude: -73.831710, phone_number: '(718)846-2849', hours: "1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm", website: 'http://danishouseofpizza.com/'})

#reviews
danis_review1 = Review.create({rating: 4, body: "Best slice in town!!!", author_id: 2, business_id: 1})
danis_review2 = Review.create({rating: 4, body: "Kinda small inside, and packed but the food was worth it", author_id: 3, business_id: 1})
danis_review3 = Review.create({rating: 4, body: " Super good pizza :) ", author_id: 4, business_id: 1})

danis.photo.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis1.jpg"), filename: "danis1.jpg")
danis.photo.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis2.jpg"), filename: "danis2.jpg")
danis.photo.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis3.jpg"), filename: "danis3.jpg")
danis.photo.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis5.jpg"), filename: "danis5.jpg")
danis.photo.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis5.jpg"), filename: "danis5.jpg")


