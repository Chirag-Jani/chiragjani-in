import { useState, useEffect } from 'react';
import styles from './Calendy.module.scss';

const Calendy = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = (error) => {
      console.error('Failed to load Calendly widget:', error);
      setIsLoaded(false);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.calendy_container}>
      <div className={styles.heading}>
        Lets Hop onto a Call and Discuss...
      </div>
      <div
        className={`calendly-inline-widget ${styles.container0}`}
      data-url="https://calendly.com/chiragjani?background_color=111111&text_color=ffffff"
      style={{ minWidth: "450px", height: "775px", background: "#6464ff" }}
      />
      {!isLoaded && <div>Loading Calendly widget...</div>}
    </div>
  );
};

export default Calendy;