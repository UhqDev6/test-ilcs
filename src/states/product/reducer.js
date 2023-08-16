import { ActionType } from "../../constants/ActionType";

const productReducer = (product = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_PRODUCT:
      return action.payload.product;
    default:
      return product;
  }
};
export default productReducer;
