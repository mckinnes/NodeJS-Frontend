// A list of all the apps in './apps/'
// Grabbing their app_main file, which contians their 'contents' module
const UserAuth = require('../User-Auth/app_main');
const User = require('../User/app_main');

module.exports.apps = [
  UserAuth,
  User,
];
