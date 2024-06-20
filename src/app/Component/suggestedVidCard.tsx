import Link from "next/link";

const SuggestVidCard = ({ videoId, title, thumbnail, channelName, videoLength, views, duration }: any) => {

  return (

    <Link href={`/singleVideo/${videoId}`} className="flex items-start shrink-0 w-full overflow-hidden" key={ videoId }>

      {/*.....CARD TOP SEC.....*/}
      
      <div className="text-white overflow-hidden w-[50%] md:w-[45%]">
        <div className="relative md:rounded-xl">
          <img className="w-full" src={thumbnail} alt="" />
          <span className="absolute bottom-[10px] right-[10px] block text-[12px] py-[1px] px-[4px] bg-black/[0.7] rounded-[4px] font-semibold">
            {videoLength}
          </span>
        </div>
      </div>


      {/*.....CARD BOTTOM SEC.....*/}

      <div className="flex text-white w-[50%] md:w-[55%]">

        {/*.....CHANNEL NAME & TITLE.....*/}

        <div className="flex flex-col ml-3 overflow-hidden items-start">
          <span className="text-[14px] font-bold line-clamp-2 w-full overflow-ellipsis">
            {title}
          </span>
          <span className="text-[12px] font-medium text-white/[0.7] flex items-center">
            {channelName}
          </span>

          {/*.....VIEWS & DURATION .....*/}

          <div className="flex text-[12px] font-medium text-white/[0.7] truncate overflow-hidden">
            <span>{views}</span>
            <span className="flex text-[20px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span>{duration}</span>
          </div>
        </div>

      </div>
      
    </Link>

  );
};

export default SuggestVidCard;