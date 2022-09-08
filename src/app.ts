import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/routes'



//initializations
const app = express();
dotenv.config();

//settings
app.set('port', process.env.PORT || 8000);

//middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());




//routes
app.get('/', (req,res) => {
    res.send(`THE API is at http://localhost:${app.get('port')}`);
});


app.use(routes);


export default app;