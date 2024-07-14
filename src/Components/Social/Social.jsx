import { Brut2 } from '../../assets/Vectors/global';
import styles from './Social.module.scss'

const Social = () => {
  return (
    <div className={styles.social_container}>
      <div className={styles.part1}>
        <div className={styles.heading}>
          Contact Us <Brut2/>
        </div>
      </div>
      <div className={styles.part2}>
        <div className={styles.title}>
          Follow Me
        </div>
        <div className={styles.options}>
          <span><a href="">Twitter</a></span>
          <span><a href="">LinkedIn</a></span>
          <span><a href="">Instagram</a></span>
        </div>

      </div>
      <div className={styles.part3}>
        <div className={styles.title}>
          Lets Work Together
        </div>
        <div className={styles.options}>
          <span><a href="">+91 8980149260</a></span>
          <span><a href="">chiragjani@gmail.com</a></span>
        </div>
      </div>
    </div>
  )
}

export default Social;