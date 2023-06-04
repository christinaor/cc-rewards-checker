import { useState } from "react";

import styles from './styles.module.scss';

export default function CardForm({ setAddingCard, userData, setUserData }) {
  /**
   *  Fields for MVP
   *  card name
      reward type/categories
      reward percentage
      reward points
   */  
  const [cardForm, setCardForm] = useState({
    name: '',
    category: '',
    percentage: '',
    points: '',
  });

  const handleAddCard = (e) => {
    e.preventDefault();

    const postCard = async () => {
      if (true) {
        const updatedUserData = [...userData];
        updatedUserData.push({...cardForm});
        setUserData(updatedUserData);
        setCardForm({
          name: '',
          category: '',
          percentage: '',
          points: '',
        });
        setAddingCard(false);
      }
    }

    postCard();
  }

  return (
    <div className={styles.cardForm}>
      <h2>Add A Card:</h2>
    
      <form className={styles.addCardForm}>
        <div className={styles.addCardFormField}>
          <label htmlFor="card-name" className={styles.addCardFormLabel}>Card Name</label>
          <input 
            className={styles.addCardFormInput}
            name="card-name" 
            type="text" 
            value={cardForm.name} 
            onChange={(e) => setCardForm({...cardForm, name: e.target.value})} required 
          />
        </div>

        <div className={styles.addCardFormField}>
          <label htmlFor="card-categories" className={styles.addCardFormLabel}>Category</label>
          <input 
            className={styles.addCardFormInput}
            name="card-categories" 
            type="text" 
            value={cardForm.category} 
            onChange={(e) => setCardForm({...cardForm, category: e.target.value})} required 
          />
        </div>

        <div className={styles.addCardFormField}>
          <label htmlFor="card-percentage" className={styles.addCardFormLabel}>Percentage</label>
          <input 
            className={styles.addCardFormInput}
            name="card-percentage" 
            type="text" 
            value={cardForm.percentage} 
            onChange={(e) => setCardForm({...cardForm, percentage: e.target.value})} required 
          />
        </div>

        <div className={styles.addCardFormField}>
          <label htmlFor="card-points" className={styles.addCardFormLabel}>Points</label>
          <input 
            className={styles.addCardFormInput}
            name="card-points" 
            type="number" 
            value={cardForm.points} 
            onChange={(e) => setCardForm({...cardForm, points: e.target.value})} required 
          />
        </div>

        <div className={styles.addCardFormButtons}>
          <button onClick={handleAddCard}>Add Card</button>
          <button onClick={() => setAddingCard(false)}>Cancel</button>
        </div>
        
      </form>
    </div>
  )

}