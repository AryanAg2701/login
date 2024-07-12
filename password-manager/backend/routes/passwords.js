const express = require('express');
const Password = require('../models/password');
const authenticateToken = require('../middleware/authenticateToken.js');

const router = express.Router();

router.post('/savePassword', authenticateToken, async (req, res) => {
    const { site, username, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newPassword = new Password({ userId: req.user.userId, site, username, password: encryptedPassword });
    await newPassword.save();
    res.status(201).send('Password saved');
});

module.exports = router;
