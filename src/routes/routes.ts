// importo enrutador
import {Router} from 'express'
const router = Router();
import  {getWelcomeMessage} from '../controllers/notifications'

// importo para la validacion de datos de entrada
import bodyParser from 'body-parser'
// import { validate, ValidationError } from 'express-validation'
// import {valActivateAdmin,valActivateCustomer,valDeleteCustomer} from '../middlewares/validations'

// uso validacion de datos de entrada
router.use(bodyParser.json());
// router.use(function(err:any, req:any, res:any, next:any) {
//   if (err instanceof ValidationError) {
//     return res.status(err.statusCode).json(err)
//   }
 
//   return res.status(500).json(err)
// })

////////////////////////////////////////////////////////////////////
////////////////       REGLAS DE ENRUTAMIENTO       ////////////////
////////////////////////////////////////////////////////////////////

// Welcome
// router.get('/welcome', passport.authenticate('jwt',{session:false}), bienvenido);
router.get('/welcome', getWelcomeMessage);

// Get user info
// router.get('/user', passport.authenticate('jwt',{session:false}), infoUser);

// Logout
// router.get('/logout', passport.authenticate('jwt',{session:false}), function(req, res){
//   req.logout();
//   res.redirect('/');
// });

// Get customer
// router.get('/getCustomers', passport.authenticate('jwt',{session:false}), getCustomers );

// Customer Activation
// router.post(
//     '/activateCustomer',
//     passport.authenticate('jwt',{session:false}), //middleware passport
//     validate(valActivateCustomer,{},{}), //middleware validacion datos de entrada
//     activateCustomer );

// Customer Deletion
// router.post(
//     '/deleteCustomer',
//     passport.authenticate('jwt',{session:false}), //middleware passport
//     validate(valDeleteCustomer,{},{}), //middleware validacion datos de entrada
//     deleteCustomer );

// Admin Activation
// router.post(
//     '/activateAdmin',
//     passport.authenticate('jwt',{session:false}), //middleware passport
//     validate(valActivateAdmin,{},{}), //middleware validacion datos de entrada
//     activateAdmin 
// );

export default router;