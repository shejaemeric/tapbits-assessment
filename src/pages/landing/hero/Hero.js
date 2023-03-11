import React, { useState } from "react";

export default function Hero() {
  const [selectedItem, setSelectedItem] = useState(1);
  const [order, setOrder] = useState([0, 1, 2]);

  const handlePrev = () => {
    const updatedOrder = order.slice();
    updatedOrder.unshift(updatedOrder[2]);
    updatedOrder.splice(3, 1);
    setOrder(updatedOrder);
    console.log(order);
  };

  const handleNext = () => {
    const updatedOrder = order.slice();
    updatedOrder.push(updatedOrder[0]);
    updatedOrder.splice(0, 1);
    setOrder(updatedOrder);
  };

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
          <div class="single-link-selected">Home</div>
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
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      {/* =============================================================================================== */}
      <div class="carousel">
        {order.map((item) => {
          if (item === order[1]) {
            return (
              <div class="menu-item">
                <div class="menu-selected-image">
                  <img src={menu[item].image} alt={menu[item].alt} />
                </div>
              </div>
            );
          } else if (item === order[2]) {
            return (
              <div class="menu-item">
                <div class="menu-next-image">
                  <div class="menu-next-image-container">
                    <img src={menu[item].image} alt={menu[item].alt} />
                  </div>

                  <p class="menu-item-next-indicator">
                    {"0" + (menu[item].id + 1)}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div class="menu-item">
                <div class="menu-image">
                  <img src={menu[item].image} alt={menu[item].alt} />
                </div>
              </div>
            );
          }
        })}
      </div>
      {/* =============================================================================================== */}
      <div class="menu-description">
        <p class="menu-item-subtitle">
          Lorem ipsum dolor sit amet, consetetur.
        </p>
        <p class="menu-item-title">Lorem ipsum</p>
      </div>
      {/* =============================================================================================== */}
      <div class="bottom-element">
        <div class="carousel-counter-container">
          <div class="carousel-counter">
            {[0, 1, 2, 3, 4].map((index) => (
              <p
                class={
                  index === order[2]
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
          <div class="carousel-nav-icon" onClick={handleNext}>
            <img src="./assets/icons/arrow-left.svg" alt="allow-right" />
          </div>
          <div class="carousel-nav-icon" onClick={handlePrev}>
            <img src="./assets/icons/arrow-right.svg" alt="allow-left" />
          </div>
        </div>
        <div class="social-icons">
          <img src="./assets/icons/tiktok.svg" alt="tiktok" />
          <img src="./assets/icons/instagram.svg" alt="instagram" />
          <img src="./assets/icons/twitter.svg" alt="twitter" />
          <img src="./assets/icons/facebook.svg" alt="facebook" />
        </div>
      </div>
    </div>
  );
}
