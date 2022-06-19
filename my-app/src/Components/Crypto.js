import React from "react";
import { useState, useEffect } from "react";
import { Coins } from "./Coins";

const Crypto = () => {
  const [coinData, setCoinData] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const fetchdata = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setCoinData(result);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchdata();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const handelsearch = (searchvalue) => {
  //   let value = searchvalue.toLowerCase();
  //   const newCoin = coinData.filter((fillcrypto) => {
  //     const newCrypto = fillcrypto.name.toLowerCase();
  //     return newCrypto.startsWith(value);
  //   });
  //   setCoinData(newCoin);
  //

  return (
    <>
      {coinData.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
};

export default Crypto;
