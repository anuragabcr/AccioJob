"use client";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

interface PincodeData {
  Message: string;
  Status: string;
  PostOffice: PostOfficeItem[];
}

interface PostOfficeItem {
  Block?: string;
  BranchType: string;
  Circle: string;
  Country: string;
  DeliveryStatus: string;
  Description?: string;
  District: string;
  Division: string;
  Name: string;
  Pincode: string;
  Region: string;
  State: string;
}

const Postoffice = () => {
  const searchParams = useSearchParams();
  const pincode = searchParams.get("pincode");
  const [filter, setFilter] = useState("");
  const [data, setData] = useState<PincodeData>();
  const [filtered, setFiltered] = useState<PostOfficeItem[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/${pincode}`);
      const result = await response.json();
      setData(result);
      setFiltered(result?.PostOffice);
    };
    fetchData();
    setLoading(false);
  }, [pincode]);

  const handleChange = (value: string) => {
    setFilter(value);

    setFiltered(
      data?.PostOffice.filter((post) =>
        post.Name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-lvh" role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-3/4 mx-auto mt-10">
      <h1 className="text-3xl font-bold p-3">Pincode: {pincode}</h1>
      <h1 className="text-xl font-bold p-3">
        Message:
        <span
          className={
            data?.Status == "Success" ? "text-green-500" : "text-red-500"
          }
        >
          {data?.Message}
        </span>
      </h1>
      <div className="relative flex items-center">
        <input
          type="text"
          maxLength={6}
          placeholder="Filter"
          value={filter}
          onChange={(e) => handleChange(e.target.value)}
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
      <div className="flex flex-wrap m-5">
        {filtered?.map((item, index) => (
          <div
            key={index}
            className="w-1/3 border-2 border-solid rounded-md m-2 p-5 border-black"
          >
            <div>
              <span className="text-xl font-bold">Name:</span> {item.Name}
            </div>
            <div>
              {" "}
              <span className="text-xl font-bold">Branch Type:</span>{" "}
              {item.BranchType}
            </div>
            <div>
              <span className="text-xl font-bold">Delivery Status:</span>{" "}
              {item.DeliveryStatus}
            </div>
            <div>
              <span className="text-xl font-bold">District:</span>{" "}
              {item.District}
            </div>
            <div>
              <span className="text-xl font-bold">Division:</span>{" "}
              {item.Division}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Postoffice;
