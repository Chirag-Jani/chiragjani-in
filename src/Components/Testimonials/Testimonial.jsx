import { LeftArrow, RightArrow } from '../../assets/Vectors/global';
import styles from './Testimonial.module.scss';
import { useEffect, useState } from 'react';

const data = [
  {
    id: 0,
    path: '/src/assets/Images/person1.webp',
    name: "William Jacks",
    testimonial: "The service exceeded my expectations in every way possible. I was particularly impressed by the attention to detail and the team's commitment to excellence. Their innovative approach solved problems I didn't even know I had. I'm thoroughly impressed and will definitely be a returning customer!"
  },
  {
    id: 1,
    path: '/src/assets/Images/person2.webp',
    name: "Emily Rodriguez",
    testimonial: "I can't speak highly enough about the quality of work provided. From start to finish, the process was smooth and professional. The team went above and beyond to ensure my satisfaction, often anticipating my needs before I even expressed them. Their expertise and dedication are truly outstanding!"
  },
  {
    id: 2,
    path: '/src/assets/Images/person3.webp',
    name: "Akira Tanaka",
    testimonial: "Working with this team was a game-changer for our project. Their prompt responses and ability to adapt to our changing requirements were impressive. They brought fresh perspectives and innovative solutions that significantly improved our final outcome. I appreciate their professionalism and personable approach throughout our collaboration."
  },
  {
    id: 3,
    path: '/src/assets/Images/person4.webp',
    name: "Sophia Chen",
    testimonial: "I was blown away by the level of expertise and creativity brought to our project. The team's ability to translate our vague ideas into concrete, innovative solutions was remarkable. They were always available to answer questions and provide updates, making the entire process smooth and stress-free. The end result exceeded our wildest expectations!"
  },
  {
    id: 4,
    path: '/src/assets/Images/person5.webp',
    name: "Marcus Adebayo",
    testimonial: "From the initial consultation to the final delivery, every interaction was marked by professionalism and genuine care for our needs. The team's technical skills are top-notch, but what truly sets them apart is their ability to listen and understand our unique challenges. They didn't just meet our requirements; they anticipated future needs and built solutions accordingly. I wholeheartedly recommend their services!"
  }
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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.testimonial_container}>
      <div className={styles.left} onClick={handlePrevious}>
        <LeftArrow />
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={data[selected].path} alt={data[selected].name} />
        </div>
        <div className={styles.text}>
          <div className={styles.name}>
            <p>{data[selected].name}</p>
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