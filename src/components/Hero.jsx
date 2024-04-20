import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex relative">
      <div className="py-20 ml-5 z-10  font-bold text-white text-2xl">
        <h1 className="">Studying In </h1>
        <select className="mt-2 h-10 w-96 text-black font-thin">
          <option value="" disabled selected>
            ⛯ Select a Country
          </option>
          <option value="1">Pakistan</option>
          <option value="2">Australia</option>
          <option value="3">Canada</option>
        </select>
        <h1 className="mt-6">Institution</h1>
        <select className="mt-2 h-10 w-96 text-black font-thin ">
          <option value="" disabled selected>
            🔍 Enter Institution Name
          </option>
          <option value="1">Awkum</option>
          <option value="2">Lums</option>
          <option value="3">Oxford</option>
        </select>
        <p className="font-thin text-xl underline mt-2 hover:">
          What if my Institution is not listed?
        </p>
        <button className="bg-green-500 p-1 w-96 h-12 mt-6 flex-1 cursor-not-allowed">
          Next
        </button>
        <div className="z-20 absolute bottom-6 right-8 text-3xl text-center  w-80 flex-row items-end">
          <h1 className="text-end font-bold">PAY STUDENT FEES WITH YOUR HOME</h1>
          <h1 className=" text-end">CURRENCY</h1>
        </div>
      </div>
      <Image
        src="/gpfs_landing_image.58cb64e67d84e69d7c0159e886ae01e1.png"
        alt="Background"
        objectFit="cover"
        quality={100}
        layout="fill"
        className=""
      />
    </div>
  );
};

export default Hero;
