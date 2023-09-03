const express=require('express')
const router=express.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const User=mongoose.model("User")
// const Tweet=mongoose.model("Tweet")
const {JWT_SECRET}=require('../config')
const protected=require('../middleware/protected')

router.get('/user/:id', protected, async (req, res) => {
      try {
        const { id } = req.params;
        // console.log(id)
        // Find the user by ID
        const user = await User.findById(id)
          .select('-password') // Exclude the password field
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        return res.status(200).json({ user: user });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    });


    router.post('/addToCart/:productId', protected, async (req, res) => {
      // console.log("Cart api");
      try {
        // Get the productId from the request parameters
        const { productId } = req.params;
        // Find the authenticated user (assuming it's stored in req.user by your protected middleware)
        const userId = req.user._id;
    
        // Find the user by ID
        const user = await User.findById(userId);
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Check if the product is already in the user's cart
        const existingCartItemIndex = user.cart.findIndex((cartItem) => cartItem.productId.equals(productId));
    
        if (existingCartItemIndex !== -1) {
          // If the product is in the cart, remove it
          user.cart.splice(existingCartItemIndex, 1);
        } else {
          // If the product is not in the cart, add it
          user.cart.push({ productId });
        }
    
        // Save the updated user document with the modified cart
        await user.save();
    
        return res.status(200).json({ message: 'Product operation completed successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    });
    
    // to increment quantity of products in cart
    router.get('/:userid/cartitems', protected, async (req, res) => {
      // console.log('cart-items')
      try {
        // Get the user ID from the request parameters
        const { userid } = req.params;
    
        // Find the user by ID
        const user = await User.findById(userid).populate('cart.productId'); // Populate the 'cart.productId' field
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Retrieve the user's cart items with product details
        const cartItems = user.cart;
    
        // Create an array to store the product details
        const productDetails = [];
    
        // Iterate through each cart item and extract product details
        for (const cartItem of cartItems) {
          const product = cartItem.productId; // Access the populated product details
          const quantity = cartItem.quantity;
    
          // Include additional product details as needed
          const productInfo = {
            _id: product._id,
            name: product.name,
            price: product.price,
            image:product.image,
            // Add more fields here as needed
            quantity: quantity,
          };
    
          productDetails.push(productInfo);
        }
    
        return res.status(200).json({ cartItems: productDetails });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    });

    router.post('/:productId/incrementQuantity', protected, async (req, res) => {
      try {
        const { productId } = req.params;
        const userId = req.user._id;
    
        const user = await User.findById(userId);
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Find the cart item corresponding to the productId
        const cartItem = user.cart.find((item) => item.productId.equals(productId));
    
        if (!cartItem) {
          return res.status(404).json({ error: 'Product not found in cart' });
        }
    
        // Increment the quantity
        cartItem.quantity += 1;
    
        // Save the updated user document
        await user.save();
    
        return res.status(200).json({ message: 'Quantity incremented successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    });

    
     // to decrement quantity of products in cart
    router.post('/:productId/decrementQuantity', protected, async (req, res) => {
      try {
        const { productId } = req.params;
        const userId = req.user._id;
    
        const user = await User.findById(userId);
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Find the cart item corresponding to the productId
        const cartItem = user.cart.find((item) => item.productId.equals(productId));
    
        if (!cartItem) {
          return res.status(404).json({ error: 'Product not found in cart' });
        }
    
        // Decrement the quantity, ensuring it doesn't go below 1
        cartItem.quantity -= 1;
    
        // Save the updated user document
        await user.save();
    
        return res.status(200).json({ message: 'Quantity decremented successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    });
    
    


    module.exports = router;