import styles from "../styles/Hero.module.css";

const Hero = ({ title }) => {
  return (
    <div className={styles.hero}>
      <h1>{title}</h1>
    </div>
  );
};

export default Hero;
