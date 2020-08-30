const express = require('express');
const router = express.Router();
// var user_controller = require('../controllers/userController');

router.get('/register-a-support', (req, res) => {
    res.render('./patient/register-a-support');
});
router.get('/where-to', (req, res) => {
    res.render('./patient/where-to');
});

module.exports = router;