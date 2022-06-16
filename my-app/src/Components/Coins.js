import React from "react";
import "./coins.css";

const Coins = (props) => {
  return (
    <>
      {props.coinData.map((coin) => {
        const {
          id,
          image,
          name,
          symbol,
          current_price,
          market_cap,
          price_change_percentage_24h,
        } = coin;
        const priceChangeObject = { price_change_percentage_24h };
        const pricechange = priceChangeObject.price_change_percentage_24h;
        return (
          <div className="coin-row" key={id}>
            <div className="coins">
              <img src={image} alt="crypto" />
              <h1>{name}</h1>
              <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data"></div>
            <p className="coin-price"> ${current_price}</p>
            <p>
              {pricechange < 0 ? (
                <span className="coin-percent red">
                  {pricechange.toFixed(2)}%
                </span>
              ) : (
                <span>{pricechange.toFixed(2)}%</span>
              )}
              <p className="coin-voulme ">
                Mkt cap: ${market_cap.toLocaleString()}
              </p>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Coins;
