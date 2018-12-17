const request = require('request');
let weatherAPIKey = 'f6488d0155f079fdec77fa68b40fca88';

let getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${weatherAPIKey}/${latitude},${longitude}`,
        json: true
    }, (error, response, body)=> {
        if (error){
            callback('Unable to connect to DarkSky servers');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200){
            callback(undefined, {
                temperaure: `Temperature: ${body.currently.temperature}`,
                apparentTemperature: `Apparent Temperature: ${body.currently.apparentTemperature}`
            });
        }
    });
}

module.exports.getWeather = getWeather;