import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-between border-solid border-b-2 m-3 p-3">
      <div>Header</div>
      <div className="flex">
        <Link href="/" className="mr-5 cursor-pointer">
          Sign Up
        </Link>
        <Link href="/profile" className="cursor-pointer">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
