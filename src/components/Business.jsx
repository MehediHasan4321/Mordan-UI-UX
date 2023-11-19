import styles, { layout } from "../style";
import { features } from '../constants'
import Button from "./Button";
import FeatureCard from "./FeatureCard";
const Business = () => {
    return (
        <section id="features" className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>You do the business,<br className="sm:block hidden" />we'll handle the money.</h2>
                <p className={`${styles.paragraph} max-w-[470px] my-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button style={'mt-5'}/>
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {
                    features.map((item,index)=><FeatureCard key={item.id} {...item} index={index}/>)
                }
            </div>
        </section>
    );
};

export default Business;