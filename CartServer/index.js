const express = require('express')
const cors = require('cors')
// const mongoose = require('./Services/db')
const app = express()


app.use(express.json())

app.use(cors({
  origin: 'http://localhost:4200'
}))


app.listen(3000, () => {
  console.log("express running at 3000");
})


const dataservice = require('./Services/dataServices')

app.get('/all-products', (req, res) => {
  dataservice.getAllProducts().then((result) => {
    res.status(result.statusCode).json(result.product)
  })
})

app.post('/addtowishlist', (req, res) => {
  dataservice.addToWishList(req.body).then((result) => {
    res.status(result.statusCode).json(result)
  })
})

app.get('/getwishlist', (req, res) => {
  dataservice.getWishlist().then((result) => {
    res.status(result.statusCode).json(result)
  })
})

app.delete('/deletewish/:id', (req, res) => {
  dataservice.deleteWish(req.params.id).then((result) => {
    res.status(result.statusCode).json(result)
  })
})