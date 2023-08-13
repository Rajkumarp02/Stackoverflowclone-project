import express from 'express'
import {AskQuestion, deleteQuestion, voteQuestion} from '../controller/Question.js'
import { getAllQuestion  } from '../controller/Question.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.post('/AskQuestion',auth,AskQuestion)

router.get('/get' , getAllQuestion)

router.delete('/delete/:id',auth, deleteQuestion)
router.patch('/vote/:id',auth,voteQuestion)

export default router;