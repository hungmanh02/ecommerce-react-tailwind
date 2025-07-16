import React from 'react';
import Img1 from '../../assets/shirt/shirt.png';
import Img2 from '../../assets/shirt/shirt2.png';
import Img3 from '../../assets/shirt/shirt3.png';
const ProductsData=[
    {
        id:1,
        image:Img1,
        title:"Casual Wear",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi similique asperiores ab iste, repudiandae vero aut ducimus nemo officiis."
    },
    {
        id:2,
        image:Img2,
        title:"Printed shirt",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi similique asperiores ab iste, repudiandae vero aut ducimus nemo officiis."
    },
    {
        id:3,
        image:Img3,
        title:"Women shirt",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi similique asperiores ab iste, repudiandae vero aut ducimus nemo officiis."
    },
]

const TopProducts = () => {
  return (
    <div>
        <div className='container mx-auto'>
            {/* Header section */}
            <div className='text-left mb-10'>
                <p data-aos="fade-up" className='text-sm text-[#fea928]'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Best Products</h1>
                <p data-aos="fade-up" className=' text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quas?
                </p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 ms:gap-5 place-items-center'>
                {
                    ProductsData.map((data)=>(
                        <div 
                        className='
                        rounded-2xl bg-white dark:bg-gray-800 
                        hover:bg-black/80 dark:hover:bg-[#fea928] 
                        hover:text-white relative shadow-xl duration-high group max-w-[300px]
                        '>
                            {/* image section */}
                            <div>
                                <img src={data.image} alt={data.title} />
                            </div>
                            {/* detail section */}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts
