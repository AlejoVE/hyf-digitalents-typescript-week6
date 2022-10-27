"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const jwt = require('jsonwebtoken');
    const validateJWT = (req, res, next) => {
        const token = req.header('x-token');
        if (!token) {
            return res.status(401).json({
                msg: 'Token missing'
            });
        }
        console.log({ token });
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET_SEED);
            req.uid = payload.uid;
            req.role = payload.role;
        }
        catch (error) {
            console.log(error);
            return res.status(401).json({
                msg: 'Invalid Token'
            });
        }
        next();
    };
    module.exports = {
        validateJWT
    };
})();
