import styles, { layout } from "../style";
import { google, bill, apple } from '../assets'

const Billing = () => {
    return (
        <section id='product' className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImg}`}>
                <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[3] -left-1/2  top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute bottom-0 z-[0] -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient" />
            </div>
            <div className={layout.sectionInfo}>
                <div>
                    <h1 className={styles.heading2}>Easily control your<br className="sm:block hidden" /> billing & invoicing.</h1>
                    <p className={`${styles.paragraph} max-w-[470px] my-6`}>We consider the payment methods you'll offer your customers when you start your business. This is an important part of managing your business cash flow and meeting your customer's needs.</p>
                    <div className="flex justify-start items-center gap-6 mt-5">
                        <img src={google} alt="google Logo" />
                        <img src={apple} alt="apple logo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Billing;