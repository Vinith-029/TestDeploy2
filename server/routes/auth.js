{/*import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from './verifyToken.js'

// Import the User model
import User from '../models/Login.js';

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
      expiresIn: '3d',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const password = decryptedPassword.toString(CryptoJS.enc.Utf8);
    const validPassword = await bcrypt.compare(req.body.password, password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SEC, {
      expiresIn: '3d',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get user profile route
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;*/}

{/*import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Import the User model
import User from '../models/Login.js';

const router = express.Router();

// Define a middleware function to verify JWTs
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({message: 'No token provided'});
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({message: 'Invalid token'});
  }
};

// Define a middleware function to check user credentials
const checkCredentials = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({message: 'Invalid credentials'});
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({message: 'Invalid credentials'});
  }
  req.user = user;
  next();
};

// Define the login route
router.post('/login', checkCredentials, (req, res) => {
  const token = jwt.sign(
    { id: req.user._id, email: req.user.email },
    process.env.JWT_SEC,
    { expiresIn: '3d' }
  );
  res.json({ token });
});

// Export the router
export default router;*/}

import { Router } from 'express';
import User from '../models/Login.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
const router = Router();
router.use(cors());

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    isAdmin: req.body.isAdmin,
    isWarehouse : req.body.isWarehouse,
    isTransport : req.body.isTransport
  });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  }
   catch (err) {
    res.json(err);
  }
});

router.post("/login", async (req,res)=>{
  try{
    const user = await User.findOne({email: req.body.email});
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (req.body.password !== originalPassword) {
      return res.status(402).json({ message: 'Wrong Password' });
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    )
    const {password, ...others} = user._doc;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json({accessToken , user});
  }
  catch(err){
    res.json(err);
  }
});

export default router;
