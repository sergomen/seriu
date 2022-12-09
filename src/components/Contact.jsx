import styles from '../style';

import {socials} from '../constants';


const Contact = () => (
  <section id="contact" className={`${styles.paddingY}`}>
    <div className={`flex md:flex-row flex-col ${styles.flexCenter} md:my-0 my-10 xl:mt-[35px] relative w-full  text-center border-2 border-rose-200`}>
      <div className="absolute z-[0] w-[60%] h-[100%] top-0  blue__gradient"  />
      <div className={`flex-1 justify-between items-center w-full`}>
        <h1 className="font-poppins font-semibold ss:text-[52px] text-[42px] xs:mb-30 ss:leading-[100px] leading-[75px]">
          <span>Let's Talk</span>
        </h1>
      </div>

      <div className={`flex-1 justify-between items-center w-full z-[1]`}>
        <h1 className="font-poppins font-semibold  ss:text-[52px] text-[42px]  ss:leading-[25px] leading-[20px] xs:mb-30  ">
          <span className="">Write Me</span><br />
          <span className="font-poppins font-semibold ss:text-[22px] text-[12px]">msgusagoose@gmail.com</span>
        </h1>
      </div>

      <div className={`flex-1 justify-between items-center w-full z-[6]`}>
        <h1 className="font-poppins font-semibold ss:text-[52px] text-[42px] ss:leading-[45px] leading-[30px]">
          <span>Socials</span>
          
            <div  className="flex flex-row justify-center items-center ">
            {socials.map((social) => (
              <div key={social.id} className="mr-2">
                <a href={social.link} target="_blank">
                  <img src={social.icon} alt={social.name} />
                </a>
              </div>
              ))}
            </div>

        </h1>
      </div>

    </div>
  </section>
)

export default Contact