import { toast } from "react-toastify";
import { ActionType } from "../../constants/ActionType";
import api from "../../../utils/api";

const receiveProductActionCreator = (product) => ({
  type: ActionType.RECEIVE_PRODUCT,
  payload: {
    product,
  },
});

const asyncProduct = (hsCode) => async (dispatch) => {
  try {
    const product = await api.fetchProducts(hsCode);
    dispatch(receiveProductActionCreator(product));
  } catch (err) {
    toast.error(err?.message);
  }
};

export { asyncProduct };
