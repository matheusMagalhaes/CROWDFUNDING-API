const express = require('express');
const campaingController = require('./controllers/CampaingController');
const router = express.Router();


router.get('/campaings',campaingController.getAll);
router.post('/donate', campaingController.donate);
// router.delete('/campaings/:id', campaingController.deleteDonation);

module.exports = router;