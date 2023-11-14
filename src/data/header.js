import { RiYoutubeFill } from 'react-icons/ri'
import { FaCrown } from 'react-icons/fa6'
import { BiSolidCalendarCheck } from "react-icons/bi";
import { PiCodepenLogo } from 'react-icons/pi'
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { TiSocialFacebookCircular } from "react-icons/ti";


export const menuText = [
    {
        title: "Home",
        icon: <RiYoutubeFill />,
        src: "/"
    }, {
        title: "Today's Pick!",
        icon: <BiSolidCalendarCheck />,
        src: "/today"
    }, {
        title: "HOT Youtuber",
        icon: <FaCrown />,
        src: "/youtuber"
    },
]

export const keywordText = [
    {
        title: "The Local Project",
        src: "/search/The Local Project"
    }, {
        title: "Legendary Productions",
        src: "/search/Legendary Productions"
    }, {
        title: "Enes Yilmazer",
        src: "/search/Enes Yilmazer"
    }, {
        title: "Architectural Digest",
        src: "/search/Architectural Digest"
    }, {
        title: "Design Seed",
        src: "/search/Design Seed"
    }, {
        title: "The Luxury Home Show",
        src: "/search/The Luxury Home Show"
    }, {
        title: "Nikiomahe",
        src: "/search/Nikiomahe"
    }, {
        title: "Valentte Architecture",
        src: "/search/Valentte Architecture"
    },
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/jh71171",
        icon: <AiFillGithub />
    }, {
        title: "Codepen",
        src: "https://codepen.com/jh71171",
        icon: <PiCodepenLogo />
    }, {
        title: "Youtube",
        src: "https://youtube.com/jh71171",
        icon: <AiOutlineYoutube />
    }, {
        title: "Instagram",
        src: "https://instagram.com/jh71171",
        icon: <AiOutlineInstagram />
    }, {
        title: "Facebook",
        src: "https://facebook.com/jh71171",
        icon: <TiSocialFacebookCircular />
    },
]