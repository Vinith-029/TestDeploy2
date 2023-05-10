import { Router } from 'express';
import Transport from '../models/Transport.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import upload from '../middleware/upload.js';
import cors from 'cors'
const router = Router();
router.use(cors());
router.post('/Vregister', async (req, res) => {
  const newTranLogin = new Transport({
    vendor_name: req.body.vendor_name,
    vendor_email: req.body.vendor_email,
    vendor_password: CryptoJS.AES.encrypt(
      req.body.vendor_password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedTranUser = await newTranLogin.save();
    res.json(savedTranUser);
  } catch (err) {
    res.json(err);
  }
});

router.post('/Vlogin', async (req, res) => {
  try {
    const TranEmail = await Transport.findOne({
      vendor_email: req.body.vendor_email,
    });

    !TranEmail && res.json('Wrong Credentials');

    const hashedPassword = CryptoJS.AES.decrypt(
      TranEmail.vendor_password,
      process.env.PASS_SEC
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.vendor_password && res.json(err);

    const accessToken = jwt.sign(
      {
        id: TranEmail._id,
      },

      process.env.JWT_SEC,

      { expiresIn: '3d' }
    );

    const { password, ...others } = user._doc;

    res.json({ ...others, accessToken });
  } catch (err) {
    res.json(err);
  }
});

router.post('/Vlist', upload.single('document'), async (req, res) => {
  try {
    const list = new Transport({
      vehicle_Number: req.body.vehicle_Number,
      company_name: req.body.company_name,
      vehicle_type: req.body.vehicle_type,
      goods_type: req.body.goods_type,
      source: req.body.source,
      destination: req.body.destination,
      status:req.body.status,
      price: req.body.price,
      vendor_details: req.body.vendor_details,
    });
    if (req.file) {
      list.document = req.file.path;
    }

    const savedList = await list.save();
    res.status(201).json(savedList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
},
);
router.get('/getApproved', async (req, res) => {
  try {
    const transports = await Transport.find({ status: 'approved' });
    res.json(transports);
  }
   catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/getPending', async (req, res) => {
  try {
    const transports = await Transport.find({ status: 'Pending' });
    res.json(transports);
  }
   catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/getReject', async (req, res) => {
  try {
    const transports = await Transport.find({ status: 'Reject' });
    res.json(transports);
  }
   catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/getTransit', async (req, res) => {
  try {
    const transports = await Transport.find({ status: 'intransit' });
    res.json(transports);
  }
   catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/update/:id', async (req, res) => {
  try {
     //const { id } = req.params;
    const  status  = req.body.status
    console.log(status);
    const transport = await Transport.findByIdAndUpdate({_id : req.params.id}, { status }, { new: true });
    res.json(transport);
    console.log(transport)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating transport status' });
  }
});




export default router;
