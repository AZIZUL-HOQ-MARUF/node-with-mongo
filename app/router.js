const express = require('express'),
    router = express.Router(),
    mainController = require('./controller/main.controller'),
    eventController = require('./controller/events.controler');

//main routes
router.get('/', mainController.showHome)

// event routes
router.get('/events', eventController.showAllEvents);
router.get('/events/:slug', eventController.showSingle);


//Export the Router Module
module.exports = router;
