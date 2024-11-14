import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { postLogin, postUser } from './controllers/auth.js';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async()=>{
    const conn = await mongoose.connect(MONGO_URI);
    if(conn){
        console.log('MongoDB connected👍🏻');
    }}
connectDB();

app.get('/health', (req , res)=>{
    res.json({
        status: 'ok',
        message: 'Server is running',
    })
})

app.post('/register' , postUser);
app.post('/login' , postLogin)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });