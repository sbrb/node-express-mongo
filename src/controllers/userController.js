const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

//-------------------------createUser------------------------------
const createUser = async (req, res) => {
  try {
    const data = req.body;
    const savedData = await userModel.create(data);
    res.status(201).send({ status: true, message: savedData });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};

//-------------------------loginUser------------------------------
const loginUser = async (req, res) => {
  try {
    const userName = req.body.emailId;
    const password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user) return res.status(400).send({ status: false, message: 'username or the password is not correct' });
    //---------------------token generation-------------------------
    const token = jwt.sign({ userId: user._id.toString(), place: 'Murshidabad' }, 'Shayan Biswas');
    res.setHeader('x-auth-token', token);
    res.status(200).send({ status: true, token: token });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};
//--------------------------getUser-----------------------------
const getUserData = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userDetails = await userModel.findById(userId);
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};
//-------------------------updateUser------------------------------
const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = req.body;
    const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: true, data: updatedUser });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};
//-------------------------deleteUser------------------------------
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    res.status(200).send({ status: true, data: updatedUser });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};
//-------------------------postMassage------------------------------
const postMassage = async (req, res) => {
  try {
    const userId = req.params.userId;
    const postMsg = req.body.post;
    const user = await userModel.findById(userId);
    user.post = []
    let updatePost = user.post
    updatePost.push(postMsg)
    const postMassage = await userModel.findOneAndUpdate({ _id: userId }, { post: updatePost }, { new: true });
    res.status(200).send({ status: true, data: postMassage });
  }
  catch (err) {
    res.status(500).send({ error: err.message })
  }
};

module.exports = { createUser, loginUser, getUserData, updateUser, deleteUser, postMassage };
