import { Brut2 } from '../../assets/Vectors/global';
import styles from './Stats.module.scss';


const Stats = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsWrapper}>
        <div className={styles.statsText}>
          <h3>
            <Brut2 />
            <br />
            Stats
          </h3>
          <p>Crafting innovative solutions, delivering exceptional experiences, and building a brighter future.</p>
          <h5>
          </h5>
        </div>
        <div className={styles.statsEmployee}>
          <h1>15+</h1>
          <p>Fabulous Masterpiece aka <span>Projects</span> Carfted</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;