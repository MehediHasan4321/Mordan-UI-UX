import styles from '../style';
import { stats } from '../constants'

const Stats = () => {
    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap justify-between sm:mb-20 mb-6`}>
            {
                stats.map(item => <div key={item.id} className='flex flex-row m-3 justify-start items-center '>
                    <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{item.value}</h4>
                    <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-4'>{item.title}</p>
                </div>)
            }
        </section>
    );
};

export default Stats;