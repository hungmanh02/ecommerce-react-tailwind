import React from 'react'
import Image1 from "../../assets/women/women.png";
import Image2 from "../../assets/women/women2.jpg";
import Image3 from "../../assets/women/women3.jpg";
import Image4 from "../../assets/women/women4.jpg";
import { FaStar } from 'react-icons/fa6';
const ProductsData=[
    {
        id:1,
        image:Image1,
        title:"Women Ethnic",
        rating:5.0,
        color:'white',
        aosDelay:"0",
    },
    {
        id:2,
        image:Image2,
        title:"Women western",
        rating:5.0,
        color:'red',
        aosDelay:"200",
    },
    {
        id:3,
        image:Image3,
        title:"Goggles",
        rating:5.0,
        color:'red',
        aosDelay:"400",
    },
    {
        id:4,
        image:Image4,
        title:"Goggles as",
        rating:5.0,
        color:'red',
        aosDelay:"600",
    },
    {
        id:5,
        image:Image2,
        title:"The new brand",
        rating:5.0,
        color:'red',
        aosDelay:"800",
    },
]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container mx-auto'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-[#fea928]'>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className=' text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quas?
            </p>
        </div>
        {/* Body section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {/* Card section */}
                {
                    ProductsData.map((data)=>(
                        <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        className='space-y-3'
                        key={data.id}>
                            <img src={data.image} alt={data.title} 
                            className='h-[220px] w-[150px] object-cover rounded-md'
                            />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p  className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400'/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {/* view all button */}
            <div className='flex justify-center'>
                <button className='text-center mt-10 cursor-pointer bg-[#fea928] py-1 px-5 rounded-md hover:bg-[#fea928]/80'>View all product</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
