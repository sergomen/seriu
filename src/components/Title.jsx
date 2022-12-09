import React from 'react'
import { title} from '../assets';
import styles from "../style";
import Button from "./Button";

const Title = () => (
  <section id="title" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-gradient rounded-[10px] mb-2">
        <p className={`${styles.padding} ml-0 `}>
          Hello
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
        <span>I'm </span>
        <span className="blue">Seriu</span>, 
          <span className="pink ss:leading-[12px] leading-[15px]" > FULL STACK WEB DEVELOPER</span>
          <h3 className="flex-1 font-poppins font-semibold ss:text-[22px] text-[12px] ss:leading-[32px] leading-[25px]">
          I passionate about programming, make decision & building creative and useful apps.
          </h3>
        </h1>
        {/* <img src={title} alt="title" className={`ss:w-[70%] w-[100%] ss:h-[50%] h-[100%] relative z-[5]`}/> */}
      </div>
      
    </div>
    
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={title} alt="title" className="w-[100%] h-[80%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient"  />
        
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 black__gradient" /> */}
    </div>
  </section>
)

export default Title