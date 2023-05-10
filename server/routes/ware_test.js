import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { Router } from 'express';
import express from 'express';
import cors from 'cors';
// import ware_test from '../models/Warehouse_test.js';
import Warehouse_test from '../models/Warehouse_test.js';

const app = express();
app.use(cors());

const router = Router();
router.use(cors());


router.post("/put_ware_test",async(req,res)=>{
    try{
        const ware_test = new Warehouse_test({
            product_name : req.body.product_name,
            product_id : req.body.product_id,
            product_type : req.body.product_type,
            vendor_name : req.body.vendor_name,
            quantity : req.body.quantity,
            volume : req.body.volume,
            check_in : req.body.check_in,
            check_out : req.body.check_out,
        });
        const savedata = await ware_test.save();
        res.status(201).json(savedata);

    } catch(err)
    {
        res.status(400).json({mesaage : "not saved"});
    }
});


// router.put("/CheckOutUpdate", async(req, res)=>{
//     const { product_id } = req.body;

//     try{
//         const prdt = await ware_test.findOne({ product_id });
//         await ware_test.updateOne({product_id:product_id},{$set{check_out : check_out}})
//     }
// })

// router.put('update_check_out', (req, res)=>{
//     const product_id = req.body.product_id;
//     const check_out = req.body.check_out;
  
//     ware_test.updateOne({product_id : product_id}, {$set:{check_out : check_out}},(err, doc)=>{
//       if(err) return console.log(err);
//       res.json(doc)
//     });
//   })

// router.put("/update_check_out",async (req, res) => {
//     //     if (req.body.password) {
//     //       req.body.password = CryptoJS.AES.encrypt(
//     //         req.body.password,
//     //         process.env.PASS_SEC
//     //       ).toString();
//     //     }

//     const product_id = req.body.product_id;
//     const check_out = req.body.check_out;
//      
//         try {
//           const updatedcheckout = await ware_test.update({product_id:product_id},{$set:{check_out : check_out}},{new:true}
//           );
//           res.json(updatedcheckout);
//         } catch (err) {
//           res.json(err);
//         }
    
//       });

// router.get('/findbyid',async(req,res)=>{
//     const product_id = req.body.product_id

//     const find = await ware_test.find({product_id});
//     res.json(find)
// })

router.post("/putUpdate", async(req,res)=>{
        const product_id = req.body.product_id;
        const check_out = req.body.check_out
        await Warehouse_test.updateOne({ product_id : product_id} ,{$set :{check_out : check_out}})})
    // const Volume = req.body.volume
    // const t = total_V*1
    // var r = rem_V*1
    // const v = Volume*1
    // r = r-v;
    // const occu = t - r;
    // const state =  req.params.email
// })


// router.post("/putUpdate/:email", async(req,res)=>{
//     const total_V = req.body.total_V;
//     const rem_V =  req.body.rem_V;
//     const Volume = req.body.volume
//     const t = total_V*1
//     var r = rem_V*1
//     const v = Volume*1
//     r = r-v;
//     const occu = t - r;
//     const state =  req.params.email
//     await Warehouse.updateOne({ w_email : state } ,
//      {total_area : Number(total_V),
//      area_remaining : Number(r),
//       area_occupied : Number(occu)
//     }
//     )
// })
  

export default router