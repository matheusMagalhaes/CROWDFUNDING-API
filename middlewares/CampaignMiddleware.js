const validateBody = (req, res, next) => {
  const { body } = req;

  if(body.amount === undefined){
    return res.status(400).json({message: 'It is required to give an amount of donation.'});
  }
  next();
};

module.exports = {
  validateBody,
};
