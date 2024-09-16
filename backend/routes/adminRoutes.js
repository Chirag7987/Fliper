const express = require('express');
const { addOffering, getOfferings } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Add a new offering (protected route)
router.post('/offerings', authMiddleware, addOffering);

// Get all offerings
router.get('/offerings', getOfferings);

module.exports = router;
