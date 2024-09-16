const mongoose = require('mongoose');

const offeringSchema = new mongoose.Schema({
  tag: { type: String, required: true },
  cardImage: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  getPrice: { type: Number, required: true },
  securityType: { type: String, required: true },
  investmentMultiple: { type: String, required: true },
  maturity: { type: String, required: true },
  minInvestment: { type: Number, required: true }
});

module.exports = mongoose.model('Offering', offeringSchema);
