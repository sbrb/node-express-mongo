const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
//---------------------------body verification---------------------------
const mid1 = async (req, res, next) => {
    try {
        let data = req.body
        if (Object.keys(data).length == 0) res.status(400).send({ status: false, message: 'Please fill the data' })
        next()
    }
    catch (err) {
        res.status(500).send({ message: 'Error', error: err.message })
    }
}

const mid2 = async (req, res, next) => {
    try {
        //---------------------------header verification---------------------------
        let token = req.headers['x-Auth-token'];
        if (!token) token = req.headers['x-auth-token'];
        // let token = req.headers['x-auth-token'];
        if (!token) return res.status(401).send({ status: false, message: 'token must be present' });
        //---------------------------token verification------------------------------
        const decodedToken = jwt.verify(token, 'Shayan Biswas');
        if (!decodedToken) return res.status(403).send({ status: false, message: 'token is invalid' });
        //---------------------------finding user------------------------------
        const userId = req.params.userId;
        const user = await userModel.findById(userId);
        if (!user) return res.status(404).send({ status: false, message: 'No such user exists' });
        //---------------------------authorization user--------------------------
        if (userId != decodedToken.userId) return res.status(403).send({ status: false, message: 'Unauthorized person' });
        //---------------------------isDeleted true------------------------------
        const user1 = await userModel.findById(userId).select({ isDeleted: 1, _id: 0 });
        if (user1.isDeleted == true) return res.status(404).send({ status: true, message: 'User has been deleted' });
        next()
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
}

module.exports = { mid1, mid2 };
