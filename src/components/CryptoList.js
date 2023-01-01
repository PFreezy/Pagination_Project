import React from "react";
import CryptoCard from "./CryptoCard";
import "./CryptoList.css";

const CryptoList = ({ coinsData }) => {
  return (
    <div className="crypto_list">
      {coinsData.map((coin, index) => {
        return (
          <CryptoCard
            image={coin.image}
            name={coin.name}
            price={coin.current_price}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CryptoList;
