import { createSlice,createSelector,createAsyncThunk,} from "@reduxjs/toolkit";
import axios from "axios";


const CONFIG_OBJ={
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("token")
    }
  }

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

  const cartSlice = createSlice({
    name: "cartproducts",
    initialState: {
        cartproducts: [],
    },
    reducers: {},
    extraReducers: (builder) => {

       builder.addCase(fetchCartProducts.pending, (state) => {
        state.cartproducts = [];
      });
      builder.addCase(
        fetchCartProducts.fulfilled, (state, { payload }) => {
            state.cartproducts = payload;
      });
      builder.addCase(
        fetchCartProducts.rejected,(state, action) => {
      });
    
     }
 });

 export const selectCartProducts = createSelector(
    (state) => ({
        cartproducts: state.cartproducts
    }), (state) =>  state
  );
 
 export default cartSlice.reducer
 