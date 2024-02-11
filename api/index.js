import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import userRouter from './routes/user.route.js'; 
import authRouter from './routes/auth.route.js'; 

const app = express();
app.use(express.json()); // for parsing application/json

// Routes:
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

// Middleware for handling errors:
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong...";
  
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message
  });
})










// connect to MongoDB and start the server:
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');

app.listen(3000, ()=>{
    console.log('Server is running on port 3000!')
});

}).catch((err) => {
  console.error(err);
});

