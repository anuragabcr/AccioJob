"use client";
import Row from "@/Components/Row";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );

      const json = await response.json();

      setData(json);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="w-4/5 mx-auto mt-5">
      <h1 className="flex justify-center m-5 text-sky-500 text-lg font-bold">
        Coin Gecko API Data
      </h1>
      <div className="flex border-solid rounded-md border-2 border-sky-300 p-2 m-1">
        <div className="flex w-2/5 pl-5">
          <div>Name</div>
        </div>
        <div className="w-1/5">Symbol</div>
        <div className="w-1/5">Current Price</div>
        <div className="w-1/5">Market Cap Rank</div>
      </div>
      {data.map((item, index) => (
        <Row item={item} key={index} />
      ))}
    </div>
  );
}
