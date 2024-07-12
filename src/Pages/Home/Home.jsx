import Hero from '../../Components/Hero/Hero'
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div className={styles.home_container}>
      <Hero />
    </div>
  )
}

export default Home