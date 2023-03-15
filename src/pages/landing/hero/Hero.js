import React, { useState } from "react";
import Carousel from "./Carousel";
import Description from "./Description";
import Header from "./Header";
import HeroFooter from "./HeroFooter";
import styles from "./hero.module.scss";

export default function Hero() {
  const [index, setIndex] = useState(1);
  const images = [
    "./assets/images/food-3.png",
    "./assets/images/food-1.png",
    "./assets/images/food-2.png",
  ];
  const handleClickPrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const handleClickNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div id={styles.hero}>
      <Header />
      <div class="main-section">
        <div class="desc">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit
          </p>
        </div>
        <Carousel images={images} index={index} />
      </div>
      <div class="footer">
        <Description />
        <HeroFooter
          handleNext={handleClickNext}
          handlePrev={handleClickPrev}
          selected={index}
        />
      </div>
    </div>
  );
}
