"use client";
import Image from "next/image";
import React, { useState } from "react";

const Section1 = () => {
  const [refundSelected, setRefundSelected] = useState(false);
  return (
    <div className="flex relative justify-center p-24 ">
      <div className="font-bold text-white z-20 absolute text-4xl left-20 top-10">
        <h1>TRACK YOUR PAYMENT</h1>
      </div>
      <div className="flex justify-center bg-white z-20 mt-10 p-20 h-[450px]">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="flex justify-center text-lg font-bold p-6 ">
            What would you like to track?
          </h1>

          <div className="flex justify-evenly space-x-1">
            <button
              className={`border border-black w-44 p-3 ${
                refundSelected !== true && "bg-green-400"
              } `}
              onClick={() => setRefundSelected(false)}
            >
              Payment
            </button>
            <button
              className={`border border-black hover:bg-blue-950 hover:text-white w-44 p-3 ${
                refundSelected && "bg-green-400"
              }`}
              onClick={() => setRefundSelected(true)}
            >
              Refund
            </button>
          </div>

          <div className="py-6">
            <input
              placeholder={
                refundSelected
                  ? "Enter your refund reference"
                  : "Enter your reference ID"
              }
              className="w-full p-3 border border-gray-700"
            />
          </div>
          <div className="py-2">
            <button className="bg-green-400 w-full p-3 cursor-not-allowed">
              {refundSelected ? "Track my refund" : "Track my Payment"}
            </button>
          </div>

          <div className="p-6 flex justify-center">
            <h1>Can't find your reference ID?</h1>
          </div>
        </form>
      </div>
      <Image
        src="/gpfs_tracking.d0996e31b3f07b02cf72b5a1af5842a7.png"
        alt="Background"
        objectFit="cover"
        quality={100}
        layout="fill"
      />
    </div>
  );
};

export default Section1;
