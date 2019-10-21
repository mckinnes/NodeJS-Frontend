const express = require('express');

const router = express.Router();

// declare route functions
let getDashboard;

// declare routes
router.get('/dashboard', (req, res) => getDashboard(res, res));

getDashboard = async (req, res) => {
  // const { alert } = req.session;
  // req.session.alert = null;
  const alert = {
    type: 'success',
    highlighted: 'Successfully Did Something!',
    text: 'This is an example of a flash alert.',
    duration: 5000
  };
  res.render(
    'user/pages/dashboard',
    {
      title: 'Acme',
      alert,
      //navBar,
      //footer,
      activePage: 'index'
    }
  );
};

module.exports.routes = router;
