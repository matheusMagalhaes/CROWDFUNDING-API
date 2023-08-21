const connection = require('./connection');

const getAll = async () =>{
  const [campaings] = await connection.execute('SELECT * FROM campaigns');
  return campaings;
};

async function donate (donation) {
  const { campaignId, donatorId, amount } = donation;

  try {
    let idDonator = null;

    // Check if the donator already exists
    const findDonatorQuery = 'SELECT ID FROM Donators WHERE ID = ?';
    const [existingDonator] = await connection.query(findDonatorQuery, [donatorId]);

    if (existingDonator) {
      idDonator = existingDonator.ID;

      // Insert the donation
      const insertDonationQuery = 'INSERT INTO Donations (CAMPAING_ID, DONATOR_ID, AMOUNT) VALUES (?, ?, ?)';
      const [donated] = await connection.execute(insertDonationQuery, [campaignId, donatorId, amount]);
      
      return donated;
    } else {
      // Insert the new donator
      const insertDonatorQuery = 'INSERT INTO Donators (NICKNAME) VALUES (?)';
      const [insertedDonator] = await connection.query(insertDonatorQuery, [idDonator]);
      idDonator = insertedDonator.insertId;

      // Insert the donation
      const insertDonationQuery = 'INSERT INTO Donations (CAMPAING_ID, DONATOR_ID, AMOUNT) VALUES (?, ?, ?)';
      const [donated] = await connection.execute(insertDonationQuery, [campaignId, idDonator, amount]);

      return donated;
    }
  } catch (error) {
    console.error('Error during donation:', error);
    throw error;
  }
}


module.exports = {
  getAll,
  donate,
};