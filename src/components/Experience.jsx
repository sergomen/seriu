import styles from '../style';
import {experiences} from "../constants";

const Content = ({text, link}) => {
  return (
    <div className={`font-poppins font-normal text-[14px] mt-4`}>
      <p>
        - {text}{" "} <br />
        {link ? (
          <a href={link} target="_blank" className="text-red-300 hover:text-teal-500">See a project
            {/* <BsLink45Deg
              size="1rem"
              className="inline hover:text-teal-200"
            ></BsLink45Deg> */}
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const ExperienceCard = (props) => {
  return (
    // <motion.div
    // whileInView={{ y: [-20, 0], opacity: [0, 1] }}
    // transition={{ duration: 1 }}
    // >
    <>
      <div className={`flex md:flex-row flex-col  md:my-0 my-10 xl:mt-[35px] relative w-full`}>
      {props.link != "" ? (
          <a href={props.link} target="_blank" className="hover:text-teal-200">
            <img
              src={props.logo}
              alt={props.organisation}
              className="w-[52px] h-[52px] rounded-full z-[2]"
            />
            <h4 className={`font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2 ${props.darkMode == true ? "text-dimWhite" : "text-gray-600"} hover:text-teal-200`}>
                {props.organisation}
            </h4>
          </a>
        ) : (
          <p>
            <img
              src={props.logo}
              alt={props.organisation}
              className="w-[52px] h-[52px] rounded-full z-[2]"
            />
            <h4 className={`font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2 ${props.darkMode == true ? "text-dimWhite" : "text-gray-600"}`}>
              {props.organisation}
            </h4>
          </p>
        )}
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-6">
        {props.positions.map((position, index) => (
          <li
            className={`${
              index === props.positions.length - 1 ? "mb-0" : "mb-4"
            } ml-4`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold dark:text-white">
              {position.title}
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {position.link ? (
                <a href={position.link} target="_blank" className="text-red-500 hover:text-teal-200">
                {position.duration}
                </a>
              ) : (
                <>
                <h3 className="text-red-600">
                  {position.duration}
                </h3>
                </>
              )}
              
            </time>
            {position.content.map((info, index) => (
              <Content index={index} {...info} />
            ))}
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </li>
        ))}
      </ol>
      </>
    //</motion.div> 
  );
};

const Experience = () => (
  <section id="experience" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm_mb-16 mb-16 relative z-[1]">
      <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] mt-[50px] ss:leading-[100px] leading-[75px]`}>Experience</h1>
    </div>

    <div className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}>
      {experiences.map((exp, index) => (
        <ExperienceCard index={index} {...exp} />
      ))}
    </div>
  </section>
)

export default Experience