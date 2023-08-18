import { toast } from "react-toastify";
import { ActionType } from "../../constants/ActionType";
import api from "../../utils/api";

const receiveRatesActionCreator = (rates) => ({
  type: ActionType.RECEIVE_RATES,
  payload: {
    rates,
  },
});

const asyncRates = (hs_code) => async (dispatch) => {
  try {
    const rates = await api.fetchRates(hs_code);
    dispatch(receiveRatesActionCreator(rates));
  } catch (err) {
    toast.error(err?.message);
  }
};

export { asyncRates };
