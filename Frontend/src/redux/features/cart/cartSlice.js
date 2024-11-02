import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart:(state,action)=>{
        const existingItem = state.cartItems.find(item=>item._id === action.payload._id)
        if (!existingItem) {
            state.cartItems.push(action.payload)
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item added successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            
        } else {
          
          Swal.fire({
            title: "Are you sure?",
            text: "Item already exists.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete it!",
          });
        }
    },
    removeToCart:(state,action)=>{
      state.cartItems = state.cartItems.filter(items=>items._id !== action.payload._id)
    },
    clearItems:(state)=>{
      state.cartItems = []
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, clearItems, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
