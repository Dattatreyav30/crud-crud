const path = require('path');

const express = require('express');

const router = express.Router();

const formController = require('../controllers/formController');


router.post('/submit-form',formController.postAddproduct);


router.get('/get-all',formController.getallDetails);

router.delete('/delete-user/:id',formController.postDeleteData)

module.exports = router