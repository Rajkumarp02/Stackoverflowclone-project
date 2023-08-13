import express from 'express'
const app =  express();
import mongoose from'mongoose'
import cors from'cors'
import useRouter from './routes/user.js'
import Ask from './routes/Ask.js'
import answer from './routes/answer.js'

app.use(
  cors({
    origin:"*",
  })
);


app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))

app.use('/user',useRouter)
app.use('/Question',Ask)
app.use('/answer',answer)
app.use(express.json());

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

app.use(cors());

app.get('/',  ((req,res) => {
  res.send("hi");
}))

const connect_url = "mongodb+srv://rajkumarp:Rajahb12@cluster0.seyim6i.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connect_url,{useNewUrlParser:true, useUnifiedTopology:true})
.then(() => app.listen(8000, () => {
      console.log("success")
})).catch((err) => console.log(err.message))
