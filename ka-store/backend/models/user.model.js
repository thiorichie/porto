const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  frontName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: String,
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
  },
  picture: {
    type: String,
  },
  saldo: {
    type: Number,
    default: 0
  }
}, { timestamps: true }); // Menambahkan createdAt dan updatedAt secara otomatis

// Model User
module.exports = mongoose.model('User', userSchema);
