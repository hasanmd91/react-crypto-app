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
      <div className={style.border}>
        <div className={style.row1}>
          <img src={image} alt="crypto" />
          <h2> {name}</h2>
          <p>${price}</p>
        </div>
        <div className={style.row}>
          <p>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p>{priceChange.toFixed(2)}%</p>
          ) : (
            <p>{priceChange.toFixed(2)}%</p>
          )}
          <p>Mkt Cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
