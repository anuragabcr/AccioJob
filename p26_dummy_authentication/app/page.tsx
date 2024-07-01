"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Nav from "@/Components/Nav";

axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "https://dummyjson.com";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(true);
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    if (name.trim() === "" || pass.trim() === "") {
      setError(true);
      setMsg("Error : All the fields are mandatory");
    } else {
      try {
        const res = await axios.post("https://dummyjson.com/auth/login", {
          username: name,
          password: pass,
        });
        const data = res.data;
        setError(false);
        setMsg("Successfully Signed Up!");
        localStorage.setItem(
          "profile",
          JSON.stringify({
            name: `${data?.firstName} ${data?.lastName}`,
            email: data?.email,
            pass,
          })
        );
        router.push("/profile");
      } catch (error) {
        setError(true);
        setMsg("Invalid credentials");
        console.log(error);
      }
    }
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col w-3/4 mx-auto mt-10">
        <h1 className="font-bold text-3xl pb-10">Login</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="focus:outline-none border-solid border-b-2 bg-transparent p-2 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="focus:outline-none border-solid border-b-2 bg-transparent p-2 mb-3"
        />
        {msg != "" && (
          <div className={error ? "text-red-700" : "text-green-700"}>{msg}</div>
        )}
        <div
          className="w-fit bg-white  text-black px-7 py-2 mt-5 cursor-pointer"
          onClick={handleSubmit}
        >
          Login
        </div>
      </div>
    </>
  );
}
