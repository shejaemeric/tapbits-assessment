import React from "react";
import styles from "./description.module.scss";
function Description() {
  return (
    <div id={styles.description}>
      <div>
        <p className="menu-item-subtitle">
          Lorem ipsum dolor sit amet, consetetur.
        </p>
        <p className="menu-item-title">Lorem ipsum</p>
      </div>
    </div>
  );
}

export default Description;
