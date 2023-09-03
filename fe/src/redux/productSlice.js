import { createSlice,createSelector,createAsyncThunk,} from "@reduxjs/toolkit";
import axios from "axios";


const CONFIG_OBJ={
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("token")
    }
  }

  export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", async (_, thunkAPI) => {     
       try {
          const response = await axios.get(`http://localhost:3300/getAllProducts`,CONFIG_OBJ);
          return await response.data.products;
        } catch (error) {
           return thunkAPI.rejectWithValue({ error: error.message });
        }
  });

  export const fetchCartProducts= createAsyncThunk(
    "cartProducts/fetchCartProducts", async (user, thunkAPI) => {     
       try {
          const response = await axios.get(`http://localhost:3300/${user.id}/cartitems`,CONFIG_OBJ);
          debugger
          return await response.data.cartItems;
        } catch (error) {
           return thunkAPI.rejectWithValue({ error: error.message });
        }
  });





  const productSlice = createSlice({
    name: "products",
    initialState: {
       products: [],
    },
    reducers: {},
    extraReducers: (builder) => {

       builder.addCase(fetchProducts.pending, (state) => {
         state.products = [];
       });
       builder.addCase(
        fetchProducts.fulfilled, (state, { payload }) => {
             state.products = payload;
       });
       builder.addCase(
        fetchProducts.rejected,(state, action) => {
       });
       builder.addCase(fetchCartProducts.pending, (state) => {
        state.products = [];
      });
      builder.addCase(
        fetchCartProducts.fulfilled, (state, { payload }) => {
            state.products = payload;
      });
      builder.addCase(
        fetchCartProducts.rejected,(state, action) => {
      });
    
     }
 });
 
 
 export const selectProducts = createSelector(
   (state) => ({
      products: state.products
   }), (state) =>  state
 );

export default productSlice.reducer
