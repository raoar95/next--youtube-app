import Link from "next/link";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";

const VideoCard = ({ videoId, title, thumbnail, channelName, channelLogo, videoLength, views, duration }: any) => {

  return (

    <Link href={`singleVideo/${videoId}`} className="shrink-0 lg:w-[24%] md:w-[32%] sm:w-[49%] xs:w-full overflow-hidden" key={ videoId }>

      {/*.....CARD TOP SEC.....*/}
      
      <div className="text-white overflow-hidden">
        <div className="relative md:rounded-xl">
          <img className="w-full" src={thumbnail} alt="" />
          <span className="absolute bottom-[10px] right-[10px] block text-[12px] py-[1px] px-[4px] bg-black/[0.7] rounded-[4px] font-semibold">
            {videoLength}
          </span>
        </div>
      </div>


      {/*.....CARD BOTTOM SEC.....*/}

      <div className="flex text-white mt-3">

      {/*.....LOGO .....*/}

        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            <img className="h-full w-full object-cover" src={channelLogo} />
          </div>
        </div>

        {/*.....CHANNEL NAME & TITLE.....*/}

        <div className="flex flex-col ml-3 overflow-hidden items-start">
          <span className="text-[16px] font-bold line-clamp-2 w-full overflow-ellipsis">
            {title}
          </span>
          <span className="text-[14px] font-medium text-white/[0.7] flex items-center">
            {channelName}
          </span>

          {/*.....VIEWS & DURATION .....*/}

          <div className="flex text-[14px] font-medium text-white/[0.7] truncate overflow-hidden">
            <span>{views}</span>
            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span>{duration}</span>
          </div>
        </div>

      </div>
      
    </Link>

  );
};

export default VideoCard;


