import {portfolio, cados, ninjamir, spectro, tico} from "../assets";
import {dennisivy, ninjamir_logo} from "../assets";
import {github, discord, twitter, linkedin} from '../assets';

import {
    SiReact,
    SiJavascript,
    SiBootstrap,
    SiTailwindcss,
    SiVite,
    SiHtml5,

    SiDjango,
    SiPython,
    SiOpencv,
    SiPandas,
    SiFlask,

    SiPostgresql,
    SiGooglesheets,

    SiTwitter,

} from "react-icons/si";

export const navLinks = [
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const interests = [
    {
        id: "interest-1",
        title: "Programming",
        content: "It helps me to understand complicated things and make life more easy and intersting.",
        bgcolor: "bg-card-green",
    },
    {
        id: "interest-2",
        title: "Strategy",
        content: "Strategy helps people to be focused, analysing, planning and achieving.",
        bgcolor: "bg-card-blue",
    },
    {
        id: "interest-3",
        title: "Martial Arts",
        content: "Martial Arts make you disciplined, teach never give up and defend what you love.",
        bgcolor: "bg-card-red",
    },
];

export const projects = [
    {
        id: "projects-1",
        index: 1,
        title: "Portfolio",
        description: "This is my portfolio website based on React to represent myself and my skills.",
        image: portfolio,
        github: "",
        url: "https://seriu.netlify.com",
        stack: [
            {
                id: "icon-1",
                icon: SiReact,
                name: "React"
            },
            {
                id: "icon-2",
                icon: SiVite,
                name: "ViteJS"
            },
            {
                id: "icon-3",
                icon: SiTailwindcss,
                name: "TailwindCSS"
            }
        ]
    },
    {
        id: "projects-2",
        index: 2,
        title: "Cados.dev",
        description: "The application represents developeradvocates from Twitter. It helps people to find their advocate through name, technologies, company.",
        image: cados,
        github: "https://github.com/sergomen/agorapi-frontend",
        url: "https://cados-dev.netlify.com",
        stack: [
            {
                id: "icon-1",
                icon: SiReact,
                name: "React"
            },
            {
                id: "icon-2",
                icon: SiDjango,
                name: "DRF"
            },
            {
                id: "icon-3",
                icon: SiTwitter,
                name: "TwitterAPI"
            }
        ]
    },
    {
        id: "projects-3",
        index: 3,
        title: "Ninjamir",
        description: "The app based on Django is a game about goals achievement and time management. Ninjamir makes people to be more productive.",
        image: ninjamir,
        github: "https://github.com/sergomen/ninjamir",
        url: "",
        stack: [
            {
                id: "icon-1",
                icon: SiJavascript,
                name: "JavaScript",
            },
            {
                id: "icon-2",
                icon: SiBootstrap,
                name: "Boostrap",
            },
            {
                id: "icon-3",
                icon: SiDjango,
                name: "Django",
            },
            {
                id: "icon-4",
                icon: SiPostgresql,
                name: "PostgreSQL",
            }
        ]
    },
    {
        id: "projects-4",
        index: 4,
        title: "Spectro-Helper",
        description: "This project is dedicated to the famous collectible card game 'Spectromancer'. The application reads information from the screen and allows the player to better plan the strategy without holding enemy cards in his head.",
        image: spectro,
        github: "https://github.com/sergomen/spectro-helper",
        url: "",
        stack: [
            {
                id: "icon-1",
                icon: SiPython,
                name: "Python, PySimpleGUI, PyTesseract"
            },
            {
                id: "icon-2",
                icon: SiOpencv,
                name: "OpenCV"
            },
            {
                id: "icon-3",
                icon: SiPandas,
                name: "Pandas"
            }
        ],
    },
    {
        id: "projects-5",
        index: 5,
        title: "Tico",
        description: "Tico written in Flask provides information from Google Sheets in more comfortable format and let users to put data into tables. Tico is one of the part for the game with time management like Ninjamir.",
        image: tico,
        github: "https://github.com/sergomen/tico",
        url: "https://msgusapythonanywhere.com",
        stack: [
            {
                id: "icon-1",
                icon: SiHtml5,
                name: "HTML5"
            },
            {
                id: "icon-2",
                icon: SiJavascript,
                name: "JavaScript"
                
            },
            {
                id: "icon-3",
                icon: SiGooglesheets,
                name: "Google Sheets, Google API"
            },
            {
                id: "icon-4",
                icon: SiFlask,
                name: "Flask"
            }
        ]
    },
];

export const experiences = [
    {
        organisation: "Dennis Ivy's Hackathons",
        logo: dennisivy,
        link: "https://dennisivy.com/",
        positions: [
            {
                title: "Participant - October Hackathon 🎃 APIs Edition",
                duration: "Oct 10 2022 - Nov 10 2022",
                link: "https://codebattle.up.railway.app/event/dce4b8cd-b48d-4511-b4d6-b0058c179944/",
                content: [
                    {
                        text: "I learnt a new library 'React' and building API to create an app about developer advocates from Twitter.",
                        link: "https://cados-dev.netlify.com",
                    },
                ],
            },
            {
                title: " Participant - September Hackathon 🍁🍂 Portfolio Edition",
                duration: "Sep 7 2022 - Sep 29 2022",
                link: "https://codebattle.up.railway.app/event/c8101a9d-282b-4d14-9ed6-f9da0f330f70/",
                content: [
                    {
                        text: "I learnt a new framework 'Astro' in a short time and created a portfolio site on it.",
                        link: "https://sergeiu.netlify.com",
                    },
                ],
            },
        ],
    },
    {
        organisation: "Ninjamir",
        logo: ninjamir_logo,
        link: "",
        positions: [
            {
                title: "Developer & Admin",
                duration: "Jun 01 2022 - Dec 01 2022",
                link: "",
                content: [
                    {
                        text: "I have developed 'Ninjamir' to help people to be more motivated. Users can to participate in events called 'Mission' and summarize their time wasted for their goals.",
                        link: "",
                    },
                    {
                        text: "I maintained the project over 7 months and created 6 Missions, 10+ Teams. We have spent over 1500+ hours for our goals.",
                        link: "",
                    },
                ]
            }
        ]
    },
    
];

export const feedback = [
    {
        id: "feedback-1",
        content: "@seriugoose your project Ninjamir was so good. I'm upset that we are no longer participating in missions. I will wait for your new interesting projects.",
        name: "kittycat",
        avatar: "https://pbs.twimg.com/profile_images/1505789705715126272/f_3-0fXL_400x400.jpg",
        url: "https://twitter.com/kk_katya8/status/1599758442482135040",
    }
];

export const socials = [
    {
        id: "socials-1",
        icon: github,
        link: "https://github.com/sergomen", 
    },
    {
        id: "socials-2",
        icon: discord,
        link: "https://discord.gg/DZrZRhsU", 
    },
    {
        id: "socials-3",
        icon: twitter,
        link: "https://twitter.com/seriugoose", 
    },
    {
        id: "socials-4",
        icon: linkedin,
        link: "https://linkedin.com/in/sergei-iu/",
    },
];