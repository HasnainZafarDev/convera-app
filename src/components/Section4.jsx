import React from "react";

const Section4 = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-200">
        <div className="font-bold flex items-center justify-center text-3xl mt-16 p-12">
          <h1>How It Works</h1>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-center px-44 ">
            Pay in your local currency and we will deliver your funds directly
            to your institution - with no hidden charges or bank fees from
            Convera. Your bank or other source of payment <br /> may assess
            other charges directly to you.
          </p>
        </div>
      </div>

       <div className="flex justify-between bg-slate-200 p-16"> 
        <div className="flex flex-col items-center  flex-1  ">
          <img 
      className=""
      src="https://students.convera.com/geo-buyer/_assets/dist/assets/directed-to-bank.df0de583931d72d0c018e97f3d5ef7e2.svg"
      />
       <h1 className="font-semibold mt-6 text-xl text-center"> 
       Select payment option 
       </h1> 
       </div> 

      <div className="flex flex-col justify-center items-center flex-1 ">
          <img
            className=""
            src="https://students.convera.com/geo-buyer/_assets/dist/assets/provide-id.e27217a905e71329d90a02e91b353ce1.svg"
          />

          <h1 className="font-semibold mt-6 text-xl text-center">
            Enter student and payment
            <br /> details
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <img
            className=""
            src="https://students.convera.com/geo-buyer/_assets/dist/assets/directed-to-bank.df0de583931d72d0c018e97f3d5ef7e2.svg"
          />
      <h1 className="font-semibold mt-6 text-xl text-center">
            We'll send the funds directly to your institution
          </h1>
        </div>
      </div>
      
    </>
  );
};

export default Section4;
