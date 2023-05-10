import { Router } from 'express';
import express from 'express';
import Product from '../models/Package.js';
import upload from '../middleware/upload.js';
import cors from 'cors';

const router = Router();
const app = express();
app.use(cors());
router.use(cors());
const updatePackageTransportId = async (packageId, newTransportId) => {
  try {
    const updatedPackage = await Product.findByIdAndUpdate(
      packageId,
      { transport_id: newTransportId },
      { new: true }
    );
    return updatedPackage;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating package transport ID');
  }
};


router.post('/productdetails',upload.single('document'),async (req, res) => {
try {
    const product= new Product({
    source: req.body.source,
    destination: req.body.destination,
    volume:req.body.volume,
    quantity:req.body.quantity,
    producttype:req.body.producttype,
    });
    const savedProduct = await product.save();
    res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(201).json(savedProduct);
      } catch (err) {
      res.status(400).json({ message: "not saved" });
      }
      });

      router.put('/:id/transport', async (req, res) => {
        const packageId = req.params.id;
        const newTransportId = req.body.transport_id;
        try {
          const updatedPackage = await updatePackageTransportId(packageId, newTransportId);
          res.json(updatedPackage);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Error updating package transport ID' });
        }
      });

  export default router;
