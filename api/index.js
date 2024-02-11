import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import userRouter from './routes/user.route.js'; 
import authRouter from './routes/auth.route.js'; 

const app = express();
app.use(express.json()); // for parsing application/json

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)












mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!')
});

}).catch((err) => {
  console.error(err);
});

