import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import { sanityClient, urlFor } from "../lib/sanity";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Program.module.css";
import cn from "classnames";

const ProgramItem = ({ sanityData, type }) => {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1500,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {sanityData.map((single) => (
          <div
            key={single.name}
            className="keen-slider__slide {(sanityData.indexOf(single) + `1`).slice(1)}"
          >
            <div
              //   className={cn({
              //     [styles.single]: type === "noReverse",
              //     [styles.singleReverse]: type === "Reverse",
              //   })}
              className={styles.single}
            >
              <div className={styles.img}>
                <img
                  src={urlFor(single.image).width(500).height(300).url()}
                  alt={single.name}
                />
              </div>
              <div className={styles.text}>
                <h3>{single.name}</h3>

                <p>{single.description[0].children[0].text}</p>

                {single.link ? (
                  <>
                    <Link href={single.link}>
                      <a target="_blank">
                        <button>More Info</button>
                      </a>
                    </Link>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProgramItem;
