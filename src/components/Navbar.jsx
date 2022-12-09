import React from 'react'

import {useState} from 'react';

import { navLinks } from '../constants';
import { logo_dark, logo_light, close, menu } from '../assets';


const Navbar = (props) => {
  const [toogle, setToogle] = useState(false);
  
//   const [darkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);

//   const toogleDarkMode = () => {
//     setTheme(colorTheme)
//     setDarkMode((prev) => !prev)
//   };
  
  return (
    <nav className={`w-full flex py-6 justify-between items-center ${props.darkMode ? "dark" : "light"}`}>
        <img 
            src={props.darkMode ? logo_dark : logo_light} 
            alt="seriu" 
            className="w-[68px] h-[68px] object-contain cursor-pointer pl-[10px]" 
            onClick={props.toggleDarkMode}
        />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white ${props.darkMode ? "dark" : "light"}`}
                >
                    <a href={`#${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
        
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
                src={toogle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px]
                object-contain cursor-pointer"
                onClick={() => setToogle((prev) => !prev)}
            /> 
        </div>
        <div className={`${toogle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}
                        text-white`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar