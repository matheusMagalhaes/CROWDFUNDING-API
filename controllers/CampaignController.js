const campaignModel = require('../models/CampaignModels');

async function getAll (req, res){
  const campaigns = await campaignModel.getAll();

  return res.status(200).json(campaigns);
}

async function donate(req, res) {
  
  try {
    const donated = await campaignModel.donate(req.body);

    return res.status(201).json(donated);
  } catch (error) {
    console.error('Error making donation:', error);
    res.status(500).json({ error: 'An error occurred while making the donation.' });
  }
}

module.exports = {
  getAll,
  donate,
};
