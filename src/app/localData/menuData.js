import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

const MenuData = [
    { name: "Home", icon: <AiFillHome className="h-[40px] text-[24px] mr-[24px]"/>, type: "page", link:"/" },
    { name: "Shorts", icon: <MdLocalFireDepartment className="h-[40px] text-[24px] mr-[24px]" />, type: "page", link:"/shorts/1" },
    {
        divider: true,
    },
    { groupHead: "Explore"},
    { name: "Entertainment", icon: <MdLiveTv className="h-[40px] text-[24px] mr-[24px]"/>, type: "category", link:"/category/entertainment" },
    { name: "Technology", icon: <IoGameControllerSharp className="h-[40px] text-[24px] mr-[24px]"/>, type: "category", link:"/category/technology" },
    { name: "Education", icon: <RiLightbulbLine className="h-[40px] text-[24px] mr-[24px]"/>, type: "category", link:"/category/education" },
    { name: "Sports", icon: <GiDiamondTrophy className="h-[40px] text-[24px] mr-[24px]"/>, type: "category", link:"/category/sports" },
    { name: "Politics", icon: <ImNewspaper className="h-[40px] text-[24px] mr-[24px]"/>, type: "category", link:"/category/politics" },
    {
        divider: true,
    },
    { name: "Settings", icon: <FiSettings className="h-[40px] text-[24px] mr-[24px]"/>, type: "menu", link:"#" },
    { name: "Report History", icon: <AiOutlineFlag className="h-[40px] text-[24px] mr-[24px]"/>, type: "menu", link:"#" },
    { name: "Help", icon: <FiHelpCircle className="h-[40px] text-[24px] mr-[24px]"/>, type: "menu", link:"#" },
    { name: "Send feedback", icon: <RiFeedbackLine className="h-[40px] text-[24px] mr-[24px]"/>, type: "menu", link:"#" },
];

export default MenuData;
