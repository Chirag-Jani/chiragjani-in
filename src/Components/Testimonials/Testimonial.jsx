import { LeftArrow, RightArrow } from "../../assets/Vectors/global";
import styles from "./Testimonial.module.scss";
import { useEffect, useState } from "react";

// import person1 from "../../assets/Images/person1.webp";
// import person2 from "../../assets/Images/person2.webp";
// import person3 from "../../assets/Images/person3.webp";
// import person4 from "../../assets/Images/person4.webp";
// import person5 from "../../assets/Images/person5.webp";

import AstroApesFeedback from "../../assets/feedback_videos/feedback_AstroApes.mp4";
import Matteo from "../../assets/feedback_images/ilu_matteo.png";

const data = [
  {
    id: 0,
    isPhoto: true,
    path: Matteo,
    name: "Matteo Sama",
    testimonial:
      "To be honest, I am not sure how to react on this one 😂. We worked on a launch of a Token and Presale development on various chains including Binance Smart Chain and Ethereum Mainnet. This shows my work and the connection I build with the projects and the people I work with.",
  },
  {
    id: 1,
    isPhoto: false,
    videoSrc: AstroApesFeedback,
    name: "Mr. Tyree Finley",
    designation: "CEO (AstroApes)",
    testimonial:
      "Here's the feedback from my recent client, whose project involved creation of Custom SPL token on Solana Blockchain using RUST for their future token launch.",
  },
];

const Testimonial = () => {
  const [selected, setSelected] = useState(0);

  const handlePrevious = () => {
    setSelected((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setSelected((prev) => (prev + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % data.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.testimonial_container}>
      <div className={styles.left} onClick={handlePrevious}>
        <LeftArrow />
      </div>

      <div className={styles.content}>
        <div className={styles.image}>
          {data[selected].isPhoto ? (
            <img src={data[selected].path} alt={data[selected].name} />
          ) : (
            <video
              id={styles.videoFb}
              className={styles.content}
              loop
              // autoPlay
              controls
            >
              <source src={data[selected].videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
        <div className={styles.text}>
          <div className={styles.name}>
            <p>{data[selected].name}</p>
          </div>
          <div className={styles.designation}>
            <p>{data[selected].designation}</p>
          </div>
          <div className={styles.desc}>
            <p>{data[selected].testimonial}</p>
          </div>
        </div>
      </div>
      <div className={styles.right} onClick={handleNext}>
        <RightArrow />
      </div>
    </div>
  );
};

export default Testimonial;
