import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";
import Image from "next/image";
import Entertainer from "../components/Entertainer";

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

export default function Home({ pageData, details, entertainment }) {
  return (
    <div className={styles.content}>
      {console.log(entertainment)}
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

          {/* <div className={styles.btn} id={styles.two}>
            <Link href="https://www.eventbrite.com.au/e/hervey-bay-seafood-festival-tickets-157738276431">
              <a target="_blank">
                <button> Buy Tickets</button>
              </a>
            </Link>
          </div> */}
        </div>
      </div>

      <div className={styles.alert}>
        <h3>
          Hervey Bay’s whale festival has been rescheduled to run in September
          this year when it is safe to do so and the current COVID crisis
          impacting Brisbane and the 11 local government areas in the
          South-East, including our close neighbours the Sunshine Coast has
          subsided.
        </h3>
        <p>
          Please note the event is postponed not cancelled, tickets will carry
          over to the event when it is scheduled.If you require a refund please
          contact tickets@fcte.com.au with your booking number.
        </p>
      </div>

      <div className={styles.info}>
        <p></p>
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

        <Link href="https://www.eventbrite.com.au/e/hervey-bay-seafood-festival-tickets-157738276431">
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
        <button>Fraser Coast Events</button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const pageData = await sanityClient.fetch(pageDataQuery);
  const details = await sanityClient.fetch(detailsDataQuery);
  const entertainment = await sanityClient.fetch(entertainmentDataQuery);
  return { props: { pageData, details, entertainment } };
}
