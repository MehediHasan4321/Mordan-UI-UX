import {quotes} from '../assets'
import styles from '../style';

const FeedbackCard = ({content,name,title,img}) => {
    return (
        <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-0 my-5 feedback-card'>
            <img src={quotes} alt='quotes' className='w-[42px] h-[27px] object-contain'/>
            <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

            <div className='flex items-center'>
                <img src={img} alt="pepole" className='w-[48px] h-[48px] rounded-full' />
                <div className='flex flex-col ml-4'>
                    <h1 className='text-xl font-semibold text-white'>{name}</h1>
                    <p className={`${styles.paragraph} font-normal`}>{title}</p>
                </div>
            </div>
        </div>
    
    );
};

export default FeedbackCard;