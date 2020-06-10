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
danis = Business.create({name: 'Dani\'s House of Pizza', price_range: '$', address: '81-28 Lefferts Blvd, Kew Gardens, NY 11415', latitude: 40.705850, longitude: -73.831710, phone_number: '(718) 846-2849', hours: "1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm", website: 'http://danishouseofpizza.com/'})
marthas = Business.create({name: 'Martha\'s Country Bakery', price_range: '$$', address: '263 Bedford Ave, Brooklyn, NY 11211', latitude: 40.714232, longitude: -73.961289, phone_number: '(718) 599-0900', hours: "8:00 am - 12:00 am, 8:00 am - 12:00 am, 8:00 am - 12:00 am, 8:00 am - 12:00 am, 8:00 am - 12:00 am, 8:00 am - 1:00 am, 8:00 am - 1:00 am", website: 'https://marthascountrybakery.com/'})
yoon = Business.create({name: 'Yoon Haeundae Galbi', price_range: '$$$', address: '415 8 W 36th St, New York, NY 10018', latitude: 40.750077, longitude: -73.984526, phone_number: '(212) 244-5345', hours: "11:30 am - 8:30 pm, 11:30 am - 8:30 pm, 11:30 am - 8:30 pm, 11:30 am - 8:30 pm, 11:30 am - 8:30 pm, 11:30 am - 8:30 pm, 11:30 am - 8:30 pm", website: 'https://yoon-nyc.com/'})

#reviews
danis_review1 = Review.create({rating: 4, body: "Best slice in town!!!", author_id: 2, business_id: 1})
danis_review2 = Review.create({rating: 4, body: "Kinda small inside, and packed but the food was worth it", author_id: 3, business_id: 1})
danis_review3 = Review.create({rating: 4, body: " Super good pizza :) ", author_id: 4, business_id: 1})

marthas_review1 = Review.create({rating: 4, body: "The cheesecake is so good", author_id: 3, business_id: 2})
marthas_review2 = Review.create({rating: 3, body: "Great place to have dessert", author_id: 4, business_id: 2})
marthas_review3 = Review.create({rating: 5, body: " love the mexican hot chocolate ", author_id: 2, business_id: 2})

yoon_review1 = Review.create({rating: 5, body: "really nice bar!", author_id: 3, business_id: 3})
yoon_review2 = Review.create({rating: 5, body: "the lunch menu is really good", author_id: 4, business_id: 3})
yoon_review3 = Review.create({rating: 3, body: " had to wait a little bit, but the food was good ", author_id: 2, business_id: 3})

danis.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis1.jpg"), filename: "danis1.jpg")
danis.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis2.jpg"), filename: "danis2.jpg")
danis.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis3.jpg"), filename: "danis3.jpg")
danis.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis5.jpg"), filename: "danis5.jpg")
danis.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/danis5.jpg"), filename: "danis5.jpg")

marthas.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/marthas/marthas1.jpg"), filename: "marthas1.jpg")
marthas.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/marthas/marthas2.jpg"), filename: "marthas2.jpg")
marthas.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/marthas/marthas3.jpg"), filename: "marthas3.jpg")
marthas.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/marthas/marthas4.jpg"), filename: "marthas4.jpg")

yoon.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/yoon/yoon1.jpg"), filename: "yoon1.jpg")
yoon.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/yoon/yoon2.jpg"), filename: "yoon2.jpg")
yoon.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/yoon/yoon3.jpg"), filename: "yoon3.jpg")
yoon.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/yoon/yoon4.jpg"), filename: "yoon4.jpg")



