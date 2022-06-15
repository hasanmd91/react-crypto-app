import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Crypto = () => {
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        const coinsdata = res.data;
        setCoinData(coinsdata);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const individualCoin =
    coinData &&
    coinData.map((percoin) => {
      const { name, id, image, market_cap } = percoin;
      return (
        <article key={id}>
          {" "}
          {name} {image} {market_cap}{" "}
        </article>
      );
    });

  return (
    <div>
      <h1> Coins data </h1>
      {error && <p>{error} </p>}
      {isLoading && <p> data is loading</p>}
      {individualCoin}
    </div>
  );
};

export default Crypto;
