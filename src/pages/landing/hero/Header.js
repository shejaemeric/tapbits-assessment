import React from "react";
import styles from "./header.module.scss";

function Header() {
  return (
    <div id={styles.header}>
      <div class="logo">
        <img src="./assets/icons/logo.svg" alt="logo" />
      </div>
      <div class="nav-links">
        <div class="single-link single-link-selected">Home</div>
        <div class="single-link">Menu</div>
        <div class="single-link">Services</div>
        <div class="single-link">Map</div>
        <div class="single-link">About</div>
      </div>
      <div class="hamburger-menu">
        <img src="./assets/icons/menu.svg" alt="hamburger" />
      </div>
    </div>
  );
}

export default Header;
