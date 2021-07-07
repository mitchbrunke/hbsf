import Head from "next/head";
import styles from "../styles/Program.module.css";
import Hero from "../components/Hero";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";

const entertainmentDataQuery = ` *[_type == "entertainment"]{
  name, 
    description,
    image
  } `;

const program = ({ entertainment }) => {
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

      {entertainment.map((single) => (
        <div key={single.name} className={styles.single}>
          <div className="image">
            {console.log(single)}
            <img
              src={urlFor(single.image).width(540).height(300).url()}
              alt={single.name}
            />
          </div>
          <div className={styles.text}>
            <h4>{single.name}</h4>
            <p>{single.description[0].children[0].text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const entertainment = await sanityClient.fetch(entertainmentDataQuery);
  return { props: { entertainment } };
}

export default program;
