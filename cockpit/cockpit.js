const OpenWeatherMapHelper = require('openweathermap-node');
const helper = new OpenWeatherMapHelper(
  {
    APPID: '9fd6759be5292674813461f216c326a6',
    units: "metric"
  }
);

function cockpitMain(req, res) {
  res.render('cockpit-index_template', {
    title: 'Cockpit - Map',
    page: 'cockpit-map'
  });
}

function cockpitWeather(req, res) {
  var getWeather = helper.getCurrentWeatherByGeoCoordinates(5.6037,0.1870, (err, currentWeather) => {
    if(err){
      console.log(err);
    }
    else{
      helper.getThreeHourForecastByGeoCoordinates(5.6037,0.1870, (err, threeHourForecast) => {
        if(err){
          console.log(err);
        }
        else{
          res.render('cockpit-index_template', {
            title: 'Cockpit - Weather',
            currentData: currentWeather,
            forecastData: threeHourForecast,
            page: 'cockpit-weather'
          });
        }
      });
    }
  });
}

function cockpitDashboard(req, res) {
  res.render('cockpit-index_template', {
    title: 'Cockpit - Dashboard',
    page: 'cockpit-index'
  });
}

module.exports = {
  cockpitMain, cockpitWeather, cockpitDashboard
};
