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
    <section className={styles.home}>
      <CardDisplay
        userData={userData}
        isUpdating={isUpdating}
      />

      <div className={styles.buttons}>
        {(!addingCard && !isUpdating) && (
          <button className={styles.addCardButton} onClick={() => setAddingCard(true)}>Add New Card</button>
        )}
        {(!addingCard && !isUpdating) && (
          <button className={styles.editCardsButton} onClick={() => setIsUpdating(true)}>Edit Cards</button>
        )}
      </div>

      {addingCard && (
        <CardForm 
          setAddingCard={setAddingCard}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </section>
  )
}
