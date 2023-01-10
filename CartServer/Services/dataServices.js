const mongoose = require('mongoose')
const db = require('./db')


const getAllProducts = () => {
    return db.Product.find().then((result) => {
        if (result) {
            return {
                status: true,
                statusCode: 200,
                product: result
            }
        }
        else {
            return {
                status: false,
                statusCode: 402,
                message: "product not found"
            }
        }
    })
}

const addToWishList = ({ id, title, price, description, image }) => {
    return db.Wishlist.findOne({ id }).then(async (result) => {
        if (result) {
            return {
                status: false,
                statusCode: 401,
                message: "product already added"
            }
        }
        else {
            const newProduct = new db.Wishlist({
                id, title, price, description, image
            })
            await newProduct.save()
            return {
                status: true,
                statusCode: 200,
                message: "product successfully added"
            }
        }
    })
}

const getWishlist = () => {
    return db.Wishlist.find().then((result) => {
        if (result) {
            return {
                status: true,
                statusCode: 200,
                product: result
            }
        }
        else {
            return {
                status: false,
                statusCode: 401,
                message: "wishlist empty"
            }
        }
    })
}

const deleteWish = async (id) => {
    return await db.Wishlist.deleteOne({ _id: id }).then((result) => {
        if (result) {
            return {
                status: true,
                statusCode: 200,
                message: "product deleted from wishlist"
            }
        }
        else {
            return {
                status: false,
                statusCode: 401,
                message: "product not found"
            }
        }
    })
}

module.exports = {
    getAllProducts,
    addToWishList,
    getWishlist,
    deleteWish
}