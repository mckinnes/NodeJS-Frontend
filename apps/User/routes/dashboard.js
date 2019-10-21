const express = require('express');

const router = express.Router();

// declare route functions
let getDashboard;

// declare routes
router.get('/dashboard', (req, res) => getDashboard(req, res));

getDashboard = async (req, res) => {
  console.log(req.session);
  const { alert, user } = req.session;
  console.log(user)
  req.session.alert = null;
  res.render(
    'user/pages/dashboard',
    {
      title: 'Acme',
      alert,
      //navBar,
      //footer,
      activePage: 'index',
      user
    }
  );
};

module.exports.routes = router;
