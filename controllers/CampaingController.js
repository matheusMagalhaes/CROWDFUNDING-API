const campaingModel = require('../models/CampaingModels');

async function getAll (req, res){
  const campaings = await campaingModel.getAll();

  return res.status(200).json(campaings);
};


async function donate(req, res) {
  
  try {
    const donated = await campaingModel.donate(req.body);

    return res.status(201).json(donated);
  } catch (error) {
    console.error('Error making donation:', error);
    res.status(500).json({ error: 'An error occurred while making the donation.' });
  }
}


// const deleteDonation = async(req, res) =>{
//   const {id} = req.params;

//   await campaingModel.deleteDonation(id);

//   return res.status(204).json();
// };




module.exports = {
  getAll,
  donate,
  deleteDonation,
};
