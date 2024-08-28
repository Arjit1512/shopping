import express from 'express';
import bodyParser from 'body-parser';
import User from './models/User.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.post('/register',async (req,res)=>{
    const {userName,email,password} = req.body;
    const isUserexists = await User.findOne({email});

    if(isUserexists){
        return res.status(401).json("User already exists!");
    }

    const newUser = new User({email,password,userName});

    const savedUser = await newUser.save();
    return res.status(500).json(savedUser);
})
mongoose.connect('mongodb+srv://avadhanamarjit15:mongoarjit15@cluster0.lvudfup.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000, () => {
            console.log('Server running on 3000');
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });
