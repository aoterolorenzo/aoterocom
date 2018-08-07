const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resume.controller');

router.get('/:uname', resumeController.getAlberto);
router.get('/:uname/lang/:lang', resumeController.getAlbertobyLang);

module.exports = router;

