import Razorpay from "razorpay";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";
import express from "express";
import mongoose from 'mongoose';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import transRoute from './routes/transport.js';
import wareUps from './routes/warehouse.js';
//import packRoute from './routes/package.js';
import wareRoute from './routes/warehouse.js';
import w_current from './routes/warehouse_current.js';
import ware_test from './routes/ware_test.js';
import productDetails from './routes/package.js';
// import fetchCurrent from './routes/warehouse.js';
import dotenv from 'dotenv';
import path from 'path'


const app = express();
dotenv.config();
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth' , authRoute);
app.use('/api/transport', transRoute);
//app.use('/api/warehouse', wareUps);
app.use('/api/warehouse_current', w_current);
app.use('/api/warehouse_test',ware_test);
app.use('/api/warehouse', wareRoute);
app.use('/api/package',productDetails);
// app.use('/api/warehouse',fetchCurrent);

config({ path: "./config/config.env" });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", paymentRoute);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
  next();
});

const __dir = path.resolve();

app.use("/uploads" , express.static(path.join(__dir , "/uploads")))

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

app.post("/api/checkout", async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const instance =new Razorpay({
    key_id : process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})
  try {
    const order = await instance.orders.create(options);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to create order",
      error,
    });
  }
});



// app.post('/api/CheckOutUpdate',(req, res)=>{
//   const product_id = req.body.product_id;
//   const check_out = req.body.check_out;

//   ware_test.update({ product_id : product_id },{$set:{check_out:check_out}}, (err, doc)=>{
//     if(err) return console.log(err);
//     res.json(doc)
//   })
// })

app.put('/api/warehouse_test/product', (req, res) => {
  const { productId, newDate } = req.body;
  ware_test.findOneAndUpdate({ productId }, { check_out: newDate })
    .then(() => {
      res.status(200).send('Product check-out date updated successfully');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error updating product check-out date');
    });
});



mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error('Error connecting to DB:', err));

export const instance =new Razorpay({
    key_id : process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})

app.listen(process.env.PORT || 3000,()=> 
console.log(`server is working on  ${process.env.PORT}`)
)

