const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/celebrities', (req, res, next) => {
  res.render('celebrities');
});


module.exports = router;
