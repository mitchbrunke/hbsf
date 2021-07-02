import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import styles from "../styles/Home.module.css";
import { sanityClient, urlFor } from "../lib/sanity";
import { useEffect, useState, useRef } from "react";

const Entertainer = ({ entertainment }) => {
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
        {entertainment.map((single) => (
          <>
            <div
              key={single.name}
              className="keen-slider__slide {(entertainment.indexOf(single) + `1`).slice(1)}"
            >
              <div className={styles.entertainer}>
                <div className={styles.img}>
                  <img
                    src={urlFor(single.image).width(500).height(300).url()}
                    alt={single.name}
                  />
                </div>
                <div className={styles.single_entertainer}>
                  <h3>{single.name}</h3>

                  <p>{single.description[0].children[0].text}</p>
                </div>
              </div>
            </div>
          </>
        ))}

        {/* <div className="keen-slider__slide number-slide1">
          <div className={styles.entertainer}>
            <div className={styles.img}>
              <img
                src={urlFor(entertainment[0].image).width(500).url()}
                alt={entertainment[0].name}
              />
            </div>
            <div className={styles.single_entertainer}>
              <h3>{entertainment[0].name}</h3>

              <p>{entertainment[0].description[0].children[0].text}</p>
            </div>
          </div>
        </div> */}

        {/* <div className="keen-slider__slide number-slide2">
          <div className={styles.entertainer}>
            <div className={styles.img}>
              <img
                src={urlFor(entertainment[0].image).width(500).url()}
                alt={entertainment[0].name}
              />
            </div>
            <div className={styles.single_entertainer}>
              <h3>{entertainment[0].name}</h3>

              <p>{entertainment[0].description[0].children[0].text}</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Entertainer;
