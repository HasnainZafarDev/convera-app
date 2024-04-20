import Link from "next/link";
import React from "react";

const Section5 = () => {
  return (
    <div className="flex justify-between space-x-1  ">

      <Link  href="/tracking" className="flex-1 flex bg-green-400 p-12 justify-center items-center flex-col  hover:bg-blue-950">
        <div>
          <img src="https://students.convera.com/geo-buyer/_assets/dist/assets/track-payment.aba63a678cc771358c49e3d46901c737.svg" />
        </div>
        <h1 className="text-4xl font-semibold">Track Your Payments</h1>
        <div className="p-7 underline">
        <h1 className="flex text-center ">Keep track of your payment's <br/>progress to your institution</h1>
        </div>
      </Link>

      <Link  href="/faqs" className="flex-1 flex bg-green-400 p-12 justify-center items-center flex-col  hover:bg-blue-950">
        <div>
          <img src="https://students.convera.com/geo-buyer/_assets/dist/assets/track-payment.aba63a678cc771358c49e3d46901c737.svg" />
        </div>
        <h1 className="text-4xl font-semibold">Tips & FAQs</h1>
        <div className="p-4 underline">
        <h1  className="flex text-center ">Your questions answered - <br/>quick and simple</h1>
        </div>
      </Link>

      
    </div>
  );
};

export default Section5;
