// const router =  require("express").Router();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { Router } from 'express';
import express from 'express';
import cors from 'cors';
import Warehouse from "../models/Warehouse.js"; 
import Ware_current from '../models/Ware_current.js';
import User from "../models/Login.js";
import CryptoJS from 'crypto-js';
const multer = require('multer')
const app = express();
app.use(cors());
const router = Router();
router.use(cors());
const DIR = './uploads/';


const storage = multer.diskStorage({

        destination: (req, file, cb) => {
    
            cb(null, DIR);
    
        },
    
        filename: (req, file, cb) => {
    
            const fileName = file.originalname.toLowerCase().split(' ').join('-');
    
            cb(null,fileName)
    
        }
    
    });
    
    
    
    
    var upload = multer({
    
        storage: storage,
    
        fileFilter: (req, file, cb) => {
    
            if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    
                cb(null, true);
    
            } else {
    
                cb(null, false);
    
                return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    
            }
    
        }
    
    });





router.post('/WareLogs', async (req, res) =>{
    try {
    const warehouse = new Warehouse({
        warehouse_name: req.body.warehouse_name,
        total_area: req.body.total_area,
        area_occupied: req.body.area_occupied,
        area_remaining: req.body.area_remaining, 
        check_in:req.body.check_in,
        check_out:req.body.check_out,
        // check_in: ISODate(),
        // check_out : ISODate(),
        product_name : req.body.product_name,
        product_type : req.body.product_type,
        quantity : req.body.quantity,
        vendor_name : req.body.vendor_name,
        product_id : req.body.product_id,
        w_email : req.body.w_email,
        w_password :CryptoJS.AES.encrypt(req.body.w_password, process.env.PASS_SEC).toString(),
    });



        const savedUpdate = await warehouse.save();
        res.status(201).json(savedUpdate);
      }catch (err) {
        res.status(400).json(err);
      }
});





router.get("/fetchDetails/:email" , async(req , res , next) => {
    Warehouse.findOne({w_email : req.params.email}).then((docs) => {
        res.json(docs)
    }).catch((err) =>{
        console.log(err)
    })
});



router.get("/fetchData/:email",async(req,res)=>{
    Warehouse.findOne({w_email : req.params.email}).then((docs)=>{
        res.json(docs)
    }).catch((err)=>{
        console.log(err)
    })
})

router.get("/fetchData2/:email",async(req,res)=>{
    Warehouse.findOne({w_email : req.params.email}).then((docs)=>{
        res.json(docs)
    }).catch((err)=>{
        console.log(err)
    })
})

router.post("/updateVal/:prod_id",async(req,res)=>{
    try{
        const ware = new Ware_current({
            product_id : req.body.product_id,
            product_name : req.body.product_name,
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

router.post("/putUpdate/:email", async(req,res)=>{
    const total_V = req.body.total_V;
    const rem_V =  req.body.rem_V;
    const t = total_V*1+100
    const r = rem_V*1
    const occu = t - r;
    const state =  req.params.email
    await Warehouse.updateOne({ w_email : state } ,
     {total_area : Number(total_V),
     area_remaining : Number(total_V - occu),
      area_occupied : Number(occu)
    }
    )
})


router.post("/saveDetails", upload.single('testImage'),(req,res)=>{

    const url = req.protocol + "://" + req.get('host')
    const saveImg =  new Warehouse({
        email : req.body.name,
        name : req.body.name,
        img : {
            data : url + '/uploads/' + req.file.filename,
            contentType : "string"
        }
    });
    saveImg.save().then((res)=>{console.log(res)})
    .catch((err)=>{ console.log(err,'error has occured')})
});

router.get("/fetchImg/:email", async (req,res,next)=>{
    console.log("helloimage")
    User.findOne({email : req.params.email}).then((docs) => {
        res.json(docs)
    }).catch((err) =>{
        console.log(err)
    })
})
    

    // router.route("/history").get((req, res) =>{
    //     Warehouse.find()
    //         .then(hist => res.json(hist))

    // })

// router.get("/getWarehist/:email", async(req, res) =>{
//     console.log("hello check in");
//     User.findOne({email : req.params.email}).then((docs)=>{
//         res.json(docs)
//     }).catch((err)=>{
//         console.log(err);
//     })
// } )

router.get('/getHistory', async (req, res) => {
    try {
      const Whist = await Warehouse.find({});
      res.json(Whist);
    }
     catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


export default router;

