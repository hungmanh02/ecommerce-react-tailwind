# React + Vite
# react-icon
# react-slick
- npm install react-slick --save
- npm install slick-carousel --save
** import vào main.jsx
- import "slick-carousel/slick/slick.css";
- import "slick-carousel/slick/slick-theme.css";
# AOS --- amination
- npm i aos :
useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  use effect trong App.jsx de chay toan trang
   su dung
    -- data-aos="fade-up" di chuyen len cua amination
    -- data-aos-delay={data.aosDelay} thoi gian chuyen