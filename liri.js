require('dotenv').config()
axios = require('axios')
var keys = require('./keys.js')
var moment = require('moment')
var Spotify = require('node-spotify-api')
var fs = require('file-system')

moment().format()

// var spotify = new Spotify(keys.spotify)

// OMG so many keyssss
var spotify = new Spotify(keys.spotify)
var google = keys.google.key

var searchType = process.argv[2]
var searchItem = process.argv.splice(3).join('+')

console.log(``)
console.log(`Searching for type: ${searchType}
Searching for Item: ${searchItem}`)

// https: // rest.bandsintown.com/artists/Pink/events?app_id=codingbootcamp

var responseLength = 0
var counter = 0
var responseData = {}

function concertThis () {
  axios.get(`https://rest.bandsintown.com/artists/${searchItem}/events?app_id=codingbootcamp`)
    .then(function (response) {
      responseLength = response.data.length
      responseData = response
      console.log(responseLength)
      displayConcert()
    })
}
function displayConcert () {
  if (counter < responseLength) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${responseData.data[counter].venue.latitude},${responseData.data[counter].venue.longitude}&key=${google}`)
      .then(function (location) {
        console.log(``)
        console.log(`Name of venue:     ${responseData.data[counter].venue.name}`)
        console.log(`Venue location:    ${location.data.results[0].formatted_address}`)
        console.log(`Date of the Event: ${moment(responseData.data[counter].datetime, "YYYY-MM-DDTHH:mm:ss").format("MMM-DD-YYYY kk:mm:ss")}`)
        counter++
        displayConcert()
      })
  }
}

function spotifyThis () {
  spotify.search({ type: 'track', query: searchItem }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err)
    }
    console.log(``)
    console.log(`Artist(s):               ${data.tracks.items[0].artists[0].name}`)
    console.log(`Song's name:             ${data.tracks.items[0].name}`)
    console.log(`Listen now on Spotify:   ${data.tracks.items[0].external_urls.spotify}`)
    console.log(`From album:              ${data.tracks.items[0].album.name}`)
  })
}

function movieThis () {
  if (searchItem === '') {searchItem = 'Mr.Nobody'}
  axios.get(`http://www.omdbapi.com/?t=${searchItem}&y=&plot=short&apikey=trilogy`).then(function (response) {
    // console.log(response.data)
    console.log(`\n`)
    console.log(`Movie title:             ${response.data.Title}`)
    console.log(`Year release:            ${response.data.Released}`)
    console.log(`IMDB Rating:             ${response.data.imdbRating}`)
    console.log(`Rotten Tomatoes Rating:  ${response.data.Ratings[2].Value}`)
    console.log(`Country:                 ${response.data.Country}`)
    console.log(`Language:                ${response.data.Language}`)
    console.log(`Plot:                    ${response.data.Plot}`)
    console.log(`Actors:                  ${response.data.Actors}`)
  })
}

function randomThis () {
  fs.readFile('random.txt', 'utf8', function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error)
    }
    var dataArr = data.split(',')
    searchType = dataArr[0]
    searchItem = dataArr[1]
    switch (searchType) {
      case 'concert-this':
        concertThis()
        break
      case 'spotify-this-song':
        spotifyThis()
        break
      case 'movie-this':
        movieThis()
        break
      case 'do-what-it-says':
        randomThis()
        break
    }
  })
}

function parseLog () {
  try {
    fs.appendFileSync('log.txt', `${searchType},${searchItem}\n`)
    console.log('Log saved successfully')
  } catch (err) {
    console.log('Error saving log.')
  }
}

switch (searchType) {
  case 'concert-this':
    concertThis()
    break
  case 'spotify-this-song':
    spotifyThis()
    break
  case 'movie-this':
    movieThis()
    break
  case 'do-what-it-says':
    randomThis()
    break
}
parseLog()
