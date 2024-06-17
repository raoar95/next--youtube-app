"use client"

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const ProductSlider = ({ slideContent }) => {

  const slideCont = useRef(null);

  let scrollWidth;

  const slideNext = () => {

    scrollWidth = slideCont.current.clientWidth;

    slideCont.current.scrollLeft += scrollWidth;

  };

  const slidePrev = () => {

    scrollWidth = slideCont.current.clientWidth;

    slideCont.current.scrollLeft -= scrollWidth;

  };
  

  return (

    <div className="relative">

    <div className="flex py-2 gap-[16px] overflow-x-auto group scroll-smooth noScrollBar" ref={slideCont}>

      {slideContent}

      {/*.....SLIDE ARROW ICONS.....*/}

      <div className="cursor-pointer text-lg bg-black/[0.7] w-[50px] h-[50px] rounded-full place-items-center absolute top-[42%] translate-y-[-42%] left-[10px] hidden group-hover:sm:grid" onClick={slidePrev}>

        <FaChevronLeft />

      </div>
      <div className="cursor-pointer text-lg bg-black/[0.7] w-[50px] h-[50px] rounded-full place-items-center absolute top-[42%] translate-y-[-42%] right-[10px] hidden group-hover:sm:grid" onClick={slideNext}>

        <FaChevronRight />

      </div>

    </div>

    </div>
  );
};

export default ProductSlider;
