import React from "react";
import style from "./Crypto.module.css";
import { useState, useEffect } from "react";
import { Coins } from "./Coins";
import Search from "./Search";

const Crypto = () => {
  const [coinData, setCoinData] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const fetchdata = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setCoinData(result);
  };
  const handelSearch = (searchvalue) => {
    let value = searchvalue.toLowerCase();
    const newCoin = coinData.filter((fillcrypto) => {
      const newCrypto = fillcrypto.name.toLowerCase();
      return newCrypto.startsWith(value);
    });
    if (searchvalue != null) {
      setCoinData(newCoin);
    } else return coinData;
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className={style.app}>
      <h1> Crypto currency price tracking app</h1>
      <Search onSearch={handelSearch} />
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
    </div>
  );
};

export default Crypto;
