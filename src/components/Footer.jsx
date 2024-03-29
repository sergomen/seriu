import styles from '../style';

const current_year = new Date().getFullYear();
const Footer = () => (
    <section id="footer" className={`${styles.paddingY}`}>
        <div className={`flex md:flex-row flex-col ${styles.flexCenter} md:my-0 my-10 xl:mt-[5px] relative w-full`}>

            <div className={`flex-2 justify-between items-center w-full`}>
                <h1 className="font-poppins font-semibold text-center ss:text-[12px] text-[12px] ss:leading-[20px] leading-[15px]">
                    <span>Designed and developed by seriu</span>
                </h1>
            </div>

            <div className={`flex-2 justify-between items-center w-full text-right`}>
                <h1 className="font-poppins font-semibold text-center ss:text-[12px] text-[12px] ss:leading-[20px] leading-[15px]">
                    <span>Copyright 2022 - {current_year}. All rights reserved.</span>
                </h1>
            </div>

            <div className={`flex-1 justify-between items-center w-full text-right`}>
                {/* <h1 className="font-poppins font-semibold text-center ss:text-[12px] text-[12px] ss:leading-[20px] leading-[15px]"> */}
                    <a href="#top"><span>Ꙟ</span></a>
                {/* </h1> */}
            </div>
        </div>
    </section>
)

export default Footer