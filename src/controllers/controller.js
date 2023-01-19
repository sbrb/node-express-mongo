const axios = require('axios')
//getWeatherAll
//getWeatherAll
const getWeatherAll = async (req, res) => {
  try {
    const city = req.query.q;
    const appid = req.query.appid;
    const option = {
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    }
    const result = await axios(option)
    console.log(result);
    res.status(200).send({ msg: result.data }) //get all data of city
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
//getWeatherTemp
const getWeatherTemp = async (req, res) => {
  try {
    const city = req.query.q;
    const appid = req.query.appid;
    const option = {
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
    }
    const result = await axios(option)
    res.status(200).send({ msg: result.data.main.temp }) //get only temp of city
  }
  catch (error) {
    res.status(500).send({ msg: error.message })
  }
};

//arrangeByTemp
const arrangeByTemp = async (req, res) => {
  try {
    const cities = ['Bengaluru', 'Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'London', 'Moscow'];
    const cityArr = [];
    for (let i = 0; i < cities.length; i++) {
      const options = {
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=3db52f1d8ab59f13bae754e08f840281`
      }
      result = await axios(options)
      cityArr[i] = { city: result.data.name, temp: result.data.main.temp }
      console.log(cityArr);
      
    }
    const output = cityArr.sort((a, b) => (a.temp - b.temp));
    res.status(200).send({ msg: output })
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
}

module.exports = { getWeatherAll, getWeatherTemp, arrangeByTemp }
