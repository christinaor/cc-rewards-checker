import { useState } from "react";

import styles from './styles.module.scss';

export default function CardDisplay({ userData = [] }) {
  return (
    <div className={styles.cardDisplay}>
      <h2>Current Cards</h2>

      {userData.length > 0 && userData.map((card, index) => (
        <div key={`card-name-${index}`}>
          <div>{card.name}</div>
        </div>
      ))}
    </div>
  )
};

