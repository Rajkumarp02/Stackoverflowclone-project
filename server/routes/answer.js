import express from "express";
import {deleteAnswer, postAnswer} from "../controller/answer.js";

const router = express.Router();


router.patch("/post/:id",postAnswer);
router.patch("delete/:id",deleteAnswer);


export default router;