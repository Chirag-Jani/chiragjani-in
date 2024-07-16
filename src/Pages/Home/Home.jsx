import Calendy from "../../Components/Calendy/Calendy";
import Contact from "../../Components/Contact/Contact";
import Department from "../../Components/Departments/Department";
import Hero from "../../Components/Hero/Hero";
import Industry from "../../Components/Industry/Industry";
import Intro from "../../Components/Intro/Intro";
import Social from "../../Components/Social/Social";
import Stats from "../../Components/Stats/Stats";
import Testimonial from "../../Components/Testimonials/Testimonial";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Hero />
      <Intro />
      <Department />
      <Industry />
      <Stats />
      {/* <Testimonial /> */}
      {/* <Contact /> */}
      <Calendy />
      <Social />
    </div>
  );
};

export default Home;
