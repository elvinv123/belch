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
newpark = Business.create({name: 'New Park Pizza', price_range: '$', address: '15671 Crossbay Blvd, Howard Beach, NY 11414', latitude: 40.662680, longitude: -73.840467, phone_number: '(718) 641-3082', hours: "11:00 am - 12:00 am, 11:00 am - 12:00 am, 11:00 am - 12:00 am, 11:00 am - 12:00 am, 11:00 am - 12:00 am, 11:00 am - 12:00 am, 11:00 am - 12:00 am", website: 'http://newparkpizza.com/'})
mariscos = Business.create({name: 'Los Mariscos', price_range: '$', address: '409 W 15th St New York, NY 10011', latitude: 40.742123, longitude: -74.005814, phone_number: '(718) 641-3082', hours: "11:00 am - 10:00 pm, 11:00 am - 10:00 pm, 11:00 am - 10:00 pm, 11:00 am - 10:00 pm, 11:00 am - 12:00 am, 11:00 am - 12:00 am, 11:00 am - 9:00 pm", website: 'http://losmariscos1.com/'})
amys = Business.create({name: 'Amy Ruth\'s', price_range: '$$', address: '113 W 116th St New York, NY 10026', latitude: 40.802623, longitude: -73.950268, phone_number: '(212) 280-8779', hours: "11:00 am - 11:00 pm, 9:00 am - 11:00 pm, 9:00 am - 11:00 pm, 9:00 am - 11:00 pm, 9:00 am - 12:00 am, 8:30 am - 5:30 am, 8:30 am - 11:00 pm", website: 'http://amyruths.com/'})
mogador = Business.create({name: 'Cafe Mogador', price_range: '$$', address: '133 Wythe Ave, Brooklyn, NY 11211', latitude: 40.719936, longitude: -73.959964, phone_number: '(718) 486-9222', hours: "11:30 am - 9:00 pm, 11:30 am - 9:00 pm, 11:30 am - 9:00 pm, 11:30 am - 9:00 pm, 11:30 am - 10:00 pm, 11:30 am - 10:00 pm, 11:30 am - 9:00 pm", website: 'http://cafemogador/'})
hangar = Business.create({name: 'Hangar 11 Bar & Grill', price_range: '$$', address: '119-11 Metropolitan Ave, Kew Gardens, NY 11415', latitude: 40.706415, longitude: -73.831323, phone_number: '(516) 362-0803', hours: "12:00 pm - 9:00 pm, 12:00 pm - 9:00 pm, 12:00 pm - 9:00 pm, 12:00 pm - 9:00 pm, 12:00 pm - 9:00 pm, 12:00 pm - 9:00 pm, 12:00 pm - 9:00 pm", website: 'http://hangar11bar/'})
wah_fung = Business.create({name: 'Wah Fung No 1', price_range: '$', address: '79 Chrystie St, New York, NY 10002', latitude: 40.717540, longitude: -73.994545, phone_number: '(212) 925-5175', hours: "Closed, 9:00 am - 7:00 pm, 9:00 am - 7:00 pm, 9:00 am - 7:00 pm, 9:00 am - 7:00 pm, 9:00 am - 7:00 pm, 9:00 am - 7:00 pm", website: 'http://wahfung1.com/'})
aviary = Business.create({name: 'The Aviary NYC', price_range: '$$$$', address: '80 Columbus Cir 60 St, New York, NY 10023', latitude: 40.769273, longitude: -73.982943, phone_number: '(212) 925-5175', hours: "5:00 pm - 11:30 pm, 5:00 pm - 11:30 pm, 5:00 pm - 11:30 pm, 5:00 pm - 11:30 pm, 5:00 pm - 12:00 pm, 5:00 pm - 12:00 pm, 5:00 pm - 11:30 pm", website: 'http://aviarynyc.com/'})


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

newpark_review1 = Review.create({rating: 5, body: "Best Pizza hands down wished they delivered to my house. Crust, cheese and sauce are perfect.", author_id: 2, business_id: 4})
newpark_review2 = Review.create({rating: 5, body: "It was definitely one of the best pizzas I've had and I go everywhere to eat pizza. Still a long way to go in my pizza bucket list.", author_id: 3, business_id: 4})
newpark_review3 = Review.create({rating: 4, body: "I love this place. The pizza is fantastic and quick service. This place is quintessential New York. I highly recommend it.", author_id: 4, business_id: 4})

los_mariscos_review1 = Review.create({rating: 4, body: "One of the Best fish tacos  in NYC. Other seafood items very yummy  as well. People are so nice there. Awesome spot.", author_id: 2, business_id: 5})
los_mariscos_review2 = Review.create({rating: 4, body: "It's all very fresh including the tortillas which you can see them making right In front of you.", author_id: 3, business_id: 5})
los_mariscos_review3 = Review.create({rating: 4, body: "Honestly best tacos i've ever had in new york. I  know everyone already says that so really no point in writing more.", author_id: 4, business_id: 5})

