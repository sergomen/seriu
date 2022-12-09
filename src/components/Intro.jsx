import InterestCard from './InterestCard';
import styles, { layout } from '../style';
import { me } from '../assets';
import { interests } from '../constants';

const Intro = () => (
   <section id="intro" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <div className={`flex-1 flex-col ${styles.flexStart} xl:mt-[250px] xl:px-0 sm:px-16 px-6`}>
      <div className={`${styles.flexCenter} items-center justify-between md:my-0 my-10`}>
        <img src={me} alt="me" className={`w-[100%] h-[100%] z-[5] sm:pr-0 xl:pr-40 rounded-[100px]`} />
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0  pink__gradient"  /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" /> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 black__gradient" /> */}
      </div>
    </div>

    <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 xl:mt-[35px] relative w-full`}>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
          <h1 className=" ss:text-[72px] text-[52px] ss:leading-[200px] leading-[75px]">
            <h1 className="mt-[50px] mb-16">
              <span>Introduction </span>
            </h1>
            <h3 className="flex-1 font-poppins font-semibold xs:text-[22px] ss:text-[42px] text-[42px] ss:leading-[52px] leading-[54px]">
              This is <span className="blue">Sergei Iu</span>, 2016 passout hold <span className="pink">Computer Science Engineering</span> from Bauman Moscow State Technical University, Russia. Also, I am a <span className="pink">self taught</span> Full Stack Developer.
            </h3>
          </h1>
          <br />
          <div className="md:flex xl:flex xl:flex xs:flex-1 justify-between">
            {interests.map((card) => (
              <InterestCard key={card.id} {...card} />
            ))}
          
            {/* <div className={`bg-card-green ${styles.flexCenter}  `}>
              <h3 className="font-poppins font-semibold ss:text-[22px] text-[12px] py-4 ss:leading-[70px] leading-[35px]">
                <span className="flex px-2  justify-center">Programming</span>
                <p className="ss:leading-[35px] leading-[35px] w-60 px-2">
                  It helps me to understand complicated things and make life more easy and intersting.
                </p>
              </h3>
            </div>

            <div className={`bg-card-blue ${styles.flexCenter} ml-2 w-60`}>
              <h3 className="font-poppins font-semibold ss:text-[22px] text-[12px] ss:leading-[70px] leading-[35px]">
                <span className="flex justify-center">Strategy</span>
                <p className="ss:leading-[35px] leading-[35px] w-56">
                  Strategy helps people to be focused, analysing, planning and achieving.
                </p>
              </h3>
            </div>

            <div className={`bg-card-red ${styles.flexCenter} ml-2 w-60`}>
              <h3 className="font-poppins font-semibold ss:text-[22px] text-[12px] ss:leading-[70px] leading-[35px]">
                <span className="flex justify-center">Martial Arts</span>
                <p className="ss:leading-[35px] leading-[35px] w-56">
                  Martial Arts make you disciplined, teach never give up and defend what you love.
                </p>
              </h3>
            </div> */}
            
          </div>
        </h1>
        
        <div className=""></div>
        <div className=""></div>
      </div>
    {/* <div className={`flex-1 ${styles.flexStart} flex-col `}>
      <div className={`layout.sectionImgReverse  `}>
      
      </div>
    </div> */}
    
    
      
    
     
    
    {/* This is Sergei Iu, 2016 passout hold Computer Science Engineering from Bauman Moscow State Technical University, Russia. Also, I am a self taught Full Stack Developer.
      <div className={layout.sectionInfo}>
        Introduction222
      </div>
      
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" /> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      </div> */}
   </section>
  )

export default Intro