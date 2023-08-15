import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Header } from "../../components/moleculas";
import { SpinnerLoading, Wrapper } from "../../components/atoms";

const App = () => {
  //STATE
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [ports, setPorts] = useState([]);
  const [selectedPort, setSelectedPort] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);
  const [barang, setBarang] = useState("");
  const [loading, setLoading] = useState(true);

  //FUNCTIONAL
  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        `https://insw-dev.ilcs.co.id/n/negara?ur_negara=SIN`
      );
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchPorts = async (countryId, urPelabuhan) => {
    try {
      const response = await axios.get(
        `https://insw-dev.ilcs.co.id/my/n/pelabuhan?kd_negara=${countryId}&ur_pelabuhan=${urPelabuhan}`
      );
      setPorts(response.data);
    } catch (error) {
      console.error("Error fetching ports:", error);
    }
  };

  const fetchProducts = async (hsCode) => {
    try {
      const response = await axios.get(
        `https://insw-dev.ilcs.co.id/my/n/barang?hs_code=${hsCode}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //EFFECT
  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Membersihkan timer saat komponen tidak digunakan lagi
  }, []);

  //COMPONENT
  return (
    <>
      <Header />
      {loading ? <SpinnerLoading /> : null}
      <Wrapper>
        <div className="w-full pl-32 pr-32 pb-20">
          <div className="pt-20">
            <label htmlFor="country" className="block font-bold mb-1">
              Negara
            </label>
            <select
              id="country"
              className="w-full border rounded px-3 py-2"
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                fetchPorts(e.target.value);
              }}
            >
              <option value="">Pilih Negara</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.negara}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="port" className="block font-bold mb-1">
              Pelabuhan
            </label>
            <select
              id="port"
              className="w-full border rounded px-3 py-2"
              value={selectedPort}
              onChange={(e) => {
                setSelectedPort(e.target.value);
                fetchProducts(e.target.value);
              }}
            >
              <option value="">Pilih Pelabuhan</option>
              {ports.map((port) => (
                <option key={port.id} value={port.id}>
                  {port.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="product" className="block font-bold mb-1">
              Barang
            </label>
            <input
              type="text"
              id="discount"
              className="w-full border rounded px-3 py-2"
              value={barang}
              onChange={(e) => setBarang(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <textarea class="resize-none border rounded-md p-2 w-full h-40 focus:outline-none focus:ring focus:border-blue-300"></textarea>
          </div>
          <div className="mt-4">
            <label htmlFor="discount" className="block font-bold mb-1">
              Tarif Bea Masuk (%)
            </label>
            <input
              type="number"
              id="discount"
              className="w-full border rounded px-3 py-2"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="price" className="block font-bold mb-1">
              Harga
            </label>
            <input
              type="text"
              id="price"
              className="w-full border rounded px-3 py-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block font-bold mb-1">Total</label>
            <p className="border rounded px-3 py-2 bg-gray-100">{`Rp. ${total.toFixed(
              2
            )}`}</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default App;
