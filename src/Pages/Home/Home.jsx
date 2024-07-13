import Hero from '../../Components/Hero/Hero'
import Industry from '../../Components/Industry/Industry'
import Intro from '../../Components/Intro/Intro'
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div className={styles.home_container}>
      <Hero />
      <Intro/>
      <Industry/>
    </div>
  )
}

export default Home