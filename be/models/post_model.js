// models/Tweet.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image:String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' },
}, { timestamps: true });

module.exports = mongoose.model('Product', postSchema);
