import Image from "next/image";
import React from "react";

const Row = ({ item }: { item: any }) => {
  return (
    <div className="flex border-solid rounded-md border-2 border-green-300 p-2 m-1">
      <div className="flex w-2/5 pl-5">
        <Image src={item.image} alt="image" height={25} width={25} />
        <div className="pl-3">{item.name}</div>
      </div>
      <div className="w-1/5">{item.symbol}</div>
      <div className="w-1/5">{item.current_price}</div>
      <div className="w-1/5">{item.market_cap_rank}</div>
    </div>
  );
};

export default Row;
