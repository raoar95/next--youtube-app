import { AiOutlineLike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { BiDislike } from "react-icons/bi";
import { YtVideoData } from "../localData/ytApiData";
import SuggestVidCard from "./suggestedVidCard";

const VideoDetail = ({ vidKey, channelLogo, title, channelName, category }: any) => {

  // FILTERING VIDEOS OF SAME CATEGORY BUT DIFFERENT ID

  const filtVidData = YtVideoData.filter((curElem) => {
    return curElem.category === category && curElem.id !== vidKey;
  });

  return (

    <div className="flex justify-center flex-row">
      <div className="w-full flex flex-col md:flex-row gap-4 max-w-[1400px] p-[20px]">

       {/*.....VIDEO DETAIL SEC.....*/} 

        <div className="flex flex-col p-0 md:pl-[65px] lg:pr-0 w-full min-w-[50%] overflow-y-auto">
          <div className="h-[200px] sm:h-[400px] xl:h-[500px] lg:ml-0 lg:mr-0 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/fazzZmEC-LI?si=HZjjjjXYI3LsOV_0"
              className="w-full h-full"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4">
            <p className="text-white text-md font-semibold line-clamp-2 text-ellipsis">
              {title}
            </p>
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4 items-center">
            <div className="flex items-center justify-between lg:justify-normal gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={channelLogo}
                  />
                </div>
                <p className="text-[16px] font-medium">{channelName}</p>
              </div>
              <button className="h-[36px] bg-[#f1f1f1] text-[#0f0f0f] px-[16px] rounded-[18px] font-medium hover:opacity-80">
                Subscribe
              </button>
            </div>
            <div className="flex text-white mt-4 md:mt-0 gap-2 w-full lg:w-auto">
              <div className="flex items-center bg-[#303030]/[0.6] rounded-3xl">
                <div className="flex items-center justify-center h-10 px-4 rounded-l-3xl cursor-pointer hover:bg-[#303030]/[0.8]">
                  <AiOutlineLike className="text-xl text-white mr-2" /> 1.1K
                </div>{" "}
                |
                <div className="flex items-center justify-center h-10 px-4 rounded-r-3xl cursor-pointer hover:bg-[#303030]/[0.8]">
                  <BiDislike className="text-xl text-white mr-2" />
                </div>
              </div>
              <div className="flex items-center justify-center h-10 px-4 rounded-3xl bg-[#303030]/[0.6] cursor-pointer hover:bg-[#303030]/[0.8]">
                <IoIosShareAlt className="text-xl text-white mr-2" /> Share
              </div>
            </div>
          </div>
        </div>

      {/*.....SUGGESTED VIDEO SEC.....*/} 

        <div className="flex flex-col gap-[5px] md:shrink-0 overflow-y-auto w-full md:w-[420px]">
          {filtVidData.map((curElem) => {
            return (
              <SuggestVidCard
                videoId={curElem.id}
                title={curElem.title}
                thumbnail={curElem.thumbnail}
                channelName={curElem.channel}
                channelLogo={curElem.chLogo}
                videoLength={curElem.vidLength}
                views={curElem.views}
                duration={curElem.duration}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default VideoDetail;
