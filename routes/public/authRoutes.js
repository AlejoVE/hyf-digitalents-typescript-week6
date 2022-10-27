"use strict";
// Base Url /api/games
const authRouter = require('express').Router();
const { generateToken } = require('../../controllers/authController');
authRouter.post('/token', generateToken);
module.exports = authRouter;
