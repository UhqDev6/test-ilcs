import { toast } from "react-toastify";
import { ActionType } from "../../constants/ActionType";
import api from "../../../utils/api";

const receivePortActionCreator = (port) => ({
  type: ActionType.RECEIVE_PORT,
  payload: {
    port,
  },
});

const asyncPort = (countryId, urPelabuhan) => async (dispatch) => {
  try {
    const port = await api.fetchPorts(countryId, urPelabuhan);
    dispatch(receivePortActionCreator(port));
  } catch (err) {
    toast.error(err?.message);
  }
};

export { asyncPort };
