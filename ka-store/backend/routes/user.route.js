const express = require('express');
const router = express();

const User = require('../models/user.model')

router.post('/createUser', async(req, res) => {
    console.log(req.body)
    const {name, phoneNumber, password} = req.body
    const checkNumber = await User.findOne({phoneNumber})
    if (checkNumber){
        return res.status(400).json({message: "This phone number is already in used! Please use another phone number"})
    }
    
    try {
        const newUser = new User({ name, phoneNumber, password });
        const savedUser = await newUser.save();
        res.status(201).json({
            message: `User ${name} berhasil dibuat!`
        });
    }
    catch(e){
        console.error('Terjadi kesalahan saat membuat pengguna:', e);
        res.status(500).json({message: 'Terjadi kesalahan pada server', e});
    }
})

module.exports = router