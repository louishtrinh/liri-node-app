# Liri Node App

## Purpose of Liri
Liri node app is a raw, but highly effective in searching for data such as:
1. Your favorite artists upcoming concert
1. Detail info about your favorite songs
1. Really quick look up of a movie info for your next weekend.

## Quick Start
### Set up .env file
Liri app will require:
* Spotify credential of "SPOTIFY_ID" and "SPOTIFY_SECRET"
* Google Maps API key

Follow these step below to set it up correctly.
1. Navigate to liri-node-app clone folder.
1. Create .env file (from Terminal/Bash, input "touch .env"
1. Open newly created .env file
1. Paste the below snippet
```javascript
# Spotify API keys

SPOTIFY_ID= your_spotify_id
SPOTIFY_SECRET= your_spotify_secret

# Google API keys

GOOGLE_KEY = your_googlemap_api
```
5. Replace keys above with your own keys.
### Install required dependencies
Run the following code from your Terminal/Bash
```javascript
npm install
```

## How to train your Liri
1. Navigate to your liri-node-app folder from Terminal/Bash
1. Liri can understand these command
1. Order you liri with
```javascript
node liri.js "Command" "Target"
```

Command | Target | Function
------------ | ------------- | -------------
concert-this | Artist name | Look up upcomming concerts and events from selected Artist
spotify-this-song | Song's name | Look up information of selected song
movie-this | Movie's name | Look up movie info
do-what-it-says | N/A | Perform request from random.txt file from the same directory

### Demo
Please see link below for demonstration of how to command your Liri
https://youtu.be/4oExGqa-csg

### Example
```javascript
node liri.js concert-this Pink

//Expected output
Searching for type: concert-this
Searching for Item: Pink
Log saved successfully

Name of venue:     P!NK: BEAUTIFUL TRAUMA WORLD TOUR
Venue location:    2438 NE 7th Pl, Fort Lauderdale, FL 33304, USA
Date of the Event: Mar-01-2019 19:00:00

Name of venue:     P!NK: BEAUTIFUL TRAUMA WORLD TOUR
Venue location:    401 Channelside Dr, Tampa, FL 33602, USA
Date of the Event: Mar-03-2019 19:00:00

Name of venue:     P!NK: BEAUTIFUL TRAUMA WORLD TOUR
Venue location:    305 A.P.Randolph St, Jacksonville, FL 32202, USA
Date of the Event: Mar-05-2019 19:00:00
...
```
## Keep your Liri in check
All commands issue to and processed by Liri are stored in log.txt in the same directory as the Liri App (liri.js)
```
//Log sample
concert-this,Pink
concert-this,Jay-Z
concert-this,Maroon+5
concert-this,Pink
```
