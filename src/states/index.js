import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./negara/reducer";
import portReducer from "./pelabuhan/reducer";
import productReducer from "./product/reducer";

const store = configureStore({
  reducer: {
    country: countryReducer,
    port: portReducer,
    product: productReducer,
  },
});

export default store;
