import { Request, Response } from "express";

const { generateJWT } = require('../helpers/generateJWT')

const generateToken = async (req: Request, res: Response) => {
    const { uid, role } = req.body

    try {
        const token = await generateJWT(uid, role)
        res.status(200).json({
            token
        })
    } catch (error) {
        res.status(500).send('SERVER ERROR')
    }

}

module.exports = {
    generateToken
}