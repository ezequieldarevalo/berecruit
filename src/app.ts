import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes'
import specialRoutes from './routes/special.routes'
import passport from 'passport'
import passportMiddleware from './middlewares/passport'

//initializations
const app = express();
dotenv.config();

//settings
app.set('port', process.env.PORT || 8000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes
app.get('/', (req, res) => {
    res.send(`THE API is at http://localhost:${app.get('port')}`);
});

app.use(authRoutes);
app.use(specialRoutes);

export default app;