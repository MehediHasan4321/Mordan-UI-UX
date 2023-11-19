import styles from "./style";
import { Billing, Business, CTA, CardDeal, Client, Footer, Hero, Navbar, Stats, Testimonial } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexStart}${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  );
};

export default App;