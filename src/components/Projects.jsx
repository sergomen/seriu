import styles from '../style';
import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";

import {projects} from '../constants';

const TechIcon = ({id, index, icon, name}) => (
    <div className="flex flex-col">
    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
            
                <div
                  key={id}
                  index={index}
                  className="mr-5 text-[20px] hover:text-teal-200 tooltip"
                >
                  {React.createElement(icon)}
                  <span class="tooltiptext">{name}</span>
                </div>
              
            
          </p>
  </div>
)

const ProjectCard = ({ index, title, description, image, github, url, stack }) => (
  <>
  <div className={`flex ${index % 2 !== 0 ? 'md:flex-row' : 'md:flex-row-reverse'}  flex-col ${styles.flexCenter} md:my-0 my-10 xl:mt-[35px] relative w-full`}>
    <div  className={`flex-1 ${index % 2 !== 0 ? 'text-left' : 'text-right'} justify-between items-center w-full `}>
      
      <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[42px] mt-[50px] ss:leading-[72px]">
        {title}
      </h1>
      <h3 className="flex-1 font-poppins font-semibold xs:text-[12px] ss:text-[16px]  lg:text-[22px] xl:text-[22px] xs:leading-[22px] ss:leading-[22px] ;md:leading-[24px] lg:leading-[24px] xl:leading-[44px]">
        {description} <br />

        {/* {github} {url} */}
        <br />
        <div className={`flex  ${index % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          {stack?.map((tech, index) => (
            <TechIcon key={tech.id} index={index} {...tech} />
          ))}
        </div>
  
        <div className={`flex mt-2 mb-2 ${index % 2 !== 0 ? 'flex-row -mx-2' : 'flex-row-reverse mx-3'}`}>
        {github ? (
          <a href={github} target="_blank">
            <AiFillGithub
              size="2rem"
              className="text-blue mr-1 hover:text-teal-200"
            ></AiFillGithub>
          </a>
        ) : (
          ""
        )}
        {url ? (
          <a href={url} target="_blank">
            <BsLink45Deg
              size="2rem"
              className="text-blue hover:text-teal-200"
            ></BsLink45Deg>
          </a>
        ) : (
          ""
        )}
        </div>
      </h3>
    </div>
        
  
  <div className={`flex-1 ${styles.flexCenter} items-center justify-between md:my-0 my-10 relative border-2 border-rose-600`}>
    <img src={image} alt="{image}" className={`w-[100%] h-[100%] z-[5] sm:pr-0 `} />
    {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient"  /> */}
    {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" /> */}
    {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 black__gradient" /> */}
  </div>
  </div>
  </>    
)

const Projects = () => (
  <section id="projects" className={` ${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <h1 className="flex-1 md:flex-row flex-col w-full flex font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] ss:text-center mt-[50px] mb-0">
      <span>Projects</span>
    </h1>

      {projects.map((project, index) => (
        <ProjectCard key={project.id} index={index} {...project} />
      ))}
    
  </section>
)

export default Projects