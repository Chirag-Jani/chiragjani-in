import Hero from '../../Components/Hero/Hero'
import Industry from '../../Components/Industry/Industry'
import Intro from '../../Components/Intro/Intro'
import Stats from '../../Components/Stats/Stats'
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div className={styles.home_container}>
      <Hero />
      <Intro/>
      <Industry/>
      <Stats/>
    </div>
  )
}

export default Home