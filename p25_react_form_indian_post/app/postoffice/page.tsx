"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const Postoffice = () => {
  const searchParams = useSearchParams();
  const pincode = searchParams.get("pincode");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      console.log(response);
    };
    fetchData();
  }, [pincode]);

  return (
    <div className="flex flex-col w-3/4 mx-auto mt-10">
      <h1 className="text-3xl font-bold p-3">Pincode: {pincode}</h1>
      <h1 className="text-xl font-bold p-3">Message: {pincode}</h1>
      <div className="relative flex items-center">
        <input
          type="text"
          maxLength={6}
          placeholder="Filter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          className="p-2 pl-10  w-3/4 text-md border-solid border-2 border-black rounded-md m-3"
        />
        <svg
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-5"
        >
          <path
            d="M29.592 25.9395L23.7498 20.0977C23.4861 19.834 23.1286 19.6875 22.7536 19.6875H21.7985C23.4158 17.6191 24.3768 15.0176 24.3768 12.1875C24.3768 5.45508 18.9213 0 12.1884 0C5.45548 0 0 5.45508 0 12.1875C0 18.9199 5.45548 24.375 12.1884 24.375C15.0187 24.375 17.6204 23.4141 19.6889 21.7969V22.752C19.6889 23.127 19.8354 23.4844 20.0991 23.748L25.9414 29.5898C26.4922 30.1406 27.3829 30.1406 27.9278 29.5898L29.5861 27.9316C30.137 27.3809 30.137 26.4902 29.592 25.9395ZM12.1884 19.6875C8.04551 19.6875 4.68784 16.3359 4.68784 12.1875C4.68784 8.04492 8.03965 4.6875 12.1884 4.6875C16.3313 4.6875 19.6889 8.03906 19.6889 12.1875C19.6889 16.3301 16.3371 19.6875 12.1884 19.6875Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Postoffice;
