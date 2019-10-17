const express = require('express');
const superagent = require('superagent');

const router = express.Router();

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
