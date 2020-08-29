const request = require("request");
const covid = (country, callback) => {
  const url = "https://api.covid19api.com/total/country?countryname=" + country;

  request({ url, json: true }, (error, data) => {
    if (error) {
      callback("please check your net connection and try again", undefined);
    } else if (data.body === undefined) {
      callback("you did not enter a country.please choose again", undefined);
    } else {
      const dd = data.body[data.body.length - 1];

      callback(undefined, {
        countryName: dd.Country,
        total: dd.Confirmed,
        death: dd.Deaths,
        recovered: dd.Recovered,
        active: dd.Active,
      });
    }
  });
};

module.exports = covid;
