import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";
import Image from "next/image";

const pageDataQuery = `*[_type == "home"]{
  heading,
  description,
    image,
    When,
    admission,
    parking
  }`;

export default function Home({ pageData }) {
  return (
    <div className={styles.content}>
      {console.log(pageData)}
      <Head>
        <title>Hervey Bay Seafood Festival 2021</title>
        <meta
          name="description"
          content="Enjoy local seafood, regional wines, beers and fabulous music at Seafront Oval
        by the seashore."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>
        <h1>{pageData[0].heading}</h1>

        <div className={styles.btn_container}>
          <div className={styles.btn}>
            <Link href="https://www.facebook.com/FraserCoastEvents">
              <a target="_blank">
                <button>Social Updates</button>
              </a>
            </Link>
          </div>

          <div className={styles.btn} id={styles.two}>
            <Link href="https://www.eventbrite.com.au/e/hervey-bay-seafood-festival-tickets-157738276431">
              <a target="_blank">
                <button> Buy Tickets</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h3>{pageData[0].description[0].children[0].text}</h3>
      </div>
      <hr />
      <div className={styles.details_container}>
        <h2>Festival Details</h2>
        <div className={styles.details}>
          <div className="When">
            <h3>When & Where</h3>
            <p>{pageData[0].When[0].children[0].text}</p>
          </div>

          <div className="admission">
            <h3>Admission</h3>
            <p>{pageData[0].admission[0].children[0].text}</p>
          </div>

          <div className="parking">
            <h3>Admission</h3>
            <p>{pageData[0].parking[0].children[0].text}</p>
          </div>
        </div>

        <Link href="https://www.eventbrite.com.au/e/hervey-bay-seafood-festival-tickets-157738276431">
          <a target="_blank">
            <button>Tickets Details</button>
          </a>
        </Link>
      </div>

      <div className={styles.entertainment}>
        <h2>Festival Entertainment</h2>
        <div className={styles.entertainer}>
          <div className={styles.img}>
            <img src="/michael-waugh.jpg" alt="" />
          </div>
          <div className={styles.single_entertainer}>
            <h3>Coming Soon</h3>
            <p>
              The great entertainmnet you have come to know and expect will be
              returning to the Hervey Bay Seafood Festival in 2021 with the
              lineup to be announced late June.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.vfc}>
        <h1>Keep up to date with Fraser Coast Events</h1>
        <button>Fraser Coast Events</button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const pageData = await sanityClient.fetch(pageDataQuery);
  return { props: { pageData } };
}
