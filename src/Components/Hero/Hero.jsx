import { Brut1, Call, Instagram, LinkedIn, Mail, Twitter } from '../../assets/Vectors/global';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero_container}>

      <div className={styles.header}>
        <div className={styles.brutalist_icon}> <Brut1 /> </div>
        <h1>Chirag Jani</h1>
        <h2>The Last Blockchain Developer You`ll ever need.</h2>
      </div>

      <div className={styles.socials}>
        <div className={styles.social_icon}><Twitter /></div>
        <div className={styles.social_icon}><Instagram /></div>
        <div className={styles.social_icon}><LinkedIn /></div>
        <div className={styles.social_icon}><Call /></div>
        <div className={styles.social_icon}><Mail /></div>
      </div>

    </div>
  )
}

export default Hero