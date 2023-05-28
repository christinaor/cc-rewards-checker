import { useState } from "react";

import styles from './styles.module.scss';

export default function CardDisplay({ userData = [], isUpdating }) {
  return (
    <div className={styles.cardDisplay}>
      <h2 className={styles.cardDisplayTitle}>Current Cards</h2>

      <div className={`${isUpdating ? styles.updating : ''} ${styles.cardDisplayList}`}>
        {userData.length > 0 && userData.map((card, index) => (
          <div key={`card-name-${index}`} className={styles.cardDisplayItem}>
            <h3 className={styles.cardDisplayName}>{card.name}</h3>

            <div className={styles.cardDisplayDetails}>
              <div>{card.category}</div>
              {card.percentage && <div>{card.percentage}%</div>}
              {card.points && <div>{card.points} pts</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

