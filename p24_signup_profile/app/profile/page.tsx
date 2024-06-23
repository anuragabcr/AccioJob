"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("profile");
    if (data) {
      setProfile(JSON.parse(data));
    } else {
      router.push("/");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("profile");
    router.push("/");
  };

  return (
    <div className="flex flex-col w-3/4 mx-auto mt-10">
      <div>Profile</div>
      <div>Full Name:- {profile?.name}</div>
      <div>Email:- {profile?.email}</div>
      <div>Password:- {profile?.pass}</div>
      <div
        onClick={handleLogout}
        className="w-fit bg-white  text-black px-7 py-2 mt-5 cursor-pointer"
      >
        Log Out
      </div>
    </div>
  );
};

export default Profile;
