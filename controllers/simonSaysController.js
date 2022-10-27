"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submitScore = (req, res) => {
    const { score, name } = req.body;
    const { gameName } = req.params;
    // TODO: save score to the correct game
    res.status(200).json({
        score,
        name
    });
};
const viewRecord = (req, res) => {
    const { gameName } = req.params;
    // TODO: look for the right game and show correct record
    res.status(200).json({
        record: 5000
    });
};
const seeAvailableGames = (req, res) => {
    // TODO: get list of games from database
    const list = ['Simon Says', 'Poker', "BlackJack"];
    res.status(200).json({
        list
    });
};
module.exports = {
    submitScore,
    viewRecord,
    seeAvailableGames
};
