const UserModel = require('../models/userModel')

const createUser = async (req, res) => {
    let data = req.body;
    let saveData = await UserModel.create(data);
    res.send({ message: saveData });
}

module.exports = { createUser }