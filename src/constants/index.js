import {loopka, lifevent, arcanist, ifo, blog, habites, linear_regression, portfolio, cados, ninjamir, spectro, tico} from "../assets";
import {loopka_video, lifevent_video, arcanist_video, ifo_video, habites_video, portfolio_video, cadosdev_video, ninjamir_video, spectrohelper_video, tico_video} from "../assets";
import {hacktoberfest2023_logo, dennisivy_logo, ninjamir_logo} from "../assets";
import {github, twitter, linkedin} from '../assets';

import {
    SiNextdotjs,
    SiReact,
    SiJavascript,
    
    SiVite,
    
    SiCss3,
    SiCssmodules,
    SiBootstrap,
    SiTailwindcss,
    
    SiMarkdown,
    SiHtml5,

    SiJupyter,
    SiNumpy,
    SiScipy,
    SiDjango,
    SiPython,
    SiOpencv,
    SiPandas,
    SiFlask,

    SiMongodb,
    SiMongoose,
    SiPrisma,
    SiFauna,
    SiPostgresql,
    SiGooglesheets,

    SiFirebase,

    SiVercel,
    SiAuth0,

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
        content: "It helps me understand complicated things and make my life better.",
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
        id: "projects-12",
        index: 12,
        date: "Dec 27 2023 - Dec 30 2023",
        title: "Loopka",
        description: "Loopka is an application that allows you to track the loops of habits without memorizing and using manual work. It's a modification of the zachOS-tech's application.",
        image: loopka,
        video: loopka_video,
        github: "",
        url: "https://looper.vercel.app/",
        stack: [
            {
                id: "icon-1",
                icon: SiJavascript,
                name: "Vanilla Javascript"
            },
            {
                id: "icon-2",
                icon: SiCss3,
                name: "CSS3"
            },
            {
                id: "icon-3",
                icon: SiHtml5,
                name: "Html5"
            },
        ]
    },
    {
        id: "projects-11",
        index: 11,
        date: "Nov 29 2023 - Jan 01 2023",
        title: "Lifevent",
        description: "Lifevent is a calendar of your life events. It helps you remember the most important events.",
        image: lifevent,
        video: lifevent_video,
        github: "",
        url: "https://lifevent.vercel.app/",
        stack: [
            {
                id: "icon-1",
                icon: SiNextdotjs,
                name: "Next.js"
            },
            {
                id: "icon-2",
                icon: SiCssmodules,
                name: "Cssmodules"
            },
            {
                id: "icon-3",
                icon: SiMongodb,
                name: "Mongodb"
            },
            {
                id: "icon-4",
                icon: SiPrisma,
                name: "Prisma"
            },
        ]
    },
    {
        id: "projects-10",
        index: 10,
        date: "Oct 31 2023 - Nov 16 2023",
        title: "Arcanist",
        description: "The Community of Collectible Card Games (CCG) and Strategy",
        image: arcanist,
        video: arcanist_video,
        github: "",
        url: "https://arcanist.vercel.app/",
        stack: [
            {
                id: "icon-1",
                icon: SiNextdotjs,
                name: "Next.js"
            },
            {
                id: "icon-2",
                icon: SiCssmodules,
                name: "SiCssmodules"
            },
            {
                id: "icon-3",
                icon: SiMongodb,
                name: "Mongodb"
            },
            {
                id: "icon-4",
                icon: SiPrisma,
                name: "Prisma"
            },
            {
                id: "icon-5",
                icon: SiFirebase,
                name: "Firebase"
            },
        ]
    },
    {
        id: "projects-9",
        index: 9,
        date: "Jun 23 2023 - Oct 04 2023",
        title: "IFO",
        description: "IFO (I Focus On) is a service for achieving a priority goal by accumulating the number of hours of productive work. It's an improved version of Habites.",
        image: ifo,
        video: ifo_video,
        github: "",
        url: "https://ifo.vercel.app/",
        stack: [
            {
                id: "icon-1",
                icon: SiNextdotjs,
                name: "Next.js"
            },
            {
                id: "icon-2",
                icon: SiTailwindcss,
                name: "TailwindCSS"
            },
            {
                id: "icon-3",
                icon: SiMongodb,
                name: "Mongodb"
            },
            {
                id: "icon-4",
                icon: SiMongoose,
                name: "Mongoose"
            },
        ]
    },
    {
        id: "projects-8",
        index: 8,
        date: "Mar 12 2023 - Jun 26 2023",
        title: "Blog",
        description: "At some point I wanted to write articles and tell people how I dealt with them. I used SSR and Markdown to solve the problem.",
        image: blog,
        video: "",
        github: "https://github.com/sergomen/blog",
        url: "https://seriu.vercel.app/",
        stack: [
            {
                id: "icon-1",
                icon: SiNextdotjs,
                name: "Next.js"
            },
            {
                id: "icon-2",
                icon: SiMarkdown,
                name: "Markdown"
            },
            {
                id: "icon-3",
                icon: SiTailwindcss,
                name: "TailwindCSS"
            },
            {
                id: "icon-4",
                icon: SiVercel,
                name: "Vercel"
            },
        ]
    },
    {
        id: "projects-7",
        index: 7,
        date: "Feb 1 2023 - Feb 7 2023",
        title: "Habites",
        description: "Habites is an application about what was being done and how much spending time on it. It is my first full-stack web application on Next.js.",
        image: habites,
        video: habites_video,
        github: "https://github.com/sergomen/habites",
        url: "https://habites.netlify.app/",
        stack: [
            {
                id: "icon-1",
                icon: SiNextdotjs,
                name: "Next.js"
            },
            {
                id: "icon-2",
                icon: SiTailwindcss,
                name: "TailwindCSS"
            },
            {
                id: "icon-3",
                icon: SiFauna,
                name: "Fauna"
            },
            {
                id: "icon-4",
                icon: SiAuth0,
                name: "Auth0"
            }
        ]
    },
    {
        id: "projects-6",
        index: 6,
        date: "Jan1 2023 - Jan 5 2023",
        title: "Linear Regression",
        description: "I studied the basics of data analysis based on search linear regression.",
        image: linear_regression,
        video: "",
        github: "https://github.com/sergomen/linear-regression",
        url: "",
        stack: [
            {
                id: "icon-1",
                icon: SiJupyter,
                name: "Jupyter"
            },
            {
                id: "icon-2",
                icon: SiNumpy,
                name: "Numpy"
            },
            {
                id: "icon-3",
                icon: SiPandas,
                name: "Pandas"
            },
            {
                id: "icon-4",
                icon: SiScipy,
                name: "Scipy"
            }
        ]
    },
    {
        id: "projects-5",
        index: 5,
        date: "Dec 9 2022 - Dec 31 2022",
        title: "Portfolio",
        description: "This is my portfolio website based on React to represent myself and my skills.",
        image: portfolio,
        video: portfolio_video,
        github: "https://github.com/sergomen/seriu",
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
        id: "projects-4",
        index: 4,
        date: "Oct 23 2022 - Nov 5 2022",
        title: "Cados.dev",
        description: "The application represents developer advocates from Twitter. It helps people to find their advocate through name, technologies, company. It works via CORS in conjunction with application of another developer via Twitter API. But it looks like the author removed his app.",
        image: cados,
        video: cadosdev_video,
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
        date: "Jun 01 2022 - Nov 28 2022",
        title: "Ninjamir",
        description: "The app based on Django is a game about goals achievement and time management. Ninjamir makes people to be more productive. Ninjamir is a game where users divide into teams of 1-4 people and gain productive hours.",
        image: ninjamir,
        video: ninjamir_video,
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
        id: "projects-2",
        index: 2,
        date: "Jul 28 2022 - Aug 5 2022",
        title: "Spectro-Helper",
        description: "This project is dedicated to the famous collectible card game 'Spectromancer'. The application reads information from the screen and allows the player to better plan the strategy without holding enemy cards in his head.",
        image: spectro,
        video: spectrohelper_video,
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
        id: "projects-1",
        index: 1,
        date: "Apr 21 2022 - Dec 26 2022",
        title: "Tico",
        description: "Tico, written in Flask, provides information from Google Sheets in a more comfortable format and lets users put data into tables. Tico is one of the parts for the game with time-management like Ninjamir.",
        image: tico,
        video: tico_video,
        github: "https://github.com/sergomen/tico",
        url: "",
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
        organisation: "Hacktoberfest 2023",
        logo: hacktoberfest2023_logo,
        link: "https://hacktoberfest.com/",
        positions: [
            {
                title: "sameer1612/tiers-of-joy",
                duration: "Oct 17 2023 - Oct 28 2023",
                link: "https://github.com/sameer1612/tiers-of-joy",
                content: [
                    {
                        text: "Add Import and Export JSON functionality #10: I was introduced to Redux and writing/reading data to a local file.",
                        link: "https://github.com/sameer1612/tiers-of-joy/pull/10",
                    },
                ]
            },
            {
                title: "lcrojano/Giphy_Explorer",
                duration: "Oct 22 2023 - Oct 28 2023",
                link: "https://github.com/lcrojano/Giphy_Explorer",
                content: [
                    {
                        text: "Add light/dark mode #35: I added a light/dark mode when you press a button and did it in Vanilla JS.",
                        link: "https://github.com/lcrojano/Giphy_Explorer/pull/35",
                    },
                    {
                        text: "Improve fixed scroll with animation #43: I improved fixed scroll and added new animations there.",
                        link: "https://github.com/lcrojano/Giphy_Explorer/pull/43",
                    },
                ]
            },
            {
                title: "PEC-CSS/acm-fun",
                duration: "Oct 18 2023 - Oct 30 2023",
                link: "https://github.com/PEC-CSS/acm-fun",
                content: [
                    {
                        text: "Change Navbar #31: I added a Navbar and made it animated using CSS styles.",
                        link: "https://github.com/PEC-CSS/acm-fun/pull/31",
                    },
                    {
                        text: "Add logo for acm-fun #56: I used my design skills and created a logo.",
                        link: "https://github.com/PEC-CSS/acm-fun/pull/56",
                    },
                ]
            }
        ]
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
    {
        organisation: "Dennis Ivy's Hackathons",
        logo: dennisivy_logo,
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
        icon: linkedin,
        link: "https://linkedin.com/in/sergei-iu/",
    },
    {
        id: "socials-3",
        icon: twitter,
        link: "https://twitter.com/seriugoose", 
    },
];