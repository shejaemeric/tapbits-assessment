import React from "react";
import styles from "./heroFooter.module.scss";
function HeroFooter({ handleNext, handlePrev, selected }) {
  return (
    <div id={styles.footer}>
      <div class="carousel-counter-container">
        <div class="carousel-counter">
          {[0, 1, 2, 3, 4].map((index) => (
            <p
              class={
                index === selected
                  ? "selected-bottom-indicator"
                  : "bottom-indicator"
              }
            >
              {"0" + (index + 1)}
            </p>
          ))}
        </div>
      </div>
      <div class="carousel-nav">
        <div class="carousel-nav-icon" onClick={handlePrev}>
          <img src="./assets/icons/arrow-left.svg" alt="allow-left" />
        </div>
        <div class="carousel-nav-icon" onClick={handleNext}>
          <img src="./assets/icons/arrow-right.svg" alt="allow-right" />
        </div>
      </div>
      <div class="social-icons">
        <img src="./assets/icons/tiktok.svg" alt="tiktok" />
        <img src="./assets/icons/instagram.svg" alt="instagram" />
        <img src="./assets/icons/twitter.svg" alt="twitter" />
        <img src="./assets/icons/facebook.svg" alt="facebook" />
      </div>
    </div>
  );
}

export default HeroFooter;
