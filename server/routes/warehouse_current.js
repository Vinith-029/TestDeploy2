// const router =  require("express").Router();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { Router } from 'express';
import express from 'express';
import cors from 'cors';
import Ware_current from '../models/Ware_current.js';
const app = express();
app.use(cors());
const router = Router();
router.use(cors());

router.get("/fetchCurrent",async(req,res)=>{
    try {
        const Whist = await Ware_current.find({});
        res.json(Whist);
      }
       catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
})

router.post("/updateVal",async(req,res)=>{
    try{
        const ware = new Ware_current({
            product_ID : req.body.Product_ID,
            product_name : req.body.Product_Name,
            product_type : req.body.product_type,
            quantity : req.body.quantity,
            volume : req.body.volume,
            vendor_name : req.body.vendor_name

        });
        const savedet = await ware.save();
        res.status(201).json(savedet);

    } catch(err)
    {
        res.status(400).json({mesaage : "not saved"});
    }
});


export default router;