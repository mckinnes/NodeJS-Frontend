const express = require('express');
const superagent = require('superagent');

const router = express.Router();

router.get('/', (req, res) => {
  const { alert } = req.session;
  req.session.alert = null;
  res.render(
    'user-auth/pages/sign-in',
    {
      title: 'Acme',
      alert,
      //navBar,
      //footer,
      activePage: 'index'
    }
  );
});

router.post('/sign-in', async (req, res) => {
  const {
    username, password
  } = req.body;

  const result = await superagent.post(`${process.env.API_URL}/user/sign-in`)
    .send({
      key: process.env.API_KEY,
      username,
      password,
      values: 'email id firstName lastName'
    });
    
  const userValues = result.body.values;
  req.session.user = {
    id: userValues.id,
    email: userValues.email,
    firstName: userValues.firstName,
    lastName: userValues.lastName,
    lastLogged: userValues.lastLogged
  };

  req.session.alert = {
    type: 'success',
    highlighted: 'Successfully Did Something!',
    text: `Last Logged In: ${userValues.lastLogged}`,
    duration: 5000
  };

  res.redirect('/user/dashboard');
});

module.exports.routes = router;
