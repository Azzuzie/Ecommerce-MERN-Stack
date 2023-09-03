const mongoose = require('mongoose');
require('./models/category_model'); // Make sure to adjust the path
require('./models/sub_category_model');
const Category = mongoose.model('Category');
const Subcategory = mongoose.model('Subcategory');

const categoryData = [
  { category_name: 'women', subcategories: ['dresses', 'skirts', 'pants'] },
  { category_name: 'men', subcategories: ['shirts', 'pants', 'hoodies'] },
  { category_name: 'kids', subcategories: ['kids'] }
];

async function initializeData() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    for (const categoryItem of categoryData) {
      // Check if the category already exists
      const existingCategory = await Category.findOne({ category_name: categoryItem.category_name });

      if (!existingCategory) {
        // Create and save the category if it doesn't exist
        const category = new Category({ category_name: categoryItem.category_name });
        await category.save();
        
        for (const subcategoryName of categoryItem.subcategories) {
          const subcategory = new Subcategory({
            sub_category_name: subcategoryName,
            category: category._id,
          });
          await subcategory.save();
        }
      }
    }

    console.log('Initialization completed.');
  } catch (error) {
    console.error('Initialization error:', error);
  } finally {
    mongoose.disconnect();
  }
}

initializeData();
