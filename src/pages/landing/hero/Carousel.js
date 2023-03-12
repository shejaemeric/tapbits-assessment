import React from "react";
import styles from "./carousel.module.scss";

function Carousel({ images, index }) {
  const next = (index + 1) % images.length;
  const prev = (index - 1 + images.length) % images.length;

  return (
    <div id={styles.carousel}>
      <div className="carousel-container">
        <div class="menu-prev-image">
          <img src={images[prev]} alt="menu-item" />
        </div>

        <div class="menu-selected-image">
          <img src={images[index]} alt="menu-item" />
        </div>

        <div class="menu-next-image">
          <p class="menu-item-next-indicator">{"0" + (index + 1)}</p>
          <div class="menu-next-image-container">
            <img src={images[next]} alt="menu-item" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
