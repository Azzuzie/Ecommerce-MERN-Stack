const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Assuming you have a Product model
  },
  quantity: {
    type: Number,
    default: 1, // You can change the default quantity if needed
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [cartSchema], 
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
