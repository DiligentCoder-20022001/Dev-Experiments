const router = require('express').Router();
const bodyParses = require('body-parser');
const https = require('https');
router.route('/').post((req, res) => {
    const place = req.body.place;
    const apiKey = 'a39b87fc707b5b7ff04d4f7ac35a7ff4';
    const unit = 'metric';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + place + '&appid=' + apiKey + '&units=' + unit;
    const place1 = {
        place: place
    };
    //after identifying the place
    var dataSend = {}; 
        
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
            const feelLike = weatherData.main.feels_like;
            dataSend = {
                temp: temp,
                weatherDescription: weatherDescription, 
                imageURL: imageURL, 
                feelLike: feelLike
            }
            console.log("Temperature is " + temp);
            res.json(dataSend);
        })
    })

});
module.exports = router;