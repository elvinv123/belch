# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create({email: "demouser@demo.com", password: "demouser", fname:"John", lname: "Appleseed",zipcode:"95014" })
business = Business.create({name: 'Dominos', price_range: '$$$', address: 'main street', latitude: 0.0, longitude: 0.0, phone_number: '12345', hours: '24/7', website: 'pizza.com'})
demo_review = Review.create({rating: 3.5, body: "food was good", author_id: 1, business_id: 1})
Business.create({name: 'Dani\'s House of Pizza', price_range: '$', address: '81-28 Lefferts Blvd, Kew Gardens, NY 11415', latitude: 40.705850, longitude: 73.831710, phone_number: '(718)846-2849', hours: "1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm, 1:00 pm - 10:00 pm" website: 'http://danishouseofpizza.com/'})

#danis.photo.attach(io: File.open("/Users/elvinvalette/Desktop/belch-photos/danis_house_of_pizza/danis1.jpg"), filename: "danis1.jpg")

