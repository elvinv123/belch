# Belch     

Belch is an social networking site inspired by Yelp that allows users to review places to eat in New York City.
## Technologies
* PostgreSQL
* Ruby on Rails
* Javascript
* React & Redux
* Amazon S3
* Google maps API

## Features
* User Authentication
* Business Page
* Search

## User Authentication
* Users have the option of creating an acount, logging in with an existing account or browse as a demo user

## Business Page
* The business page makes use of the Google maps API and shows a pin on the location of the business.
* Each business has a series of photos showing what the food and experience is like. These photos are being hosted by Amazon S3
* Reviews of the business are shown with the users name, their rating, and date the review was created.

## Search
* The search feature is based off business price range and categories.
* The categories are set on the Rails backend using the `categories` and the `categories_businesses` table.
* The `categories_businesses`table joins the `categories` and `businesses` tables.
