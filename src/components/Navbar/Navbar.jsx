import React from 'react';
import logo from '../../assets/logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from 'react-icons/fa6';
import DarkMode from "./DarkMode";
const Menu=[
  {
    id:1,
    name:"Home",
    link:"/#"
  },
  {
    id:2,
    name:"Top Rated",
    link:"/#service"
  },
  {
    id:3,
    name:"kids Wear",
    link:"/#"
  },
  {
    id:4,
    name:"Mens Wear",
    link:"/#"
  },
  {
    id:5,
    name:"Electronice",
    link:"/#"
  },
]
const DropdownListLinks=[
  {
    id:1,
    name:"Trending Products",
    link:"/#"
  },
  {
    id:2,
    name:"Best Selling",
    link:"/#"
  },
  {
    id:3,
    name:"Top Rated",
    link:"/#"
  },
];
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className='bg-[#fea928]/40 py-3 sm:py-0'>
        <div className='lg:container flex justify-between items-center'>
          <div>
            <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
              <img src={logo} alt='Logo'
              className='w-10' />
              Shopzy
            </a>
          </div>
          {/* search bar */}
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input
                type='text'
                placeholder='search'
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] bg-white transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-[#fea928]'
              />
              <IoMdSearch className='text-gray-500 group-hover:text-[#fea928] absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
            {/* order button */}
            <button
            onClick={()=>alert("Ordering not availabel yet")} 
            className='bg-gradient-to-r from-[#fea928] to-[#ed8900] transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
            <span className='group-hover:block hidden transition-all duration-200'>
              Order
              </span>
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode/>
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data)=>(
              <li>
                <a 
                href={data.link}
                className='inline-block px-4 hover:text-[#fea928] duration-200'
                >{data.name}</a>
              </li>
            ))}
            {/* simple dropdown and Links */}
              <li className='group relative cursor-pointer'>
                <a 
                href="#"
                className='flex items-center gap-[2px] py-2'
                >
                Trending Products
                <span>
                  <FaCaretDown
                  className='transition-all duration-200 group-hover:rotate-180'
                  />
                </span>
                </a>
                <div className='absolute z-[99999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
                  <ul>
                    {DropdownListLinks.map((data)=>(
                      <li key={data.id}>
                        <a 
                        href={data.link}
                        className='inline-block w-full rounded-md p-2 hover:bg-[#fea928]/20'
                        >{data.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
