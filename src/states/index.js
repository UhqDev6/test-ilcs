import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./negara/reducer";
import portReducer from "./pelabuhan/reducer";
import productReducer from "./product/reducer";
import ratesReducer from "./tarif/reducer";

const store = configureStore({
  reducer: {
    country: countryReducer,
    port: portReducer,
    product: productReducer,
    rates: ratesReducer,
  },
});

export default store;
