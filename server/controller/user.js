import mongoose from 'mongoose';
import Users from '../models/auth.js';


export const getAlluser = async (req, res) => {
    try {
        const user = await Users.find();
        const Alluser = [];
        user.forEach(user => {
            Alluser.push({ _id: user._id, name: user.name, tags: user.tags, about: user.about, joinedon: user.joinedOn })
        });
        res.status(200).json(Alluser);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }


}


export const Updateuser = async (req,res) => {
    const {id:_id} =  req.params;
    const {name,tags,about} = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(" unavailable...");
      }
     try {
       const updateProfile = await Users.findByIdAndUpdate(_id ,{
        $set:{
            name:name, tags:tags , about:about
        }
       },{new:true}) 
       res.status(200).json(updateProfile)
     }catch(error) {
        res.status(404).json(error)
        console.log(error)
     }    
}