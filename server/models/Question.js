import mongoose from'mongoose';


const questionSchema =  mongoose.Schema({
    qnTitle:{type:String, required:[true,"Question must have a body"]},
    qnBody:{type:String, required:[true, "Question must have a body"]},
    qnTags:{ type:[String], required:[true,"Question must have a tags"]},
    noOfAns:{type:Number, default:0},
    upvotes:{type:[String] , default:[]},
    downvotes:{type:[String] , default:[]},
    userPosted:{type:String, required:"Question must have posted as user"},
    postedOn:{type:Date , default:Date.now},
    userId:{type:String},
    askedOn: { type: Date, default: Date.now },
    answer: [{
        answerBody:String,
        userAnswer:String,
        userId:String,
        answerdOn:{
            type:Date, default:Date.now
        },
    }]
})

export default mongoose.model("Question",questionSchema);