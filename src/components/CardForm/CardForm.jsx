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
    // benefits: [],
    category: '',
    percentage: '',
    points: '',
  });
  // const [cardBenefit, setCardBenefit] = useState({
  //   category: '',
  //   percentage: '',
  //   points: '',
  // });
  const [dropdownCategories, setDropdownCategories] = useState([
    'restaurant',
    'entertainment',
    'gaming',
  ]);

  const handleAddCard = (e) => {
    e.preventDefault();

    console.log('Added card')
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
    <div>
      <div>Add A Card:</div>
    
      <form>
        <div>
          <label htmlFor="card-name">Card Name</label>
          <input 
            name="card-name" 
            type="text" 
            value={cardForm.name} 
            onChange={(e) => setCardForm({...cardForm, name: e.target.value})} required 
          />
        </div>

        <div>
          <label htmlFor="card-categories">Category</label>
          <input 
            name="card-categories" 
            type="text" 
            value={cardForm.category} 
            onChange={(e) => setCardForm({...cardForm, category: e.target.value})} required 
          />
        </div>

        <div>
          <label htmlFor="card-percentage">Percentage</label>
          <input 
            name="card-percentage" 
            type="text" 
            value={cardForm.percentage} 
            onChange={(e) => setCardForm({...cardForm, percentage: e.target.value})} required 
          />
        </div>

        <div>
          <label htmlFor="card-points">Points</label>
          <input 
            name="card-points" 
            type="number" 
            value={cardForm.points} 
            onChange={(e) => setCardForm({...cardForm, points: e.target.value})} required 
          />
        </div>

        <div>
          <button onClick={handleAddCard}>Add Card</button>
          <button onClick={() => setAddingCard(false)}>Cancel</button>
        </div>
        
      </form>
    </div>
  )

}