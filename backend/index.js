import express from "express"
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from "./Routes/booking.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get('/',(req, res)=>{
    res.send('Api is working');
});

//database connection
mongoose.set('strictQuery',false)
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB database is connected')
    }catch(err){
        console.log('MongoDB database is connection failed')
    }
}

//middleware
app.use(express.json());
app.use(cors({
    origin: 'https://medicarefront-end.onrender.com',
  }));
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/doctors', doctorRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/bookings',bookingRoute);
app.listen(port, ()=>{
    connectDB();
    console.log("Server is running on port "+port);
});