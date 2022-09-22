import { Request, Response } from 'express'
import User, { IUser } from '../models/user'
import Postulant, { IPostulant } from '../models/postulant'
import jwt from 'jsonwebtoken'
import config from '../config/config'
import { getRoleByEmail } from '../config/functions'

function createToken(user: IUser) {
    return jwt.sign({ id: user.id, email: user.email, role: getRoleByEmail(user.email) }, config.jwtSecret, {
        expiresIn: 86400
    })
}



export const signUp = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ msg: 'Please. Send your email and password' })
    }

    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ msg: 'The user already exists' });
    }
    const role = getRoleByEmail(req.body.email);
    let newUser;
    if (role === 'postulant') {
        const newPostulant = new Postulant({ email: req.body.email, state: 'created' });
        await newPostulant.save();
        newUser = new User({ ...req.body, role, postulantId: newPostulant?._id || null });
    } else {
        newUser = new User({ ...req.body, role });
    }
    await newUser.save();
    return res.status(201).json(newUser);
};

export const signIn = async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ msg: 'Please. Send your email and password' })
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ msg: 'The user does not exist' });
    }
    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        return res.status(200).json({
            username: user.email,
            role: user.role,
            token: createToken(user),
            postulantId: user.postulantId
        })
    }

    return res.status(400).json({ msg: 'The email or password are incorrect' });
};