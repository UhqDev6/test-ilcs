import { toast } from "react-toastify";
import { ActionType } from "../../constants/ActionType";
import api from "../../utils/api";

const receiveCountryActionCreator = (country) => ({
  type: ActionType.RECEIVE_COUNTRY,
  payload: {
    country,
  },
});

const asyncCountry = (ur_negara) => async (dispatch) => {
  try {
    const country = await api.fetchCountries(ur_negara);
    dispatch(receiveCountryActionCreator(country));
  } catch (err) {
    toast.error(err?.message);
  }
};

export { asyncCountry };
