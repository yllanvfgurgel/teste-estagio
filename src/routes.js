const express = require('express')
const routes = express.Router()
const users = require('./controllers/UserController')
const UserController = require('./controllers/UserController')


routes.get('/', (req, res) => {
    return res.redirect('/users')
})

routes.get('/users', UserController.index)

routes.get('/users/create', UserController.create)

routes.get('/users/:id/edit', UserController.edit)

routes.post('/users', UserController.post)

routes.put('/users', UserController.put)

routes.delete('/users', UserController.delete)



module.exports = routes