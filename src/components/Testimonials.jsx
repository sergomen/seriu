import styles from '../style';
import {quotes} from '../assets';
import {feedback} from '../constants';

const FeedbackCard = ({ content, name, avatar, url }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain" />
    <a href={url} target="_blank">
      <p className="font-poppins font-normal text-[18px] leading-[32px] my-10">{content}</p>

      <div className="flex flex-row">
        <img src={avatar} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">{name}</h4>
          {/* <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p> */}
        </div>
      </div>
    </a>
  </div>
)

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm_mb-16 mb-16 relative z-[1]">
    <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[52px] mt-[50px] ss:leading-[72px]">What people are saying about me</h1>
    </div>

    <div className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
    
  </section>
)

export default Testimonials