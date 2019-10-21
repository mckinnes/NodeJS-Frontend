const express = require('express');
const superagent = require('superagent');

const router = express.Router();

router.get('/', (req, res) => {
  // const { alert } = req.session;
  // req.session.alert = null;
  const alert = {
    type: 'success',
    highlighted: 'Successfully Did Something!',
    text: 'This is an example of a flash alert.',
    duration: 5000
  };
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
      values: 'email id'
    });

  console.log(result.body);
});

module.exports.routes = router;
