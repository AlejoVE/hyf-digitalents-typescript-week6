// Base Url /api/admin

const { deleteEntry, addNewGame } = require('../../controllers/adminControllers')
const { validateJWT } = require('../../middlewares/validateJWT')
const { checkIfAdmin } = require('../../middlewares/checkIfAdmin')

const adminRouter = require('express').Router();

// Geneal middlewares
adminRouter.use([validateJWT, checkIfAdmin])

adminRouter.post('/newGame', addNewGame);

// TODO: change this to delete
adminRouter.get('/entry/:id', deleteEntry);

module.exports = adminRouter;
