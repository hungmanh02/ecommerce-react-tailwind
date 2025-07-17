import React from 'react';
import Img1 from '../../assets/shirt/shirt.png';
import Img2 from '../../assets/shirt/shirt2.png';
import Img3 from '../../assets/shirt/shirt3.png';
import { FaStar } from 'react-icons/fa6';
const ProductsData = [
  {
    id: 1,
    image: Img1,
    title: 'Casual Wear',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi similique asperiores ab iste, repudiandae vero aut ducimus nemo officiis.',
  },
  {
    id: 2,
    image: Img2,
    title: 'Printed shirt',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi similique asperiores ab iste, repudiandae vero aut ducimus nemo officiis.',
  },
  {
    id: 3,
    image: Img3,
    title: 'Women shirt',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi similique asperiores ab iste, repudiandae vero aut ducimus nemo officiis.',
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className='container mx-auto'>
        {/* Header section */}
        <div className='text-left mb-24'>
          <p data-aos='fade-up' className='text-sm text-[#fea928]'>
            Top Rated Products for you
          </p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>
            Best Products
          </h1>
          <p data-aos='fade-up' className=' text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quas?
          </p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 ms:gap-5 place-items-center'>
          {ProductsData.map((data) => (
            <div
            data-aos="zoom-in"
            className='
                    rounded-2xl bg-white dark:bg-gray-800 
                    hover:bg-black/80 dark:hover:bg-[#fea928] 
                    hover:text-white relative shadow-xl duration-300 group max-w-[300px]
                    '
            >
              {/* image section */}
              <div className='h-[100px]'>
                <img
                  src={data.image}
                  alt={data.title}
                  class='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-200 drop-shadow-md'
                />
              </div>
              {/* detail section */}
              <div className='p-4 text-center'>
                {/* star rating */}
                <div className='w-full flex items-center justify-center gap-1'>                    
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                </div>
                <h1 className='text-sl font-bold '>{data.title}</h1>
                <p className='text-gray-500 font-bold group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                <button 
                className='bg-[#fea928] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-[#fea928]'
                // onClick={handleOrderPopup}
                >
                    Order now
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
