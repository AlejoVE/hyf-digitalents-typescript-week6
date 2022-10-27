import { Response, Request } from "express"


const deleteEntry = (req: Request, res: Response) => {
    const { id } = req.params
    console.log({ id })
    // TODO: delete entry from database

    res.status(200).json({
        message: 'ok',
        id
    })
}

const addNewGame = (req: Request, res: Response) => {
    const { name } = req.body

    res.status(201).json({
        message: 'New game created'
    })

    // TODO: add new game to database
}

module.exports = {
    deleteEntry,
    addNewGame
}