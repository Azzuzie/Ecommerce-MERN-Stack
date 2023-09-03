const mongoose = require('mongoose');


const subcategorySchema = new mongoose.Schema({
  sub_category_name: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = mongoose.model('Subcategory', subcategorySchema);