import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Form.module.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrgrlqra");
  if (state.succeeded) {
    return (
      <p id={styles.success}>
        Thanks for reaching out, we will be in touch shortly!
      </p>
    );
  }
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.nameContainer}>
          <h4>Name</h4>
          <div className={styles.inputName}>
            <label htmlFor="name">First</label>
            <input id={styles.name} type="text" name="First Name" />
          </div>

          <div className={styles.inputName}>
            <label htmlFor="name">Last</label>
            <input id={styles.name} type="text" name="Last Name" />
          </div>
        </div>

        <div className={styles.input}>
          <h4>Email Address</h4>
          <input id={styles.email} type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className={styles.input}>
          <h4>Your Message</h4>
          <textarea id={styles.message} name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
