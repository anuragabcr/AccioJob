"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const [error, setError] = useState(true);
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      pass.trim() === "" ||
      repass.trim() === ""
    ) {
      setError(true);
      setMsg("Error : All the fields are mandatory");
    } else if (pass != repass) {
      setError(true);
      setMsg("Error : Password and Confirm password are not same");
    } else {
      setError(false);
      setMsg("Successfully Signed Up!");
      localStorage.setItem("profile", JSON.stringify({ name, email, pass }));
      router.push("/profile");
    }
  };

  return (
    <div className="flex flex-col w-3/4 mx-auto mt-10">
      <h1 className="font-bold text-3xl pb-10">Signup</h1>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="focus:outline-none border-solid border-b-2 bg-transparent p-2 mb-3"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="focus:outline-none border-solid border-b-2 bg-transparent p-2 mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="focus:outline-none border-solid border-b-2 bg-transparent p-2 mb-3"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={repass}
        onChange={(e) => setRepass(e.target.value)}
        className="focus:outline-none border-solid border-b-2 bg-transparent p-2 mb-3"
      />
      {msg != "" && (
        <div className={error ? "text-red-700" : "text-green-700"}>{msg}</div>
      )}
      <div
        className="w-fit bg-white  text-black px-7 py-2 mt-5 cursor-pointer"
        onClick={handleSubmit}
      >
        Sign Up
      </div>
    </div>
  );
}
