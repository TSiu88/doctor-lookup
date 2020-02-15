# _Doctor Lookup_

#### _Week 6 Independent Friday Assignment for Epicodus, 02.14.2020_

#### By _**Tiffany Siu**_

## Description

_This site is the Week 6 Friday independent assignment for Epicodus' full time Intro to Programming and C#/React course.  It is a site for a user to search for doctors in whatever city is inputted by name or medical issue they are having using information from the [BetterDoctor API](https://developer.betterdoctor.com) and a geocoder from [OpenCageData API](https://opencagedata.com)._

_In this program a user will be able to search for doctors and receive their name, address, phone number, website, if they are accepting new patients, and a short bio on them. This program currently only shows the first 10 results or less, depending on how many search results were found and only shows the first practice site information if the doctor works at more than one practice site.  However it does search for doctors in different cities._ 

## Setup/Installation Requirements

### Requirements to Run
* _Web Browser_
* _Webpack_
* _Node.js_
* _NPM_
* _API KEY for BetterDoctor API_
* _API KEY for OpenCageData API_

### Instructions

*This page may be viewed by:*

1. Download and install Node.js from the [official website](https://nodejs.org/en/download/)
2. Clone the [repository](https://github.com/TSiu88/beep-boop.git) from my [GitHub page](https://github.com/TSiu88)
3. Use a command line/Bash to move to the project directory with `cd project-directory`
4. Run `npm install` to get all dependencies. 
5. Run `npm run start` to start up the program

Since this page uses multiple APIs, **an API KEY for each is required to use this program**.  The API Keys can be gotten by:
1. Go to the site for [BetterDoctor API](https://developer.betterdoctor.com/) and sign up for a free API KEY
2. Create a new .env file in the root directory and type `API_KEY = (Add-API-Key-given-here)`
3. Go to the site for [OpenCageData API](https://opencagedata.com/) and sign up for a free API KEY
4. Add geocoder API Key in .env file created in Step 2 by typing `GEOCODE_API_KEY = (Add-API-Key-given-here)`
5. Allow program to refresh or run `npm run start` again to start up the program

## Other Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _JQuery 3.4.1_
* _Bootstrap 4.4.1_
* _ESLint_
* _Babel_
* _Jest_
* _Markdown_

## Notable Features
This program calls multiple APIs for information and dynamically adds profiles for the doctors found.  It also replaces values with "Not Available" if the information from the site is not provided.  It first uses a geocoder to find the coordinates of the place the user inputted and then modifies the received coordinates into a format readable by the second API.  The modified coordinates are sent to the second API to receive the list of doctors.

## Specifications

* _If something goes wrong with the program's API call and results in an error (anything not a 200 OK), it returns a notification of the error._
  * _Example Input: API call_
  * _Example Output: error = 401 Error, API Key not valid_
* _User does not input any fields and clicks search, then search is only by default location._
  * _Example Input: search=doctors, location=Seattle, name="", issue="", distance=1_
  * _Example Output: 2900 doctors found_
* _User enters a search for doctors but no doctors meet the criteria, so program returns a notification that no doctors that met the criteria were found._
  * _Example Input: search=doctors, location=Grand Line, name=Chopper, medical issue=can't-get-on-this-island disease, distance=1_
  * _Example Output: notification = No doctors that met the criteria were found_
* _User enters a search for doctors by name and receives a list of doctors._
  * _Example Input: search=doctors, location=seattle, name=house_
  * _Example Output: 1 doctor found in Seattle, name=Houser_
* _User enters a medical issue and receives a list of doctors._
  * _Example Input: search=doctors, location=seattle, medical issue=sore throat_
  * _Example Output: 104 doctors found_
* _User enters a location and receives a list of doctors._
  * _Example Input: search=doctors, location=san francisco, distance=1_
  * _Example Output: 791 doctors found_
* _When doctors found, info on each doctor's name, address, phone number, website, if accepting new patients, and bio is displayed in results, if the information is available._
  * _Example Input: search=doctors, location=seattle, name=house_
  * _Example Output: name= Marc Houser, address: 15th Ave E, phone number=206326XXXX, website=not available, accepting new pts=true, bio=not available_

## Screenshots

_Here is a snippet of what the input looks like:_

![Snippet of input fields](src/img/snippet1.png)

_Here is a preview of what the output looks like:_

![Snippet of output box](src/img/snippet2.png)

## Known Bugs

_There are currently no known bugs in this program_

## Support and contact details

_If there are any question or concerns please contact me at my [email](mailto:tsiu88@gmail.com). Thank you._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Tiffany Siu_**
