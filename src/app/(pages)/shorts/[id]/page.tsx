import ShortsDetail from "@/app/Component/ShortsDetail"
import { YtShortsData } from "../../../localData/ytApiData"

// // Define the function to generate static parameters

// export const generateStaticParams = async () => {

//   // Get all IDs from the YtShortsData

//   const paths = YtShortsData.map(short => ({
//     params: { id: short.id.toString() }
//   }));

//   return paths;

// };

const SingleShorts = ({ params }: any) => {

  // FILTERING SINGLE SHORTS

  const paramsNumId = Number(params.id);

  const filtShortsData = YtShortsData.filter((curElem) => {
    return curElem.id === paramsNumId;
  });

  // Check if filtShortsData is empty
  
  if (filtShortsData.length === 0) {
    return <div>No shorts found</div>;
  }

  return (
    <div className="w-[100vw] sm:h-[652px] grid place-items-center">
      <ShortsDetail
        thumbnail={filtShortsData[0].thumbnail}
        title={filtShortsData[0].title}
        channelLogo={filtShortsData[0].chLogo}
        channelName={filtShortsData[0].channel}
      />
    </div>
  );
};

export default SingleShorts;
