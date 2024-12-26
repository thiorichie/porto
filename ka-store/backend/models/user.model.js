const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /\d{10,15}/.test(v);
      },
      message: props => `${props.value} bukan nomor telepon yang valid!`
    }
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Menambahkan createdAt dan updatedAt secara otomatis

// Model User
module.exports = mongoose.model('User', userSchema);
