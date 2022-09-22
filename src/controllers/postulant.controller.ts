import { Request, Response } from 'express'
import Postulant, { IPostulant } from '../models/postulant'

export const getPostulantById = (req: Request, res: Response): any => {
    if (!req.query.id) {
        return res.status(400).json({ msg: 'Please. Send your email and password' })
    }
    if (!Number(req.query.id)) return res.status(400).json({ msg: 'Not a number' })
    return res.status(200).json({ msg: 'is a number' })
}