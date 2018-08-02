const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resume.controller');

router.get('', resumeController.getAlberto);

module.exports = router;

