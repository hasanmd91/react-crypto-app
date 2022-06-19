import React from "react";
import style from "./coins.module.css";

export const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <img src={image} alt="crypto" />
        <h1> {name}</h1>
        <p> {symbol}</p>
        <p>${price}</p>
        <p>${volume.toLocaleString()}</p>
        {priceChange < 0 ? (
          <p>{priceChange.toFixed(2)}%</p>
        ) : (
          <p>{priceChange.toFixed(2)}%</p>
        )}
        <p>Mkt Cap: ${marketcap.toLocaleString()}</p>
      </div>
    </div>
  );
};
