import { Router } from 'express';

import User from '../models/Login.js';

import {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} from './verifyToken.js';


const router = Router();




//update

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
    }
 
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.json(updatedUser);
    } catch (err) {
      res.json(err);
    }

  });




//delete
router.delete("/:id",verifyTokenAndAuthorization,async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json("User has been Deleted....");
    }catch(err){
        res.json(err);
    }
});




//get user
router.get("/find/:id",verifyTokenAndAdmin,async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.json(others);
    }catch(err){
        res.json(err);
    }
});



//get all users
router.get("/",verifyTokenAndAdmin,async (req,res)=>{
    const query = req.query.new;
    try{
        const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
        res.json(users);
    }catch(err){
        res.json(err);
    }
});



//get user stats
router.get("/stats",verifyTokenAndAdmin,async (req,res)=>{

    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear-1));
    try{
        const data = await User.aggregate([
            {$match:{createdAt: {$gte: lastYear}}},
            {
                $project:{

                    month: {$month: "$createdAt"},

                },

            },

            {

                $group:{

                    _id: "$month",

                    total:{$sum:1},

                },

            }

        ]);

        res.json(data);




    }catch(err)

    {

        res.json(err);

    }

})




export default router