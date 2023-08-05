import { Container } from "../Container/Container";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section>
      <Container>
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
        <div></div>
      </Container>
    </section>
  );
};
