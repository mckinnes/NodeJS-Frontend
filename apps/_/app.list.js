// A list of all the apps in './apps/'
// Grabbing their app_main file, which contians their 'contents' module
const User = require('../User/app_main');

module.exports.apps = [
  User,
];
