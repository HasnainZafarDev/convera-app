import Image from "next/image";
import React from "react";

const Faqs = () => {
  return (
    <div className="flex relative justify-center  ">
      <div className="flex z-20 p-20 left-12 absolute font-bold uppercase text-4xl text-white">
        Tips And Faqs
      </div>


      <div className="flex z-20 mt-6 ml-96 bg-amber-500">
        <h1 className="text-2xl ">Who we are</h1>
        <hr className="w-80 p-2" />

        <h1 className="text-2xl ">Benefits and How it Works</h1>
        <hr className="w-80  p-2" />

        <h1 className="text-2xl ">Paying from China</h1>
        <hr className="w-80  p-2" />

        <h1 className="text-2xl ">Paying from India</h1>
        <hr className="w-80  p-2" />

        <h1 className="text-2xl ">Security</h1>
        <hr className="w-80  p-2" />

        <h1 className="text-2xl ">Troubleshooting & Refunds</h1>
        <hr className="w-80 p-2" />

        <h1 className="text-2xl ">Price Promise</h1>
        <hr className="w-80 p-2" />

        <h1 className="text-2xl ">Paying from the US</h1>
        <hr className="w-80 p-2" />
      </div>
      <Image
        src="/logo.png"
        alt="Background"
        objectFit="cover"
        quality={100}
        layout="fill"
        className="opacity-75"
      />
    </div>
  );
};

export default Faqs;
