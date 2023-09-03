import React, { useState } from 'react';
import './Add.css'; // Import the CSS file
import axios from "axios";
import {  toast } from 'react-toastify';

const Add = () => {
    // Define the available category and subcategory options
    const categories = ['men', 'women', 'kids'];
    const subcategories = {
        women: ['dresses', 'skirts', 'pants'],
        men: ['shirts', 'pants', 'hoodies'],
        kids: ['kids'],
    };

    const CONFIG_OBJ={
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("token")
        }
      }

    // State to store selected values
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImageLink, setProductImageLink] = useState('');

    // Function to handle adding a product
    const handleAddProduct = async () => {
        
      const body={ name:productName, description:productDescription, price:productPrice,image:productImageLink, categoryName:selectedCategory, subcategoryName:selectedSubcategory }
      debugger
        const response = await axios.post(`http://localhost:3300/addProduct`,body,CONFIG_OBJ)
        
        if(response){
            toast.success("Added successfully")
        }
        // Reset the form fields after adding the product 
        setSelectedCategory('');
        setSelectedSubcategory('');
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductImageLink('');
    };

    return (
        <div className="add-product-container">
            <h1 className="add-product-title">Add Product</h1>
            <div className="form-group">
                <label className="form-label">Category:</label>
                <select
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            {selectedCategory && (
                <div className="form-group">
                    <label className="form-label">Subcategory:</label>
                    <select
                        className="form-select"
                        value={selectedSubcategory}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                    >
                        <option value="">Select Subcategory</option>
                        {subcategories[selectedCategory].map((subcategory) => (
                            <option key={subcategory} value={subcategory}>
                                {subcategory}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <div className="form-group">
                <label className="form-label">Product Name:</label>
                <input
                    className="form-input"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Product Description:</label>
                <input
                    className="form-input"
                    type="text"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Product Price:</label>
                <input
                    className="form-input"
                    type="text"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className="form-label">Product Image Link:</label>
                <input
                    className="form-input"
                    type="text"
                    value={productImageLink}
                    onChange={(e) => setProductImageLink(e.target.value)}
                />
            </div>
            <button className="add-product-button" onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default Add;
