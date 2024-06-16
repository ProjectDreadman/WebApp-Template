// api.js
const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/ExampleController');

router.get('/example', exampleController.getExample);
router.post('/example', exampleController.postExample);

module.exports = router;
