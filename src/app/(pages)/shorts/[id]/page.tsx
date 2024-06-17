import ShortsDetail from "@/app/Component/ShortsDetail"
import { YtShortsData } from "../../../localData/ytApiData"

const SingleShorts = ( {params} : any ) => {

  // FILTERING SINGLE SHORTS

  const paramsNumId = Number(params.id)

  const filtShortsData = YtShortsData.filter((curElem) => {
    return curElem.id === paramsNumId;
  });  

  return (

    <div className="w-[100vw] sm:h-[652px] grid place-items-center">

      <ShortsDetail 
       thumbnail={filtShortsData[0].thumbnail}
       title={filtShortsData[0].title}
       channelLogo={filtShortsData[0].chLogo}
       channelName={filtShortsData[0].channel}
      />

    </div>
    
  )

}

export default SingleShorts;
