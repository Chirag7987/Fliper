const Admin = require('../models/Admin.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register admin
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ msg: 'Admin already exists' });
    }
    admin = new Admin({ email, password });
    await admin.save();
    res.status(201).json({ msg: 'Admin registered' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Admin login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const payload = { admin: { id: admin.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '5h'
    });
    res.json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
