import { AiFillLike, AiFillDislike  } from "react-icons/ai";
import { MdComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";

const ShortsDetail = ( { thumbnail, channelLogo, title, channelName } : any ) => {
  return (
    <div className="w-[326px] flex relative font-medium">
      <img
        src={thumbnail}
        className="rounded-[16px]"
        alt=""
      />
      <div className="flex flex-col justify-end items-center ml-3 absolute right-[12px] bottom-[20px] sm:right-[-65px]">
        <div className="mb-[12px] text-center">
          <div className="flex items-center justify-center h-[50px] w-[50px] mb-[2px]  rounded-full bg-[#303030]/[0.6] hover:bg-[#303030]/[1]">
            <AiFillLike className="text-white text-[25px] cursor-pointer" />
          </div>
          <p className="text-[14px]">49K</p>
        </div>
        <div className="mb-[12px] text-center">
          <div className="flex items-center justify-center h-[50px] w-[50px] mb-[2px]  rounded-full bg-[#303030]/[0.6] hover:bg-[#303030]/[1]">
            <AiFillDislike className="text-white text-[25px] cursor-pointer" />
          </div>
          <p className="text-[14px]">Dislike</p>
        </div>
        <div className="mb-[12px] text-center">
          <div className="flex items-center justify-center h-[50px] w-[50px] mb-[2px]  rounded-full bg-[#303030]/[0.6] hover:bg-[#303030]/[1]">
            <MdComment className="text-white text-[25px] cursor-pointer" />
          </div>
          <p className="text-[14px]">500</p>
        </div>
        <div className="mb-[12px] text-center">
          <div className="flex items-center justify-center h-[50px] w-[50px] mb-[2px]  rounded-full bg-[#303030]/[0.6] hover:bg-[#303030]/[1]">
            <IoIosShareAlt className="text-white text-[25px] cursor-pointer" />
          </div>
          <p className="text-[14px]">Share</p>
        </div>
         <div className="h-[45px] w-[45px] rounded-[6px] overflow-hidden">
            <img className="h-full w-full object-cover" src={channelLogo} />
        </div>
      </div>
      <div className="absolute bottom-[20px] left-[12px] z-10 w-[75%]">
      <div className="flex items-center gap-[10px] overflow-hidden">
        <img className="w-[48px] rounded-full" src={channelLogo} />
        <span className="text-[16px] w-full text-ellipsis whitespace-nowrap">{channelName}</span>
      </div>
       <p className="line-clamp-2 text-ellipsis">{title}</p>
      </div>
    </div>
  );
};

export default ShortsDetail;
