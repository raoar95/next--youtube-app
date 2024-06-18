import { YtVideoData } from "@/app/localData/ytApiData";
import VideoDetail from "@/app/Component/VideoDetail";

// // Define the function to generate static parameters

// export const generateStaticParams = async () => {

//   // Get all IDs from the YtVideoData
  
//   const paths = YtVideoData.map(video => ({
//     params: { id: video.id.toString() }
//   }));

//   return paths;
// };

const SingleVideo = ({ params }: any) => {

  // FILTERING SINGLE VIDEOS

  const paramsNumId = Number(params.id);

  const filtVidData = YtVideoData.filter((curElem) => {
    return curElem.id === paramsNumId;
  });

  // Check if filtVidData is empty

  if (filtVidData.length === 0) {
    return <div>No video found</div>;
  }

  return (
    <VideoDetail 
      thumbnail={filtVidData[0].thumbnail}
      title={filtVidData[0].title}
    />
  );
};

export default SingleVideo;
