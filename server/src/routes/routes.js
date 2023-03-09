const routes = require('express').Router();
const promptController = require('../controllers/promptController');

routes.post('/api/prompt', promptController.sendText)

module.exports = routes;