import express from 'express'
const router = express.Router();
import { login,signup } from '../controller/auth.js';
import { Updateuser, getAlluser } from '../controller/user.js';
import auth from '../middleware/auth.js'

router.post('/signup',signup)



router.post('/login',login)
    
router.get('/getAlluser',getAlluser)

router.patch('/update/:id',auth,Updateuser)

export default router;