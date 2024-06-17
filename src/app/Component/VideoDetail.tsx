import { AiOutlineLike } from "react-icons/ai";

const VideoDetail = ({ channelLogo, title, thumbnail }: any) => {

    return (

        <div className="flex justify-center flex-row h-[calc(100%-56px)]">
            <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
                <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
                    <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 overflow-hidden">
                        {/* <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width="100%"
                            height="100%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        /> */}
                        <img src={thumbnail} alt="" />
                    </div>
                    <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
                        {/* {video?.title} */}
                    </div>
                    <div className="flex justify-between flex-col md:flex-row mt-4">
                        <div className="flex">
                            <div className="flex items-start">
                                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                                    <img
                                        className="h-full w-full object-cover"
                                        src=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-3">
                                <p className="text-white text-md font-semibold flex items-center">
                                    {title}
                                </p>
                                <div className="text-white/[0.7] text-sm">
                                {channelLogo}
                                </div>
                            </div>
                        </div>
                        <div className="flex text-white mt-4 md:mt-0">
                            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                                <AiOutlineLike className="text-xl text-white mr-2" /> 1.1K
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
                    {/* {relatedVideos?.contents?.map((item, index) => {
                        if (item?.type !== "video") return false;
                        return (
                            <SuggestionVideoCard
                                key={index}
                                video={item?.video}
                            />
                        );
                    })} */}
                </div>
            </div>
        </div>
        
      );
}

export default VideoDetail
