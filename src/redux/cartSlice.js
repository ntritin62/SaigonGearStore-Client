import { createSlice } from '@reduxjs/toolkit';
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
      // find the product removing the array
      const productToRemove = state.products.find(
        (product) => product._id === action.payload
      );

      // find index of the product removing
      const index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      state.totalPrice -=
        state.products[index].price * parseInt(state.products[index].quantity);
      // remove from the array
      state.products.splice(index, 1);
    },
    incrementInCart: (state, action) => {
      const productToIncrease = state.products.find(
        (product) => product.productId === action.payload
      );
      console.log(productToIncrease);
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
});

export const {
  addToCart,
  removeFromCart,
  incrementInCart,
  decrementInCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
