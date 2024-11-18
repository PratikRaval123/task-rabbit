import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import Satisfactions from "./components/Satisfactions";
import HowItWorks from "./components/HowItWorks";
import SliderComponent from "./components/SliderComponent";
import PopulerProject from "./components/PopulerProject";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <SliderComponent />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <PopulerProject />
        <Stats />
        {/* <Business /> */}
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        <Testimonials />
        <Satisfactions />
        <Clients />
        <HowItWorks />
        {/* <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
