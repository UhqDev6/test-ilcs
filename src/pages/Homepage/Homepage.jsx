import { useState, useEffect } from "react";
import { Header } from "../../components/moleculas";
import { SpinnerLoading, Wrapper } from "../../components/atoms";
import { useDispatch, useSelector } from "react-redux";
import { asyncCountry } from "../../states/negara/action";
import { asyncPort } from "../../states/pelabuhan/action";
import { asyncProduct } from "../../states/product/action";
import { asyncRates } from "../../states/tarif/action";

const App = () => {
  //STATE
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedPort, setSelectedPort] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(null);
  const [total, setTotal] = useState(0);
  const [barang, setBarang] = useState(null);
  const [loading, setLoading] = useState(true);

  //STATE
  const {
    country = [],
    port = [],
    product = [],
    rates = [],
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  //EFFECT
  useEffect(() => {
    // dispatch(asyncCountry(selectedCountry));
    // dispatch(asyncPort(selectedPort));
    dispatch(asyncCountry("SIN"));
    dispatch(asyncPort("SG", "jur"));
    dispatch(asyncProduct(barang));
    dispatch(asyncRates(barang));
  }, [barang, dispatch, selectedCountry, selectedPort]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const totalPrice = parseFloat(price) || 0;
    const discountPercentage = parseFloat(discount) || 0;
    const discountAmount = (discountPercentage / 100) * totalPrice;
    const totalAfterDiscount = totalPrice - discountAmount;
    setTotal(totalAfterDiscount);
  }, [price, discount]);

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
              }}
            >
              <option value="">Pilih Negara</option>
              {country?.data?.map((countries) => (
                <option key={countries?.kd_negara} value={countries?.kd_negara}>
                  {countries?.ur_negara}
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
              }}
            >
              <option value="">Pilih Pelabuhan</option>
              {port?.data?.map((portItem) => (
                <option
                  key={portItem?.kd_pelabuhan}
                  value={portItem?.kd_pelabuhan}
                >
                  {portItem?.ur_pelabuhan}
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
            <textarea
              className="resize-none border rounded-md p-2 w-full h-40 focus:outline-none focus:ring focus:border-blue-300"
              value={product?.data
                ?.map(
                  (productItem) =>
                    productItem?.sub_header + "-" + productItem?.uraian_id
                )
                .join("\n")}
              readOnly
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
            <label htmlFor="discount" className="block font-bold mb-1">
              Tarif Bea Masuk (%)
            </label>
            <input
              type="number"
              id="discount"
              className="w-full border rounded px-3 py-2"
              value={rates?.data?.map((rate) => rate.bm)}
              onChange={(e) => setDiscount(e.target.value)}
              readOnly
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
