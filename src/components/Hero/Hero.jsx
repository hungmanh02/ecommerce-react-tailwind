import React from 'react'
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
const ImageList = [
    {
        id:1,
        img: Image1 ,
        title: "Upto 50% off on all Men's Wear",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga quo, dolorem quis corrupti illum alias molestias placeat dicta expedita quidem laudantium eligendi! Architecto, ratione alias esse reiciendis maxime repellendus!",
    },
    {
        id:2,
        img: Image2 ,
        title: "30% off on all Shopping",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga quo, dolorem quis corrupti illum alias molestias placeat dicta expedita quidem laudantium eligendi! Architecto, ratione alias esse reiciendis maxime repellendus!",
    },
    {
        id:3,
        img: Image3,
        title: "70% off on all Products Sale",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fuga quo, dolorem quis corrupti illum alias molestias placeat dicta expedita quidem laudantium eligendi! Architecto, ratione alias esse reiciendis maxime repellendus!",
    },


];
const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200'>
      {/* background pattern */}
      <div className='h-[700px] w-[700px] bg-[#fea928]/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-1'>

      </div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text content section */}
                <div>
                    <h1 className='text-5xl sm:text-6xl lg:text-7xl'>Lorem ipsum dolor sit.</h1>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, sint?</p>
                    <div><button className='bg-gradient-to-r from-[#fea928] to-[#ed8900] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button></div>
                </div>
                {/* text content section */}


            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
