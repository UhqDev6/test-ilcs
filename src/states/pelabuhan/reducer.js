import { ActionType } from "../../constants/ActionType";

const portReducer = (port = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_PORT:
      return action.payload.port;
    default:
      return port;
  }
};
export default portReducer;
