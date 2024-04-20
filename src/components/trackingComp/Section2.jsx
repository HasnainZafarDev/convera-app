import Link from 'next/link'
import React from 'react'

const Section2 = () => {
  return (
    <div className="flex justify-between space-x-1  ">

      <Link href="/contact" className="flex-1 flex bg-green-500 p-12 justify-center items-center flex-col hover:bg-blue-950">
        <div>
          <img src="https://students.convera.com/geo-buyer/_assets/dist/assets/track-payment.aba63a678cc771358c49e3d46901c737.svg" />
        </div>
        <div>
        <h1 className="flex text-center text-4xl mt-3" >Contact Us</h1>
        </div>
      
      </Link>

      <Link  href="/faqs" className="flex-1 flex bg-green-500 p-12 justify-center items-center flex-col hover:bg-blue-950">
        <div>
          <img src="https://students.convera.com/geo-buyer/_assets/dist/assets/track-payment.aba63a678cc771358c49e3d46901c737.svg" />
        </div>
        <div>
        <h1 className="flex text-center text-4xl mt-3" >Tips & FAQs</h1>
        </div>
        </Link>
     
      
    </div>
  )
}

export default Section2