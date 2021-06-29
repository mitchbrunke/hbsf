import Head from "next/head";
import styles from "../styles/Program.module.css";
import Hero from "../components/Hero";

const program = () => {
  return (
    <div className={styles.program}>
      <Head>
        <title> Program | Hervey Bay Seafood Festival 2021 </title>
        <meta
          name="description"
          content="Enjoy local seafood, regional wines, beers and fabulous music at Seafront Oval
        by the seashore."
        />
      </Head>

      <Hero title="Program" />

      <h3>The program will be announced soon!</h3>
    </div>
  );
};

export default program;
