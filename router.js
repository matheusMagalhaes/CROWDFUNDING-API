const express = require('express');
const campaingController = require('./controllers/CampaingController');
const router = express.Router();


router.get('/campaings',campaingController.getAll);
router.post('/donate', campaingController.donate);

module.exports = router;