import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
app.use(express.json()); // for parsing application/json

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!')
});

}).catch((err) => {
  console.error(err);
});

