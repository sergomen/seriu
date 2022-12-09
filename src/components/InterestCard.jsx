import styles  from '../style';

const InterestCard = ({ title, content, bgcolor }) => (
    <div key={title} className={`${bgcolor} ${styles.flexCenter} mr-4 flex flex-col relative`}>
        <h3 className="font-poppins font-semibold ss:text-[22px] text-[12px] py-4 ss:leading-[70px] leading-[35px]">
            <span className="flex px-2  justify-center">{title}</span>
            <p className="ss:leading-[35px] leading-[35px] w-60 px-2">
                {content}
            </p>
        </h3>
    </div>
)

export default InterestCard