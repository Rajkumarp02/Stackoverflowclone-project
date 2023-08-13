import { combineReducers } from "redux"
import reducer from "./reducer"
import  currentuserReducer  from "./currentuser.js"
import question from "./question.js"
import getAlluser from "./user"
export default combineReducers(
    {
       reducer,currentuserReducer,question,getAlluser
    }
)