amy_review1 = Review.create({rating: 5, body: "The service was great and you can definitely tell this place has charm and history.", author_id: 3, business_id: 6)
amy_review2 = Review.create({rating: 5, body: "The fried chicken, sautéed greens, cheesy grits, and catfish were amazing! The service also wonderful! All and all no complaints.", author_id: 4, business_id: 6})
amy_review3 = Review.create({rating: 3, body: "This place is bomb. Can't wait to go back. The staff was very friendly. It was fair priced and the food came out hot.", author_id: 2, business_id: 6)

mogador_review1 = Review.create({rating: 3, body: "Overall, it's a really cozy-designed place with great food but it might not be our first choice to dine out next time.", author_id: 2, business_id: 7})
mogador_review2 = Review.create({rating: 4, body: "Went here for Brunch a while ago and I still think about how great the Halloumi Eggs Benedict is.  Literally I have dreams about how good it is!", author_id: 3, business_id: 7})
mogador_review3 = Review.create({rating: 4, body: "If you're here for meaty chicken or lamb tagines or bastilla, you're in luck because Cafe Mogador does these two dishes well.", author_id: 4, business_id: 7})

hangar_review1 = Review.create({rating: 4, body: "I LIVE FOR THIS PLACE! Lol. If Hangar ever decides to shut down, my life will never be the same!!", author_id: 3, business_id: 8})
hangar_review2 = Review.create({rating: 4, body: "The waitress was nice and quick. I think I would come back to sample the food menu and the other cocktails.", author_id: 4, business_id: 8})
hangar_review3 = Review.create({rating: 4, body: "I just love the fact I live so close. Always so chill during the week. Weekends are great here too.", author_id: 2, business_id: 8})

wah_fung_review1 = Review.create({rating: 5, body: "Would go back and would recommend if you want something cheap, fast, and good.", author_id: 3, business_id: 9})
wah_fung_review2 = Review.create({rating: 5, body: "One of the most famous Chinese butcher establishments you can find, and also one of the best cheap eats in the city.", author_id: 4, business_id: 9})
wah_fung_review3 = Review.create({rating: 3, body: "This place is such a steal!! For the price, can't get better than this!", author_id: 2, business_id: 9})

aviary_review1 = Review.create({rating: 5, body: "Really enjoyed the company and drinks here. Thanks Aviary for being a great location for a great evening!", author_id: 3, business_id: 10})
aviary_review2 = Review.create({rating: 5, body: "View was amazing. Service was amazing. The cocktails were amazing  can't explain how much we loved this place.", author_id: 4, business_id: 10})
aviary_review3 = Review.create({rating: 4, body: "Favorite drink was the one that tasted like green mint julep -- you blow through a straw and twirl the ice around!", author_id: 2, business_id: 10})

#photos
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

newpark.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/newpark/newpark1.jpg"), filename: "newpark1.jpg")
newpark.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/newpark/newpark2.jpg"), filename: "newpark2.jpg")
newpark.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/newpark/newpark3.jpg"), filename: "newpark3.jpg")
newpark.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/newpark/newpark4.jpg"), filename: "newpark4.jpg")

mariscos.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/mariscos/mariscos1.jpg"), filename: "mariscos1.jpg")
mariscos.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/mariscos/mariscos2.jpg"), filename: "mariscos2.jpg")
mariscos.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/mariscos/mariscos3.jpg"), filename: "mariscos3.jpg")
mariscos.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/mariscos/mariscos4.jpg"), filename: "mariscos4.jpg")

amys.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/amys/amys1.jpg"), filename: "amys1.jpg")
amys.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/amys/amys2.jpg"), filename: "amys2.jpg")
amys.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/amys/amys3.jpg"), filename: "amys3.jpg")
amys.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/amys/amys4.jpg"), filename: "amys4.jpg")

mogador.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/mogador/mogador1.jpg"), filename: "mogador1.jpg")
mogador.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/mogador/mogador2.jpg"), filename: "mogador2.jpg")
mogador.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/mogador/mogador3.jpg"), filename: "mogador3.jpg")
mogador.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/mogador/mogador4.jpg"), filename: "mogador4.jpg")

hangar.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/hangar/hangar1.jpg"), filename: "hangar1.jpg")
hangar.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/hangar/hangar2.jpg"), filename: "hangar2.jpg")
hangar.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/hangar/hangar3.jpg"), filename: "hangar3.jpg")
hangar.photos.attach(io: open("https://belch-seeds.s3.us-east-2.amazonaws.com/hangar/hangar4.jpg"), filename: "hangar4.jpg")

#categories
restaurants = Category.create(name: "restaurant")
groceries = Category.create(name: "groceries")
nightlife = Category.create(name: "nightlife")
takeout = Category.create(name: "takeout")
desserts = Category.create(name: "desserts")
pizza = Category.create(name: "pizza")

#categories_business
CategoriesBusiness.create(business_id: 1, category_id: 1)
CategoriesBusiness.create(business_id: 1, category_id: 6)
CategoriesBusiness.create(business_id: 2, category_id: 1)
CategoriesBusiness.create(business_id: 3, category_id: 1)
CategoriesBusiness.create(business_id: 1, category_id: 6)


