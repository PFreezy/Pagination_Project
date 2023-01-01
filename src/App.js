import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import CryptoList from "./components/CryptoList";
import Pagination from "./components/Pagination";

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  useEffect(
    () => async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      setCoinsData(response.data);
    },
    []
  );

  // indexes for slice

  const index1 = currentPage * postsPerPage;
  const index2 = index1 - postsPerPage;
  const currentPosts = coinsData.slice(index2, index1);

  return (
    <div className="app">
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={currentPosts} />
      <Pagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
