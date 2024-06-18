import { YtVideoData } from "@/app/localData/ytApiData";
import VideoCard from "@/app/Component/VideoCard";

// Define the function to generate static parameters

export const generateStaticParams = async () => {

  // Get all unique categories from the YtVideoData

  const categories = [...new Set(YtVideoData.map(video => video.category))];

  // Create paths for each category

  const paths = categories.map(catName => ({
    params: { catName }
  }));

  return paths;
};

const VideoCategory = ({ params }: any) => {

  // FILTERING CATEGORY VIDEOS
  
  const filtCatData = YtVideoData.filter(curElem => curElem.category === params.catName);

  return (
    <div className="mx-[24px] py-[10px] md:pl-[65px] sm:p-0 flex justify-between items-start flex-wrap gap-y-[16px]">
      {filtCatData.map(curElem => (
        <VideoCard
          key={curElem.id}
          videoId={curElem.id}
          title={curElem.title}
          thumbnail={curElem.thumbnail}
          channelName={curElem.channel}
          channelLogo={curElem.chLogo}
          videoLength={curElem.vidLength}
          views={curElem.views}
          duration={curElem.duration}
        />
      ))}
    </div>
  );
};

export default VideoCategory;
