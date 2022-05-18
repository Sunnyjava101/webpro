# Web Development Project
## **Weather App**

## What is the *Weather App*?

The Weather App is a website where a person can register/login and check the forecast for their location.

The Weather App is not complete. There was a lot more I was looking forward to implement and include. The site for
now allows for a user to register/log in, view/delete profile, and search for forecast in any city through an open API. 

## Future plans
__Bugs and issues:__ The front end of the website I am pretty satisfied with but I think there still could be some work 
to be done. The backend is the biggest issue in the site. While for any user, their username and password is stored in the
database via SQL, the other elements such as user city, personal info, and user forecast is not stored. The databases are built already on mySQL, 
I was just not able to complete the backend where anytime the user submitted a form to register their city, it gets stored in the backend and so does 
the forecast. 

My future plans with this site is to mainly fix the backend and make it more secure with the databases. I want to make it where a user can login/register, pick 
their main city so it's forecast is on the homepage everytime they log in, and also a settings/preferences page which will allow them to pick metrics, celsius/farenheit, etc... 

I also might try to implement this through something like __XAMPP__ and __PHP__, something that I used in Software Engineering class. I found PHP to be a fairly easy language to use and also navigating and understanding this project through [PHPmyadmin](https://www.phpmyadmin.net/) would work.

## Framework of the Weather App
**Front End:**
* HTML
* CSS
* Javascript

**Back End:**
* Express
* Node.js
* MySQL
* Nodemon
* [Open weather API](https://openweathermap.org/api)

**Other technologies**
* Notepad++
* Lucid Charts
* SQL command line client

## ERD
![WeatherER2](https://user-images.githubusercontent.com/76795557/168940143-3efdc15d-9f98-45e2-a79e-25973a5ccebd.png)

My previous ER diagram had 5 entity tables but I reduced it down to 4 after some feedback.

__User entity:__ The user entity is the main entity. The user has 3 attributes which are UserId(auto incremented), username and password which which allow for the database to recognize which user is logging in/using the site.

__Personal:__ The personal entity keeps the user's personal info in the database through a form they're supposed to complete after they register. A user can create *one* profile and a profile can be created by *one* user. 

__City:__ The city entity keeps track of the user's city in order to use it for the city's forecast. A user can add *one* city and a city can only be added by *one* user. The city attribute is the one the gets used with API that I implemented in order to find the user's city's forecast. It's accessed through the User ID foreign key.

__Forecast:__ The forecast entity stores the User's city's forecast. A forecast can be determined if the *city name* is valid and a city can have many forecasts. 

## How to install
---
__Steps:__
1. First you need to download [Node](https://nodejs.org/en/download/)(*npm is automatically installed*)
2. Download [mySQL](https://www.mysql.com/downloads/)
3. Then use the following commands on the command prompt

```
npm init
npm install express
npm install nodemon ——save—dev
```

On the command line type the command:

`npm install dotenv`
This downloads the file where you will store your sql password and username. You might want to hide this through [.gitIgnore](https://www.toptal.com/developers/gitignore). In the .env files you can set up host:localhost and set your username and password

Next you want to run the command:

`npm install mysql2`

Then you can finally run the localhost server through the command:

`npm run dev`

## Design
---

## When the user first opens the site
![Capture](https://user-images.githubusercontent.com/76795557/168945765-241e6eb4-50fa-4b8b-aaa3-5e5d3bb630ea.PNG)

## Register Page
![Capture1](https://user-images.githubusercontent.com/76795557/168946194-5fbd7adf-92aa-44f6-882e-7e92c95ade10.PNG)

## Login Page
![Capture2](https://user-images.githubusercontent.com/76795557/168946354-580e6654-cc42-485e-810d-f9e8dab9f48c.PNG)

## When the user logs in/registers they get to homepage(nav bar changes)
![Capture3](https://user-images.githubusercontent.com/76795557/168946543-2ed6bbfa-a087-4ce0-b717-46e31f39bb56.PNG)

## Delete your profile option
![Capture4](https://user-images.githubusercontent.com/76795557/168947309-1f7baeca-e729-4ab0-a740-00ee1d628217.PNG)

## Search option(default to New York at first)
![Capture5](https://user-images.githubusercontent.com/76795557/168947551-86bb2f9a-e009-4b15-83ab-b41ac566e9b8.PNG)

## Search "New Paltz"
![Capture6](https://user-images.githubusercontent.com/76795557/168947616-404191e3-b979-4c30-89c3-1ac0472b4819.PNG)

## About page
![Capture7](https://user-images.githubusercontent.com/76795557/168947919-c74ab4cc-1e6d-4f64-bd9a-f2fb52eec279.PNG)

## MySQL saving users
![Capture8](https://user-images.githubusercontent.com/76795557/168948352-5745b183-367d-4395-a3db-302988165e9f.PNG)

---
## Closing
Overall, without time contraints I think I can add so much more to this project. My main goal with this project is to build all the models and routes files for every entity. I want the website to work where once the user logs in, they're able to able to see their city's forecast on the homepages right away and are able to edit it.

Through the API I was able to to only search for a city but not able to store the city and it's forecast in the database. 







