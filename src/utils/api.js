import axios from "axios";

const api = (() => {
  const BASE_URL = "https://insw-dev.ilcs.co.id";

  const fetchCountries = async (ur_negara) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/my/n/negara?ur_negara=${ur_negara}`
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchPorts = async (countryId, urPelabuhan) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/my/n/pelabuhan?kd_negara=${countryId}&ur_pelabuhan=${urPelabuhan}`
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching ports:", error);
    }
  };

  const fetchProducts = async (hsCode) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/my/n/barang?hs_code=${hsCode}`
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchRates = async (hs_code) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/my/n/tarif?hs_code=${hs_code}`
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return {
    fetchCountries,
    fetchPorts,
    fetchProducts,
    fetchRates,
  };
})();

export default api;
