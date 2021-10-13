//imports

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";
import Image from "next/image";
import Entertainer from "../components/Entertainer";

//Sanity data groc query - add new ones here, waaayyy neater than doing it inside the fetch

const pageDataQuery = `*[_type == "home"]{
  heading,
  description,
    image,
    When,
    admission,
    parking
  }`;

const detailsDataQuery = ` *[_type == "details"]{
    heading, 
      description
    }`;

const entertainmentDataQuery = ` *[_type == "entertainment"]{
  name, 
    description,
    image
  } `;

const ticketDataQuery = `*[_type == "tickets"]{
  link
}`;

//make sure sanity data is passed as props

export default function Home({ pageData, details, entertainment, tickets }) {
  let ticketLink = tickets[0].link;
  return (
    <div className={styles.content}>
      {/* SEO updates here - add to Sanity */}
      <Head>
        <title> Hervey Bay Seafood Festival </title>
        <meta
          name="description"
          content="Enjoy local seafood, regional wines, beers and fabulous music at Seafront Oval
        by the seashore."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Actual page content  */}

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
            <Link href={`${ticketLink}`}>
              <a target="_blank">
                <button> Buy Tickets</button>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.i_logo}>
          <Image
            src="/hervey-bay-seafood-fesitval-logo.svg"
            alt="hbsf logo"
            width={200}
            height={200}
            layout="intrinsic"
            className={styles.i_logo}
          />
        </div>

        <div className={styles.i_logo}>
          <Image
            src="/hervey-bay-seafood.svg"
            alt="hbsf logo"
            width={200}
            height={200}
            layout="intrinsic"
            object-position="50% 50%"
          />
        </div>
        <h3>{pageData[0].description[0].children[0].text}</h3>
      </div>
      <hr />
      <div className={styles.details_container}>
        <h2>Festival Details</h2>

        <div className={styles.details}>
          {details.map((detail) => (
            <div key={detail.heading}>
              <h3>{detail.heading}</h3>
              <p>{detail.description[0].children[0].text}</p>
            </div>
          ))}
        </div>

        <Link href={`${ticketLink}`}>
          <a target="_blank">
            <button>Tickets Details</button>
          </a>
        </Link>
      </div>

      <div className={styles.entertainment}>
        <h2>Festival Entertainment</h2>

        <Entertainer entertainment={entertainment} />

        <Link href="/program">
          <a>
            <button>All Entertainment</button>
          </a>
        </Link>
      </div>

      <div className={styles.vfc}>
        <h1>Keep up to date with Fraser Coast Events</h1>
        <Link href="https://www.facebook.com/FraserCoastEvents">
          <a target="_blank">
            <button>Fraser Coast Events</button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const pageData = await sanityClient.fetch(pageDataQuery);
  const details = await sanityClient.fetch(detailsDataQuery);
  const entertainment = await sanityClient.fetch(entertainmentDataQuery);
  const tickets = await sanityClient.fetch(ticketDataQuery);
  return { props: { pageData, details, entertainment, tickets } };
}
