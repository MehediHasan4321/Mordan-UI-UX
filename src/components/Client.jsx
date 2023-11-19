import styles from "../style";
import {clients} from '../constants'

const Client = () => {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter}flex-wrap w-full justify-between items-center`}>
                {
                    clients.map(item=><div key={item.id}>

                        <img src={item.logo} alt="logo" className="sm:w-[190px] w-[100px] object-contain cursor-pointer" />
                    </div>)
                }
            </div>
        </section>
    );
};

export default Client;