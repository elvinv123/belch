# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create({email: "demouser@demo.com", password: "demouser", fname:"John", lname: "Appleseed",zipcode:"95014" })
business = Business.create({name: 'pizza', price_range: '$$$', address: 'main street', latitude: 0.0, longitude: 0.0, phone_number: '12345', hours: '24/7', website: 'pizza.com'})
demo_review = Review.create({rating: 3.5, body: "food was good", author_id: 1, business_id: 1})