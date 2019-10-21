const express = require('express');

const router = express.Router();

// Routes from other files Bringing in routes from files in routes folder
router.use('/', require('./sign-in').routes);

module.exports.routes = router;
