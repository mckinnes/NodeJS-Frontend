const express = require('express');
// const { navBar } = require('./navigationBars/main');
// const { footer } = require('./footers/main');
// const { websiteAlert } = require('./websiteAlerts/main');

const router = express.Router();

// Routes from other files Bringing in routes from 'apps'.
router.use('/', require('../../apps/_/apps').router);

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
    'pages/index',
    {
      title: 'Acme',
      alert,
      //websiteAlert: websiteAlert(),
      //navBar,
      //footer,
      activePage: 'index'
    }
  );
});

module.exports.router = router;