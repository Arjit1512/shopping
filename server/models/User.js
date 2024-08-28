import mongoose from 'mongoose';

const prakashSchema = new mongoose.Schema({
      email:{
        type:String,
        required:true,
        unique:true
      },
      password:{
        type:String,
        required:true,
        unique:false,
        min:4
      },
      userName:{
        type:String,
        require:true,
        unique:true
      }
});

const User = mongoose.model('Prakash-Users',prakashSchema);

export default User;