import { YtVideoData } from "@/app/localData/ytApiData";
import VideoDetail from "@/app/Component/VideoDetail";

const SingleVideo = ( { params }: any ) => {

   // FILTERING SINGLE VIDEOS

   const paramsNumId = Number(params.id)

   const filtVidData = YtVideoData.filter((curElem) => {
       return curElem.id === paramsNumId;
   });

   console.log(filtVidData);
   
   return (

   <VideoDetail 
     thumbnail={filtVidData[0].thumbnail}
     title={filtVidData[0].title}
   />

   )


  }
  
  export default SingleVideo;