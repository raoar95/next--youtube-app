import { YtVideoData } from "@/app/localData/ytApiData";
import VideoCard from "@/app/Component/VideoCard";

const VideoCategory = ( {params} : any ) => {  

  // FILTERING CATEGORY VIDEOS

  const filtCatData = YtVideoData.filter((curElem) => {
    return curElem.category === params.catName;
  });  

  return (

    <div className="mx-[24px] py-[10px] md:pl-[65px] sm:p-0 flex justify-between items-start flex-wrap gap-y-[16px]">

    {filtCatData.map((curElem) => {

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
  )
}

export default VideoCategory;

