import React from "react";

const Section2 = () => {
  return (
    <div className="flex justify-evenly space-x-1 font-semibold text-2xl">
      <div className="flex flex-col items-center bg-slate-200  p-12 flex-1">
        <img
          src="https://students.convera.com/geo-buyer/_assets/dist/assets/guarantee-badge.d00a69227f9c512858aee6b329c93dc8.svg"
          alt="a"
        />
        <h1 className="mt-3 text-center">
          Trusted by education institutions around the world
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center bg-slate-200 p-12 flex-1">
        <img
          src="https://students.convera.com/geo-buyer/_assets/dist/assets/black.968a02c81925287805de4dd2a037d3f3.svg"
          alt="b"
        />
        <h1 className="mt-3 text-center">
          Pay in the currency of your choice from over 200 countries and
          territories
        </h1>
      </div>

      <div className="flex flex-col items-center bg-slate-200 p-12 flex-1">
        <img
          src="https://students.convera.com/geo-buyer/_assets/dist/assets/convenient.e9c23b55a3f0c02b993fdc0ad267fbbf.svg"
          alt="c"
        />
        <h1 className="mt-3 text-center">
          Pay on the move direct from your smartphone or tablet
        </h1>
      </div>
    </div>
  );
};

export default Section2;
