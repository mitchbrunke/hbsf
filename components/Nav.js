import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <div className={styles.top}>
        <ul>
          <Link href="https://www.visitfrasercoast.com/">
            <a>
              <li> Visit Fraser Coast</li>
            </a>
          </Link>

          <Link href="http://www.fcte.com.au/Events/Signature-Events">
            <a>
              <li> Stall Holder Info</li>
            </a>
          </Link>
        </ul>
      </div>

      <div className={styles.nav}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <img
                  src="/hervey-bay-seafood-fesitval-logo.svg"
                  alt="hbsf logo"
                ></img>
              </a>
            </Link>
          </div>

          <div className={styles.nav_list}>
            <ul>
              <Link href="/">
                <a>
                  <li> Home </li>
                </a>
              </Link>
              <Link href="/program">
                <a>
                  <li> Plan your day </li>
                </a>
              </Link>

              <Link href="/contact">
                <a>
                  <li> Contact</li>
                </a>
              </Link>
            </ul>
          </div>

          <div className={styles.btn}>
            <Link href="https://www.eventbrite.com.au/e/hervey-bay-seafood-festival-tickets-157738276431">
              <a target="_blank">
                <button>Tickets</button>
              </a>
            </Link>
          </div>
          <div id={styles.teq}>
            <img
              id={styles.teq_logo}
              src="/Its-Live-in-Queensland.png"
              alt=""
            />
          </div>
        </div>
        <div className={styles.mobile} onClick={(e) => setNavOpen(!navOpen)}>
          <img src="/menu.svg" alt="" />

          {navOpen && (
            <div
              className={styles.container}
              onClick={(e) => setNavOpen(!navOpen)}
            >
              <img id={styles.close} src="close.svg" alt="" />
              <ul>
                <Link href="/">
                  <a>
                    <li> Home </li>
                  </a>
                </Link>
                <Link href="/program">
                  <a>
                    <li> Program</li>
                  </a>
                </Link>

                <Link href="/contact">
                  <a>
                    <li> Contact</li>
                  </a>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
