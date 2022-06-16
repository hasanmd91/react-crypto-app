import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Coins from "./Coins";
import Search from "./Search";

const Crypto = () => {
  const [coinData, setCoinData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const dataCoin = res.data;
        setCoinData(dataCoin);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handelsearch = (searchvalue) => {
    let value = searchvalue.toLowerCase();
    const newCoin = coinData.filter((fillcrypto) => {
      const newCrypto = fillcrypto.name.toLowerCase();
      return newCrypto.startsWith(value);
    });
    setCoinData(newCoin);
  };

  return (
    <>
      {error && <p>{error} </p>}
      {isLoading && <p> data is loading</p>}
      <h1>
        {" "}
        <Search onSearch={handelsearch} />{" "}
      </h1>
      {coinData && <Coins coinData={coinData} key={coinData.id} />}
    </>
  );
};

export default Crypto;
