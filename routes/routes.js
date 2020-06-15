const express = require('express')
const routes = express.Router()
const UserController = require('../controller/UserController')
const AddressController = require('../controller/AddressController')
const TechController = require('../controller/TechController')
const ReportController = require('../controller/ReportController')
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({extended:false}));
routes.use(bodyParser.json());

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/addresses', AddressController.index)
routes.post('/users/:user_id/addresses', AddressController.store)

routes.get('/users/:user_id/techs', TechController.index)
routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes