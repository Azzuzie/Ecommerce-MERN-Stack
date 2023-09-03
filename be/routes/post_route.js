const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const Category = mongoose.model('Category');
const Subcategory = mongoose.model('Subcategory');
const { JWT_SECRET } = require('../config');
const protected = require('../middleware/protected');

router.post('/addProduct', protected, async (req, res) => {
    const { name, description, price,image, categoryName, subcategoryName } = req.body;
  console.log(req.body)
    try {
      // Check if category exists
      const category = await Category.findOne({ category_name: categoryName });
      if (!category) {
        return res.status(400).json({ message: 'Category does not exist' });
      }
  
      // Check if subcategory exists
      const subcategory = await Subcategory.findOne({ sub_category_name: subcategoryName });
      if (!subcategory) {
        return res.status(400).json({ message: 'Subcategory does not exist' });
      }
  
      // Create product
      const product = new Product({
        name,
        description,
        price,
        image,
        category: category._id,
        subcategory: subcategory._id,
      });
  
      await product.save();
      console.log("product added successfully")
      return res.status(200).json({ message: 'Product created successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred' });
    }
  });



  // Route to get all product details
  router.get('/getAllProducts', async (req, res) => {
    try {
      const products = await Product.find()
        .populate('category', 'category_name') // Populate the category field with its name
        .populate('subcategory', 'sub_category_name'); // Populate the subcategory field with its name
      
      return res.status(200).json({"products":products});
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred' });
    }
  });
  

module.exports = router;
