import styles, { layout } from "../style";
import { feedback } from '../constants'
import FeedbackCard from "./FeedbackCard";


const Testimonial = () => {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className="absolute z-[0] w-[50%] h-[60%] rounded-full -right-[30%] md:-right-[50%] blue__gradient" />
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h1 className="text-5xl font-poppins font-semibold text-white leading-[66px]">
                    What people are<br className="sm:block hidden" />
                    saying about us
                </h1>
                <p className={`${styles.paragraph} py-5 max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {
                    feedback.map(card=><FeedbackCard key={card.id} {...card}/>)
                }
            </div>
        </section>
    );
};

export default Testimonial;