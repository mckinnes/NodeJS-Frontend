const express = require('express');
const superagent = require('superagent');

const router = express.Router();

router.post('/sign-out', async (req, res) => {
  const {
    username, password
  } = req.body;

  req.session.user = null;

  req.session.alert = {
    type: 'success',
    highlighted: 'Successfully Logged Out!',
    text: ``,
    duration: 5000
  };

  res.redirect('/user');
});

module.exports.routes = router;
