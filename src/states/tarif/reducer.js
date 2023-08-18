import { ActionType } from "../../constants/ActionType";

const ratesReducer = (rates = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_RATES:
      return action.payload.rates;
    default:
      return rates;
  }
};
export default ratesReducer;
