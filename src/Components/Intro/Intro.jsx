import styles from './Intro.module.scss';
import footerDown from '../../assets/footer-down.svg';
import { useState } from 'react';

const Intro = () => {

  const [isOn, setIsOn] = useState(true);

  const handleToggle = (e) => {
    setIsOn(e.target.checked);
  };

  return (
    <div className={styles.introSection}>
      <div className={styles.introWrapper}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col4}>
              <div className={styles.switchRight}>
                <div className={styles.overflowHidden}>
                  <h1 data-aos="fade-left">Why</h1>
                </div>
                <div className={styles.overflowHidden}>
                  <h1 data-aos="fade-left">to hire</h1>
                </div>
                <div className={styles.overflowHidden}>
                  <h1 data-aos="fade-left">me?</h1>
                </div>

                <div className={styles.introArrow}>
                  <div className={styles.introImg}>
                    <img src={footerDown} alt="Footer Down" />
                  </div>
                  <div>
                    <label className={styles.switch}>
                      <input
                        type="checkbox"
                        checked={isOn}
                        onChange={handleToggle}
                      />
                      <span className={`${styles.slider} ${styles.round} ${styles.hideOff}`}></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col7}>
              <div className={styles.introDetails} data-aos="fade-right">
                <p className={`${styles.activeTitle} ${isOn ? styles.activeContent : ''}`}>
                  I'm not just a coder, I'm a <span>digital architect</span> in the world of blockchain. My keyboard is my chisel, and <span>distributed ledgers</span> are my canvas. I don't just write smart contracts; I craft <span>decentralized dreams</span> into reality. Every line of code I write is a step towards a future where <span>trust is programmed</span> and middlemen are obsolete.
                </p>
                <p className={`${styles.activeTitle} ${isOn ? styles.activeContent : ''}`}>
                  My passion? <span>Unraveling the complexities</span> of blockchain and weaving them into elegant, efficient solutions that even my grandma could use (well, almost).
                </p>
                <p className={`${styles.activeTitle} ${isOn ? styles.activeContent : ''}`}>
                  <span>Believe it or not,</span> I've been mining ideas since before <span>Ethereum was a twinkle</span> in Vitalik's eye. If that doesn't scream "blockchain veteran," I don't know what does. My commit history is longer than most blockchains!
                </p>
                <p className={`${styles.activeTitle} ${isOn ? styles.activeContent : ''}`}>
                  Sure, my approach might raise a few eyebrows. I <span>debug with rubber ducks</span> and occasionally talk to my plants about consensus algorithms. But hey, it works! I've yet to meet a blockchain puzzle I couldn't solve, even if it means <span>dreaming in Solidity</span>.
                </p>
                <p className={`${styles.activeTitle} ${isOn ? styles.activeContent : ''}`}>
                  <span>#CryptoWizard,</span> not your average code monkey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;