"use strict";
// Base Url /api/games
const gamesRouter = require('express').Router();
const { submitScore, viewRecord, seeAvailableGames } = require('../../controllers/simonSaysController');
gamesRouter.post('/:gameName', submitScore);
gamesRouter.get('/:gameName/score', viewRecord);
gamesRouter.get('/list', seeAvailableGames);
module.exports = gamesRouter;
