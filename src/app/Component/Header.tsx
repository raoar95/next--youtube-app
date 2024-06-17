import Link from "next/link";
import ytLogo from "../assets/images/yt-logo.png";
import ytLogoM from "../assets/images/yt-logo-mobile.png";
import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import Image from "next/image";
import { IconBar, SideBar } from "./Sidebar";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:pl-[15px] md:px-5 bg-[#0f0f0f]">

        <div className="flex h-5 items-center">

          {/*.....SIDEBAR COMPONENT.....*/}

          <SideBar />

          {/*.....NAV LOGO.....*/}

          <Link href="/" className="flex h-5 items-center">
            <Image
              className="ml-[10px] h-full w-[90px] hidden dark:md:block"
              src={ytLogo}
              alt="Youtube"
            />
            <Image
              className="h-full md:hidden w-full"
              src={ytLogoM}
              alt="Youtube"
            />
          </Link>

        </div>

        {/*.....NAV SEARCH BAR.....*/}

        <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 bg-[#121212] border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-white text-xl" />
            </div>
            <input
              type="text"
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              placeholder="Search"
            />
          </div>
          <button
            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
          >
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>


        {/*.....NAV NOTIFICATION.....*/}

        <div className="flex items-center">
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#303030]/[0.6] hover:bg-[#303030]/[1]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer" />
          </div>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full bg-[#303030]/[0.6] hover:bg-[#303030]/[1]">
              <FiBell className="text-white text-xl cursor-pointer" />
            </div>
          </div>


          {/*.....NAV USER.....*/}

          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user.png" />
          </div>

        </div>

      </div>


      {/*.....NAV ICON BAR.....*/}   

      <IconBar />

    </>
  );
};

export default Header;
