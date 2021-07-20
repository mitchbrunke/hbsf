import Head from "next/head";
import styles from "../styles/Program.module.css";
import Hero from "../components/Hero";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";
import ProgramItem from "../components/Prog-Slider";

const entertainmentDataQuery = ` *[_type == "entertainment"]{
  name, 
    description,
    image
  } `;

const stallDataQuery = ` *[_type == "stalls"]{
    name, 
      description,
      image,
      link
    } `;

const program = ({ entertainment, stalls, reverse, noReverse }) => {
  return (
    <div className={styles.program}>
      <Head>
        <title> Plan your day | Hervey Bay Seafood Festival 2021 </title>
        <meta
          name="description"
          content="Enjoy local seafood, regional wines, beers and fabulous music at Seafront Oval
        by the seashore."
        />
      </Head>

      <Hero title="Plan your day" />

      <h3>Entertainment</h3>

      <ProgramItem sanityData={entertainment} type={noReverse} />

      <div className={styles.two}>
        <h3>Signature Seafood Stalls</h3>

        <ProgramItem sanityData={stalls} type={reverse} />
      </div>

      {/* <ProgramItem sanityData={entertainment} type={noReverse} /> */}
    </div>
  );
};

export async function getStaticProps() {
  const entertainment = await sanityClient.fetch(entertainmentDataQuery);
  const stalls = await sanityClient.fetch(stallDataQuery);
  return { props: { entertainment, stalls } };
}

export default program;
