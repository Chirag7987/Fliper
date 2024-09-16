const Offering = require('../models/Offering');

// Add a new offering
exports.addOffering = async (req, res) => {
  try {
    const newOffering = new Offering(req.body);
    await newOffering.save();
    res.status(201).json({ msg: 'Investment offering created' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Get all offerings
exports.getOfferings = async (req, res) => {
  try {
    const offerings = await Offering.find();
    res.json(offerings);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
