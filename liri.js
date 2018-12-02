require('dotenv').config()
axios = require('axios')
var keys = require('./keys.js')

// var spotify = new Spotify(keys.spotify)

//OMG so many keyssss
var spotify = keys.spotify
var google = keys.google

var searchType = process.argv[2]
var searchItem = process.argv.splice(3).join('+')

console.log(`Searching for type: ${searchType}
Searching for Item: ${searchItem}`)

https: // rest.bandsintown.com/artists/Pink/events?app_id=codingbootcamp

if (searchType === 'concert-this') {
  axios.get(`https://rest.bandsintown.com/artists/${searchItem}/events?app_id=codingbootcamp`).then(function (response) {
      axois.get()
      console.log(response.data[0])
      console.log(response.data[0].venue.name)
      console.log(response.data[0].venue.latitude)
      console.log(response.data[0].venue.longitude)
      console.log(response.data[0].venue.datetime)
      console.log(response.data[0].venue.on_sale_datetime)

  })
}
