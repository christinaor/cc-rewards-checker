import { useState } from "react";

import styles from './styles.module.scss';
import CardForm from "../../components/CardForm/CardForm";

import mockCardData from '/mockdata/userData'
import CardDisplay from "../../components/CardDisplay/CardDisplay";

export default function Home(props) {
  // userData - arr of objs with card data
  const [userData, setUserData] = useState(mockCardData);
  // const [userData, setUserData] = useState([]);
  const [addingCard, setAddingCard] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <section className={styles.homeWrapper}>
      <div className={styles.home}>
        <CardDisplay
          userData={userData}
          setUserData={setUserData}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
        />

        <div className={styles.buttons}>
          {(!addingCard && !isUpdating) && (
            <button className={styles.addCardButton} onClick={() => setAddingCard(true)}>Add New Card</button>
          )}
          {(!addingCard && !isUpdating) && (
            <button className={styles.editCardsButton} onClick={() => setIsUpdating(true)}>Edit Cards</button>
          )}

          {isUpdating && (
            <div className={styles.cancelUpdatingButtonWrapper}>
              <button className={styles.cancelUpdatingButton} onClick={() => setIsUpdating(false)}>Cancel Update</button>
            </div>
          )}
        </div>

        {addingCard && (
          <CardForm 
            setAddingCard={setAddingCard}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </div>
    </section>
  )
}
