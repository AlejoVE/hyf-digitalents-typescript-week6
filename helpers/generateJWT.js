"use strict";
const jwt = require('jsonwebtoken');
const generateJWT = (uid, role) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, role };
        jwt.sign(payload, process.env.JWT_SECRET_SEED, {
            expiresIn: '30d'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Token not generated');
            }
            resolve(token);
        });
    });
};
module.exports = {
    generateJWT
};
