const productModel = require('../models/productModel');
const userModel = require('../models/userModel');
const orderModel = require('../models/orderModel');

const createOrder = async (req, res) => {
    const data = req.body;
    const pId = data.productId;
    const uId = data.userId;
    //productValidation
    const product = await productModel.findById(pId);
    if (!product) return res.send({ message: 'Product does not exit' });
    //userFinding
    const user = await userModel.findById(uId)
    if (!user) return res.send({ message: 'User does not exit' });

    const header = req.headers['isfreeappuser'];
    let headerValue = false;
    if (header === 'true') headerValue = true;
    let order = {
        isFreeAppUser: headerValue,//true or false
        productId: pId,
        userId: uId
    }
    //scenario-1
    if (headerValue) {
        order.amount = 0
        await orderModel.create(order)
        return res.send({ message: 'Order Created', data: order });
    }
    else {
        //scenario-2
        if (user.balance >= product.price) {
            user.balance -= product.price
            await user.save()
            order.amount = product.price
            await orderModel.create(order)
            return res.send({ message: 'Order Created', data: order });
        } else {
            //scenario-3
            return res.send({ message: 'User has not sufficient balance' });
        }
    }
}

module.exports = { createOrder }