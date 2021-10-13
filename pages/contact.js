import ContactForm from "../components/Form";
import Hero from "../components/Hero";
import styles from "../styles/contact.module.css";

const contact = () => {
  return (
    <div>
      <Hero title="Contact" />
      <div className={styles.contact_block}>
        <p>
          {" "}
          For any enquires contact the Hervey Bay Visitor Information centre on
          <strong> 1800 811 728</strong>.
        </p>
      </div>
      <h3 id={styles.contact}>Contact Us</h3>
      <ContactForm />
    </div>
  );
};

export default contact;
