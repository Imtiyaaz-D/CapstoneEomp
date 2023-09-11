const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
const { users,products,orders} = require('../model')


// ============= User`s Routes=========
routes.get('/users',(req,res)=>{
    users.fetchUsers(req,res)
})
routes.get('/user/:id',(req,res)=>{
    users.fetchUser(req,res)
})
routes.post('/user', bodyParser.json(),(req,res)=>{
    users.registerUser(req,res)
})
// routes.post('/users', bodyParser.json(),(req,res)=>{
//     users.addUser(req,res)
// })

routes.put('/user/:id',bodyParser.json(),(res,req)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id',bodyParser.json(),(req,res)=>{
    users.deleteUser(req,res)
})
routes.post('/login',bodyParser.json(),(req,res)=>{
    users.login(req,res)
})

// ============= Product`s Routes ============
routes.get('/products',(req,res)=>{
    products.fetchProducts(req,res)
})
routes.get('/products/:id',(req,res)=>{
    products.fetchProduct(req,res)
})

routes.post('/product',bodyParser.json(),(req,res)=>{
    products.addProduct(req,res)
})

routes.put('/products/:id',bodyParser.json(),(req,res)=>{
    products.updateProducts(req,res)
})

// routes.patch('/products/:id',bodyParser.json(),(res,req)=>{
//     products.fetchProduct(req,res)
// })

routes.delete('/products/:id',bodyParser.json(),(req,res)=>{
    products.deleteProducts(req,res)
})

// ==============Order`s Routes=========
routes.get('/orders',(req,res)=>{
    orders.fetchOrder(req,res)
})
routes.get('/order/:id',(req,res)=>{
    orders.fetchOrder(req,res)
})

routes.post('/orders',bodyParser.json(),(req,res)=>{
    orders.addOrder(req,res)
})

routes.put('/orders/:id',bodyParser.json(),(req,res)=>{
    orders.updateOrders(req,res)
})
routes.delete('/orders/:id',bodyParser.json(),(req,res)=>{
    orders.deleteOrder(req,res)
})

module.exports = {
    express,
    routes,
    verifyAToken
}