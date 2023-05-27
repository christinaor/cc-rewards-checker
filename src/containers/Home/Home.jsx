import { useState } from "react";

import styles from './styles.module.scss';
import CardForm from "../../components/CardForm/CardForm";

import mockCardData from '/mockdata/userData'
import CardDisplay from "../../components/CardDisplay/CardDisplay";

export default function Home(props) {
  /**
   *  Fields for MVP
   *  card name
      reward type/categories
      reward percentage
      reward points
   */
  // userData - arr of objs with card data
  const [userData, setUserData] = useState(mockCardData);
  const [addingCard, setAddingCard] = useState(false);

  return (
    <section className={styles.home}>
      <CardDisplay
        userData={userData}
      />

      {!addingCard && <button onClick={() => setAddingCard(true)}>Add New Card</button>}
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
