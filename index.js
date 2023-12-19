import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import User from './routes/user.js'
import UserAuth from './routes/auth.js'
import cors from 'cors'
const PORT = process.env.PORT || 8800;

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json())
app.use((err, req, res, next) => {
    return res.status(err.status).json({
        "message" : err.message,
        "status" : err.status
    })
})

app.use('/api/auth', UserAuth)
app.use('/api/user', User)


const connect = ()=>{
    mongoose.connect(process.env.SECRET_KEY)
    .then(()=>{console.log("DB connected")})
    .catch((err) =>{ throw err ;})
} 


app.listen(PORT, ()=>{
    connect();
    console.log("server is up");
})