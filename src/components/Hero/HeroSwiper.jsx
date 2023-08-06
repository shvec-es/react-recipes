// import Swiper JS
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Hero.module.css";
import { useRef } from "react";
import { useEffect } from "react";

export const HeroSwiper = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        // Optional parameters
        direction: "horizontal",
        slidesPerView: 0.65,
        loop: true,
        modules: [Pagination],
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        breakpoints: {
          // when window width is >= 375px
          375: {
            slidesPerView: 0.65,
            spaceBetween: 8,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 0.85,
            spaceBetween: 16,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 0.81,
            spaceBetween: 16,
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="swiper" ref={swiperRef}>
      <div className="swiper-wrapper">
        {data.length > 0 &&
          data.map(
            ({
              cook: { name, imgUrl },
              topic: { name: nameTopic, area, previewUrl, imgUrl: imgUrlTopic },
              _id: id,
            }) => (
              <div
                key={id}
                className="swiper-slide"
                style={{ display: "flex", gap: 8 }}
              >
                <div
                  className={styles.cookWrap}
                  style={{ backgroundImage: `url(${imgUrl})` }}
                ></div>
                <div className={styles.topicWrap}>
                  <img src={previewUrl} alt={nameTopic} />
                  <p className={styles.nameTopic}>{nameTopic}</p>
                  <p className={styles.area}>{area}</p>
                </div>
                <div
                  className={styles.dish}
                  style={{ backgroundImage: `url(${imgUrlTopic})` }}
                ></div>
              </div>
            )
          )}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};
