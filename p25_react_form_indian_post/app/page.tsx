"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [pincode, setPincode] = useState("");
  const [valid, setValid] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSumbit = () => {
    if (pincode.length != 6) {
      setValid(true);
      setMsg("Pincode must be 6 Characters");
    } else {
      setValid(false);
      router.push(`/postoffice?pincode=${pincode}`);
    }
  };

  return (
    <div className="flex flex-col w-3/4 mx-auto mt-10">
      <h1 className="text-3xl font-bold p-3">Enter Pincode</h1>
      <input
        type="number"
        maxLength={6}
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => {
          setPincode(e.target.value);
          setValid(false);
        }}
        className="p-2 w-3/4 text-md border-solid border-2 border-black rounded-md m-3"
      />
      {valid && <div className="p-3 text-red-500">{msg}</div>}
      <div
        onClick={handleSumbit}
        className="w-fit cursor-pointer px-10 py-2 bg-black rounded-md text-white m-3"
      >
        Lookup
      </div>
    </div>
  );
}
