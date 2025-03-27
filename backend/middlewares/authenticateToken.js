const jwt = require('jsonwebtoken');

const authenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.redirect('/login');
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

    });
};

