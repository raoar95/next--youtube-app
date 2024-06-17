import { SiYoutubeshorts } from "react-icons/si";
import VideoCard from "../../Component/VideoCard";
import ShortsCard from "@/app/Component/ShortsCard";
import { YtVideoData, YtShortsData } from "../../localData/ytApiData"
import ProductSlider from "@/app/Component/productSlider";

const FeedPage = () => {

  return (

    <div className="mx-[15px] sm:mx-[24px] py-[10px] md:pl-[65px] sm:p-0">

      <div className="w-full">

        <h4 className="font-bold text-[20px]">
          <SiYoutubeshorts className="inline text-[28px] text-red-600 pr-[8px] cursor-pointer" />
          Shorts
        </h4>

        <ProductSlider 
         slideContent={<>

         {YtShortsData.map((curElem) => {
         
         return (

         <ShortsCard 
           videoId={curElem.id}
           title={curElem.title}
           thumbnail={curElem.thumbnail}
           views={curElem.views}
         />

        )

         })} 
         
         </>}
        />
          
      </div>
      <hr className="my-[12px] border-white/[0.2]" />
      <div className="flex justify-between items-start flex-wrap gap-y-[16px]">

      {YtVideoData.map((curElem) => {

        return (

        <VideoCard
          videoId={curElem.id}
          title={curElem.title}
          thumbnail={curElem.thumbnail} 
          channelName={curElem.channel}
          channelLogo={curElem.chLogo}
          videoLength={curElem.vidLength}
          views={curElem.views}
          duration={curElem.duration}
        />

        )

      })};  

      </div>

    </div>

  );

};

export default FeedPage;
