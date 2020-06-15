const express = require('express')
const routes = express.Router()
const UserController = require('../controller/UserController')
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({extended:false}));
routes.use(bodyParser.json());

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

module.exports = routes