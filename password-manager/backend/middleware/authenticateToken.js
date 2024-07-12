const jwt = require('jsonwebtoken');

// Replace 'your_jwt_secret' with your actual secret key
const secret = 'your_jwt_secret';

const tokenauth = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'ANo Acessss' });
    }

    try {
        const decode = jwt.verify(token, secret);
        req.user = decode;
        next();
    } catch (ex) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = tokenauth;
