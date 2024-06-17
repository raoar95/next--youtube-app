import Link from "next/link";

const ShortsCard = ( { videoId, thumbnail, title, views }: any ) => {

    return (

        <>

        <Link href={`shorts/${videoId}`} className="w-[135px] sm:w-[230px] shrink-0" key={ videoId }>
            <img src={thumbnail} className="rounded-[16px] pb-[10px]" alt="" />
            <span className="text-[16px] font-bold line-clamp-2 w-full overflow-ellipsis">{title}</span>
            <p className="flex text-[14px] font-medium text-white/[0.7] truncate overflow-hidden">{views}</p>
        </Link>

        </>

    )

  }
  
  export default ShortsCard;