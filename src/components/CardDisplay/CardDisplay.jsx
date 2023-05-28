import { useState } from "react";

import styles from './styles.module.scss';

export default function CardDisplay({ userData = [], setUserData, isUpdating, setIsUpdating }) {
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    id: null,
    category: '',
    percentage: '',
    points: '',
  });

  const handleUpdateCard = (card) => {
    setSelectedCard({
      id: card.id,
      category: card.category,
      percentage: (card.percentage ? card.percentage : ''),
      points: (card.points ? card.points : ''),
    });
    setIsEditingCard(true);
  }

  const handleCancelEditing = () => {
    setIsEditingCard(false);
    setSelectedCard({
      id: null,
      category: '',
      percentage: '',
      points: '',
    });
  }

  const handleDeleteCard = (id) => {
    const updatedCards = userData.filter(card => card.id !== id);
    setUserData(updatedCards);
  }

  const handleSubmitUpdate = (e, selectedCard) => {
    e.preventDefault();

    console.log(selectedCard)

    // const updatedCards = userData.reduce((accumulator, card) => {
    //   if (card.id === selectedCard.id) {
    //     card.category = selectedCard.category;
    //     card.percentage = (selectedCard.percentage ? selectedCard.percentage : null);
    //     card.points = (selectedCard.points ? selectedCard.points : null);
    //   }
    //   accumulator.push(card);

    //   return accumulator;
    // }, []);
    // console.log(updatedCards)

    // setUserData(updatedCards);
    // setIsEditingCard(false);
    // setIsUpdating(false);
    // setSelectedCard({
    //   id: null,
    //   category: '',
    //   percentage: '',
    //   points: '',
    // });
  }

  return (
    <div className={styles.cardDisplay}>
      <h2 className={styles.cardDisplayTitle}>{!isUpdating ? 'Current Cards' : 'Select a Card to Update'}</h2>

      <div className={`${isUpdating ? styles.updatingList : ''} ${styles.cardDisplayList}`}>
        {userData.length > 0 && userData.map((card, index) => (
          <div key={`card-item-${index}`} className={`${isUpdating ? styles.updatingItem : ''} ${styles.cardDisplayItem}`}>
            <h3 className={styles.cardDisplayName}>{card.name}</h3>

            <div className={styles.cardDisplayDetails}>
              {!isEditingCard && (
                <div>
                  <div>{card.category}</div>
                  {card.percentage && <div>{card.percentage}%</div>}
                  {card.points && <div>{card.points} pts</div>}
                </div>
              )}
              
              {isEditingCard && card.id === selectedCard.id && (
                <form>
                  <label htmlFor="category">Category:</label>
                  <input 
                    name="category" 
                    type="text"
                    value={selectedCard.category} 
                    onChange={(e) => setSelectedCard({...selectedCard, category: e.target.value})}
                    required
                  />

                  <label htmlFor="percentage">Percentage:</label>
                  <input 
                    name="percentage" 
                    type="number"
                    value={selectedCard.percentage} 
                    onChange={(e) => setSelectedCard({...selectedCard, percentage: e.target.value})}
                  />

                  <label htmlFor="points">Points:</label>
                  <input 
                    name="points" 
                    type="number"
                    value={selectedCard.points} 
                    onChange={(e) => setSelectedCard({...selectedCard, points: e.target.value})}
                  />
                </form>
              )}

              {isUpdating && (
                <div className={styles.buttons}>
                  {!isEditingCard && (
                    <button onClick={() => handleUpdateCard(card)}>Update</button>
                  )}
                  {!isEditingCard && (
                    <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
                  )}
                  
                  {isEditingCard && card.id === selectedCard.id && (
                    <button onClick={(e) => handleSubmitUpdate(e, card)}>Submit</button>
                  )}
                  {isEditingCard && card.id === selectedCard.id && (
                    <button onClick={handleCancelEditing}>Cancel</button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

