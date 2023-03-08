import React, { useState } from "react";

export default function Hero() {
  const [selectedItem, setSelectedItem] = useState(1);
  const menu = [
    {
      id: 0,
      title: "Lorem Ipsum elementum urna0",
      subtitle: "Lorem Ipsum ro scelerisque",
      image: "./assets/images/food-3.png",
      alt: "food-item",
    },
    {
      id: 1,
      title: "Nisl vitae posuere1",
      subtitle: "pellentesque nunc",
      image: "./assets/images/food-1.png",
      alt: "food-item",
    },
    {
      id: 2,
      title: "Lorem Ipsum posuere et2",
      subtitle: "Lorem Ipsum Aliquam iacul",
      image: "./assets/images/food-2.png",
      alt: "food-item",
    },
  ];

  return (
    <div id="hero">
      <div class="header">
        <div class="logo">
          <img src="./assets/icons/logo.svg" alt="logo" />
        </div>
        <div class="nav-links">
          <div class="single-link">Home</div>
          <div class="single-link">Menu</div>
          <div class="single-link">Services</div>
          <div class="single-link">Map</div>
          <div class="single-link">About</div>
        </div>
        <div class="hamburger-menu">
          <img src="./assets/icons/menu.svg" alt="hamburger" />
        </div>
      </div>
      {/* =============================================================================================== */}
      <div class="desc">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      {/* =============================================================================================== */}
      <div class="carousel">
        {menu.map((item) => {
          if (item.id === selectedItem) {
            return (
              <div class="menu-item">
                <div class="menu-selected-image">
                  <img src={item.image} alt={item.alt} />
                </div>
                <p class="menu-item-subtitle">{item.subtitle}</p>
                <p class="menu-item-title">{item.subtitle}</p>
              </div>
            );
          } else if (item.id === selectedItem + 1) {
            return (
              <div class="menu-item">
                <div class="menu-next-image">
                  <img src={item.image} alt={item.alt} />
                  <p class="menu-item-next-indicator">
                    {item.id < 10 ? "0" + item.id : item.id}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div class="menu-item">
                <div class="menu-image">
                  <img src={item.image} alt={item.alt} />
                </div>
              </div>
            );
          }
        })}
      </div>
      {/* =============================================================================================== */}
      <div class="bottom-element">
        <div class="carousel-counter"></div>
        <div class="carousel-nav">
          <div class="carousel-nav-icon">
            <img src="./assets/icons/arrow-left.svg" alt="allow-right" />
          </div>
          <div class="carousel-nav-icon">
            <img src="./assets/icons/arrow-right.svg" alt="allow-left" />
          </div>
        </div>
        <div class="social-icons">
          <div class="single-social-icon">
            <img src="./assets/icons/tiktok.svg" alt="tiktok" />
            <div class="single-social-icon">
              <img src="./assets/icons/instagram.svg" alt="instagram" />
            </div>
            <div class="single-social-icon">
              <img src="./assets/icons/twitter.svg" alt="twitter" />
            </div>
            <div class="single-social-icon">
              <img src="./assets/icons/facebook.svg" alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
