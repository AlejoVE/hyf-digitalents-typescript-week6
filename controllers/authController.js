"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { generateJWT } = require('../helpers/generateJWT');
const generateToken = async (req, res) => {
    const { uid, role } = req.body;
    try {
        const token = await generateJWT(uid, role);
        res.status(200).json({
            token
        });
    }
    catch (error) {
        res.status(500).send('SERVER ERROR');
    }
};
module.exports = {
    generateToken
};
