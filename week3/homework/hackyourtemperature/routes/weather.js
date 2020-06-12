const express = require("express");
const axios = require("axios");
const API_KEY = require("../sources/keys.json").API_KEY;
const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.cityName)
    return res
      .status(400)
      .render("index", { result: "Please enter a city!!!!!" });

  const cityName =  req.body.cityName.charAt(0).toUpperCase() + req.body.cityName.slice(1)
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    const temperature = response.data.main.temp;
    res.render("index", {
      result: `The temperature in ${cityName} is ${temperature}°C!`,
    });
  } catch (error) {
    res.render("index", {
      result: 'Please enter a meaningful city name!',
    });
  }
});

module.exports = router;
