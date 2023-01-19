const axios = require('axios')

//getStates
const getStates = async (req, res) => {
  try {
    const options = {
      method: 'get',
      url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
    }
    const result = await axios(options)
    const data = result.data
    res.status(500).send({ msg: data, status: true })
  }
  catch (err) {
    res.status(500).send({ msg: err.massage })
  }
}
//getDistricts
const getDistricts = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const options = {
      method: 'get',
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`
    }
    let result = await axios(options);
    const data = result.data
    res.status(200).send({ msg: data, status: true })
  }
  catch (err) {
    res.status(500).send({ msg: err.massage })
  }
}
//getByPin
const getByPin = async (req, res) => {
  try {
    const pin = req.query.pincode
    const date = req.query.date
    const options = {
      method: 'get',
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
    }
    let result = await axios(options);
    const data = result.data
    res.status(200).send({ msg: data, status: true })
  }
  catch (err) {
    res.status(500).send({ msg: err.massage })
  }
}
//getOtp
const getOtp = async (req, res) => {
  try {
    var options = {
      method: 'post',
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
    }
    const result = await axios(options)
    res.status(200).send({ msg: result.data })
  }
  catch (err) {
    res.status(500).send({ msg: err.message })
  }
}
//confirmOTP
const confirmOTP = async (req, res) => {
  try {
    const options = {
      method: 'post',
      url: `https://cdn-api.co-vin.in/api/v2/auth/public//v2/auth/public/confirmOTP`,
    }
    const result = await axios(options)
    res.status(200).send({ msg: result.data })
  }
  catch (err) {
    res.status(500).send({ msg: err.message })
  }
}
//Assignment
// districtId
const getDistrictId = async (req, res) => {
  try {
    const districtId = req.query.districtId;
    const date = req.query.date;
    const option = {
      method: 'get',
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
    }
    const result = await axios(option)
    res.status(200).send({ msg: result.data });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
}

module.exports = { getStates, getDistricts, getByPin, getOtp, confirmOTP,getDistrictId}
