import { useEffect } from "react";
import { useState } from "react";
import { getAllEvents } from "../../services/api";
import { Container } from "../Container/Container";
import styles from "./Hero.module.css";
import { HeroSwiper } from "./HeroSwiper";

export const Hero = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await getAllEvents();
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);

  return (
    <section>
      <Container>
        <div className={styles.deskFlex}>
          <div>
            <h1 className={styles.title}>
              Learn to Cook <span className={styles.name}>Tasty Treats'</span>{" "}
              Customizable Masterclass
            </h1>
            <p className={styles.text}>
              TastyTreats - Customize Your Meal with Ingredient Options and
              Step-by-Step Video Guides.
            </p>
            <button className={styles.btn} type="button">
              Order now
            </button>
          </div>
          <div className={styles.swiperContainer}>
            <HeroSwiper data={events} />
          </div>
        </div>
      </Container>
    </section>
  );
};
