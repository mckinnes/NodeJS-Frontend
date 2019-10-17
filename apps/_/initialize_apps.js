/*
-------------------------------------------------------------------
This file is in charge of initializing everything from the apps:
 - The app is added to the database
 - App routes are added to the server
 - App Agenda tasks are initialized
--------------------------------------------------------------------
*/

const express = require('express');
const { apps } = require('./app.list');

const router = express.Router();

for (let i = 0; i < apps.length; i += 1) {
  router.use(apps[i].url, apps[i].routes);
}

module.exports.router = router;
