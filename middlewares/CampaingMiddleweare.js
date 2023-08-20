const validateBody = (req, res, next) => {
  const { body } = req;

  if(body.name === undefined){
    return res.status(400).json({message: 'name is required'});
  }

  if(body.name === ''){
    return res.status(400).json({message: 'name is required'});
  }

  next();
};

module.exports = {
  validateBody,
};
