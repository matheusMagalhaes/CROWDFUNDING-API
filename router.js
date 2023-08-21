const express = require('express');
const campaingController = require('./controllers/CampaignController');
const router = express.Router();
const middleWare = require('./middlewares/CampaignMiddleware');


router.get('/campaign',campaingController.getAll);
router.post('/donate', middleWare.validateBody, campaingController.donate);

module.exports = router;