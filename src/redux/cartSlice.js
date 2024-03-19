import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getCart from '../services/getCart';
import axios from 'axios';

export const getUserCart = createAsyncThunk(
  'cart/getUserCart',
  async (params, thunkAPI) => {
    const userCart = await getCart();
    console.log(userCart);
    return userCart.data.cart;
  }
);

const initialState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: (state, action) => {
      state.products = [];
      state.totalPrice = 0;
    },
    addToCart: (state, action) => {
      const addProductExists = state.products.find(
        (product) => product.productId === action.payload.productId
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
        });
      }
      state.totalPrice +=
        action.payload.price * parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.productId === action.payload
      );

      const index = state.products.findIndex(
        (product) => product.productId === action.payload
      );
      state.totalPrice -=
        state.products[index].price * parseInt(state.products[index].quantity);

      state.products.splice(index, 1);
    },
    incrementInCart: (state, action) => {
      const productToIncrease = state.products.find(
        (product) => product.productId === action.payload
      );

      productToIncrease.quantity++;

      const index = state.products.findIndex(
        (product) => product.productId === action.payload
      );
      state.totalPrice += state.products[index].price;
    },
    decrementInCart: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.productId === action.payload
      );
      state.productsNumber = state.productsNumber - 1;
      if (productToRemove.quantity === 1) {
        const index = state.products.findIndex(
          (product) => product.productId === action.payload
        );
        state.totalPrice -=
          state.products[index].price *
          parseInt(state.products[index].quantity);

        state.products.splice(index, 1);
      } else {
        productToRemove.quantity--;

        const index = state.products.findIndex(
          (product) => product.productId === action.payload
        );
        state.totalPrice -= state.products[index].price;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      console.log(action);
      state.products = action.payload.products;
      state.totalPrice = action.payload.totalPrice;
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementInCart,
  decrementInCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
