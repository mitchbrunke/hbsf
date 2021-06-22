import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div>
      <h2 id={styles.support}>Our Supporters</h2>
      <div className={styles.sponsors}>
        <img src="/fcte.png" alt="" />
        <img id={styles.fcrc} src="/fcrc.png" alt="" />
      </div>
      <hr className={styles.grey_wobble} />

      <div className={styles.logo}>
        <img src="/hervey-bay-seafood.svg" alt="" />
      </div>

      <div className={styles.btm}>
        <p>&copy; 2021 Hervey Bay Seafood Festival</p>
        <p>| Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
