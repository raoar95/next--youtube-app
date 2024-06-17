"use client"

import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import Link from "next/link";
import MenuData from "../localData/menuData.js"
import { SlMenu } from "react-icons/sl";
import { useState } from "react";


const IconBar = () => {

  return (
    <div className="bg-[#0f0f0f] text-xs text-center text-white w-[65px] h-[652px] hidden md:block fixed">
      <Link href="/">
        <div className="py-4 ml-1 hover:bg-[#ffffff1a]/[0.1] rounded-[10px]">
          <AiFillHome className="inline pb-[3px] text-[24px] cursor-pointer" />
          <p>Home</p>
        </div>
      </Link>

      <Link href="/shorts/1">
        <div className="py-4 ml-1 hover:bg-[#ffffff1a]/[0.1] rounded-[10px]">
          <SiYoutubeshorts className="inline pb-[3px] text-[24px] cursor-pointer" />
          <p>Shorts</p>
        </div>
      </Link>
    </div>
  );
};



const SideBar = () => {

  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const toggleSidebar = () => {

    setIsModalOpen(prev=> !prev)

  }

  return(

    <>
  
    <div className={`${isModalOpen ? "w-[240px]" : "w-0" }  h-full bg-[#0f0f0f] text-white overflow-hidden fixed left-0 top-14 transition-all`}>

    <div className="p-[12px]">

    { MenuData.map((curElem) => {

      console.log(curElem.link);
      

    return (
        <>
        <Link href={curElem.link !== undefined ? curElem.link : "" } className="flex items-center w-full px-[12px] cursor-pointer rounded-[10px] hover:bg-[#303030]/[0.6]">{curElem.icon} {curElem.name}</Link>
        {curElem.divider && <hr className="my-[12px] border-white/[0.2]" />}
        {curElem.groupHead}
        </>
    
    )

  })}    

</div>
    </div>

    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]" onClick={toggleSidebar}>
      <SlMenu className="text-white text-lg cursor-pointer select-none" />
     </div>

  </>
  
  )

}

export { IconBar, SideBar };
