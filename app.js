const request = require("request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast");

const address = String(process.argv[2]);

if (!address) {
  console.log("Please provide a valid location/address.");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
