import { Router } from 'express'
const router = Router();
import { getPostulantById } from '../controllers/postulant.controller';
import passport from 'passport'

router.get('/whoami', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { user }: any = req;
    if (!user) {
        res.status(400).json({ msg: "Invalid token" })
    }
    res.status(200).json({ username: user.email, role: user.role, postulantId: user.postulantId });
})

router.get('/postulant/:id', passport.authenticate('jwt', { session: false }), getPostulantById)

export default router;