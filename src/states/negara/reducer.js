import { ActionType } from "../../constants/ActionType";

const countryReducer = (country = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_COUNTRY:
      return action.payload.country;
    default:
      return country;
  }
};
export default countryReducer;
