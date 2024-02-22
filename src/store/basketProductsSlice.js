import { createSlice } from "@reduxjs/toolkit";

const initialProducts = [];

const productsbasketSlice = createSlice({
  name: "productsbasket",
  initialState: {
    products: initialProducts,
    count: initialProducts.reduce((accum, el) => accum + el.count, 0),
    send: false
  },
  reducers: {
    addProduct(state, action) {
      const existingProductIndex = state.products.findIndex(
        (item) => item.id === action.payload.product.id
      );
      if (existingProductIndex !== -1) {
        // Создаем новый массив объектов с обновленным счетчиком
        state.products = state.products.map((product, index) =>
          index === existingProductIndex
            ? { ...product, count: product.count + action.payload.countProduct }
            : product
        );
      } else {
        // Добавляем новый объект
        state.products.push({
          id: action.payload.product.id,
          dataProduct: action.payload.product,
          count: action.payload.countProduct,
        });
      }
      // Обновляем счетчик
      state.count = state.count + action.payload.countProduct;
    },

    deleteProduct(state, action) {
      const deletedProductIndex = state.products.findIndex(
        (item) => item.id === action.payload.product.id
      );
      if (action.payload.newCount === 0) {
        state.products = state.products.filter(
          (el) => el.id !== action.payload.product.id
        );
      } else {
        state.products = state.products.map((product, index) =>
          index === deletedProductIndex
            ? { ...product, count: product.count - action.payload.countProduct }
            : product
        );
      }
      state.count = state.count - action.payload.countProduct;     
    },
    deleteItem(state, action) {
      state.products = state.products.filter(
        (el) => el.id !== action.payload.id
      );
      state.count = state.count - action.payload.count;
    },
    sendOrder(state, action) {
      state.products = [];
      state.count = 0;
      state.send = action.payload === 0 ? 1 : 0
    }
  },
});

export default productsbasketSlice.reducer;
export const {
  addProduct,
  sendOrder,
  deleteLastUser,
  deleteProduct,
  deleteItem,
  modalW
} = productsbasketSlice.actions;
