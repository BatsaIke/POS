import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors"
import morgan from 'morgan';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import productRouter from './routes/productsRoutes.js';
import userRouter from './routes/userRoutes.js';
import billsRouter from './routes/billsRoute.js'
// require("colors");
dotenv.config();

//connect to database
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to database");
    
}).catch((err)=>{
    console.log(err.message);
    
})
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

//routes
app.use('/api/products', productRouter)
app.use("/api/users", userRouter);
app.use("/api/bills", billsRouter);

//create port
const PORT =process.env.PORT|| 5000;

//listen
app.listen(PORT, ()=>{
    console.log(`server is listening on port:http://localhost:${PORT}`)
})