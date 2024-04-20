import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-blue-900 py-7 justify-normal px-10">
        <Image
          src="/wubs-logo.97d665ba57f6277cc11adb9532dc49db.png"
          width={200}
          height={150}
          className=""
        />
        <div className="flex underline space-x-8 font-bold text-white px-20">
          <Link href="/" className="hover:text-green-300">
            Make Your Payment
          </Link>
          <Link href="/tracking" className="hover:text-green-300">
            Track Your Payment
          </Link>
          <Link href="/faqs" className="hover:text-green-300">
            Tips And FAQS
          </Link>
        </div>
        <select className="text-white font-normal bg-blue-900 hover:text-green-200 ml-96">
          <option value="English">EN</option>
          <option value="Urdu">UR</option>
          <option value="Hindhi">HI</option>
        </select>
      </div>
      <div className="bg-green-400 h-3 w-100"></div>
    </>
  );
};

export default Navbar;
