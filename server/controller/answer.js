import mongoose from "mongoose";
import Question from "../models/Question.js";

export const postAnswer = async (req, res) => {
  const { id: _id } = req.params;
  const { noOfAns, answerBody, userAnswer } = req.body;
  console.log(req.body)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  updateNoOfQuestions(_id, noOfAns);
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(_id, {
      $addToSet: { answer: [{ answerBody, userAnswer, userId:req.userId }] },
    });
   res.status(200).json(updatedQuestion);
  }catch(error) {
    res.status(400).json("error in updating");
    console.log(error)
  }
};

const updateNoOfQuestions = async (_id, noOfAns) => {
  try {
    await Question.findByIdAndUpdate(_id, {
      $set: { noOfAns: noOfAns },
    });
  }catch(error) {
    console.log(error);
  }
};


export const deleteAnswer = async (req,res) => {
  const {id:_id} = req.params;
  const {answerId,noOfAns} = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }
  
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(404).send("question unavailable...");
  }

  updateNoOfQuestions(_id, noOfAns);

  try {
      await Question.updateOne(
        {_id},
        {$pull:{'answer': {_id:answerId}}}
      )
     res.status(200).send("successfully...");

    
  } catch (error) {
    res.status(404).json(error)
  }

}