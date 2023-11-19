import styles from "../style";
import {arrowUp} from '../assets'
const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
            <div className={`${styles.flexStart} flex-col bg-primary w-[100%] h-[100%] p-[2px] rounded-full`}>
                <div className={`flex flex-col gap-2 items-center justify-center w-full h-full`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] flex items-center justify-center gap-1">
                         <span className="text-gradient">Get</span>
                        <img src={arrowUp} alt="arrow" className="w-[24px] h-[24px]" />
                    </p>
                    <p className="text-gradient font-poppins font-medium text-[18px] leading-[23px]">Started</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;