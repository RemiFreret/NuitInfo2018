const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
    {
        APPID: '9fd6759be5292674813461f216c326a6',
        units: "metric"
    }
);

function cockpitMain(req, res) {
  res.render('cockpit-index', {
    title: 'Cockpit',
  });
}

function cockpitWeather(req, res) {
  helper.getCurrentWeatherByGeoCoordinates(5.6037, 0.1870, (err, currentWeather) => {
      if(err){
          console.log(err);
      }
      else{
        res.render('cockpit-weather', {
          title: 'Cockpit - Weather',
          data: currentWeather,
        });
      }
  });
}

function cockpitMap(req, res) {
  res.render('cockpit-map', {
    title: 'Cockpit - Map',
  });
}

module.exports = {
  cockpitMain, cockpitWeather, cockpitMap
};
