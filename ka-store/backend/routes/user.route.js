const express = require('express');
const router = express();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const dotenv = require('dotenv');
dotenv.config();

router.post('/createUser', async (req, res) => {
    const { name, phoneNumber, password } = req.body;
  
    try {
      const checkNumber = await User.findOne({ phoneNumber });
      if (checkNumber) {
        return res.status(400).json({
          message: "This phone number is already in use! Please use another phone number."
        });
      }
      
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        fullName: name,
        frontName: name.split(' ')[0],
        phoneNumber,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();

      const getData = {
        given_name: savedUser.frontName,
        phoneNumber: phoneNumber,
      };
  
      const token = jwt.sign(
        { getData },
        process.env.JWT_SECRET,
        { expiresIn: '3h' }
      );
      
      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 10800000, // 3 jam
      });
      console.log("Register successfull!")
      return res.status(201).json({
        message: `User ${name} has been successfully created!`
      });
    } catch (e) {
      console.error('Error creating user:', e);
      return res.status(500).json({
        message: 'An error occurred on the server',
        error: e.message,
      });
    }
  });
  

router.get('/getUser', async(req, res) => {
    const token = req.cookies.auth_token;
    if(!token){
        return res.status(400).json({message: 'No token found in cookies'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded)
        return res.status(200).json(decoded);
    }
    catch (e) {
        return res.status(401).json({message: 'Invalid Token'});
    }
})

router.post('/logout', (req, res) => {
    res.clearCookie('auth_token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });
    return res.status(200).json({ message: 'Logout successful, cookie destroyed' });
});

router.post('/login', async (req, res) => {
    const {phoneNumber, password} = req.body
    try {
        const data = await User.findOne({ phoneNumber });
        if (!data) {
          return res.status(400).json({
            message: "User not found! If you don't have any account, please register a new account!"
          });
        }

        const isPasswordValid = await bcrypt.compare(password, data.password);
        if (!isPasswordValid) {
          return res.status(400).json({ message: "Password is invalid!" });
        }

        const getData = {
          given_name: data.frontName,
          phoneNumber: phoneNumber,
        };
    
        const token = jwt.sign(
          { getData },
          process.env.JWT_SECRET,
          { expiresIn: '3h' }
        );
        
        res.cookie('auth_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 10800000 // 3 jam
        });
    
        console.log('Login successful');
        return res.status(201).json({
          message: `Welcome, ${data.frontName}!`
        });
      } catch (e) {
        console.error('Error during login:', e);
        return res.status(500).json({ message: "An internal server error occurred." });
      }
})

module.exports = router