import styles,{layout} from "../style";
import Button from "./Button";
import {card} from '../assets'


const CardDeal = () => {
    return (
        <section id='product' className={`${layout.section}`}>
             <div className={layout.sectionInfo}>
                <div>
                    <h1 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps</h1>
                    <p className={`${styles.paragraph} max-w-[470px] my-6`}>We've been researching and comparing credit cards for over 15 years. You can easily compare more than 270 Australian credit cards using our free tools. When you find one that suits, we'll take you securely to the bank's website.</p>
                    <Button/>
                </div>
            </div>
            <div className={`${layout.sectionImg}`}>
                <img src={card} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
               
            </div>
           
        </section>
    );
};

export default CardDeal;