const ProductModel = require('../models/productModel')

const createProduct = async (req, res) => {
    let data = req.body;
    let saveData = await ProductModel.create(data);
    res.send({ message: saveData });
}

module.exports = { createProduct }