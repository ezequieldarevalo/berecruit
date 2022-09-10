import { Request, Response } from 'express'

export const getWelcomeMessage = (req: Request, res: Response) => {
    return res.status(200).json({ message: "Bienvenido a la app" });
}