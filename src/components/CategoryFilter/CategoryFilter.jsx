import { useState } from "react";

// import categories from '/mockdata/categoriesData';

import styles from './styles.module.scss';

export default function CategoryFilter({ categories, setCategories, currentCategory, setCurrentCategory }) {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleDropdownClick = (e) => {
    e.preventDefault();

    if (e.target.innerText !== 0) {
      setCurrentCategory(e.target.innerText)
    } else {
      setCurrentCategory('all')
    }
    setToggleDropdown(false);
  }

  return (
    <div className={styles.categoryFilter}>
      {/* <div className={styles.filterText}>Category Filter:</div> */}
      <div className={`${toggleDropdown ? styles.toggledDropdown : ''} ${styles.displayCategory}`} onClick={() => setToggleDropdown(!toggleDropdown)}>{currentCategory}</div>

      {toggleDropdown && (
        <ul className={styles.categoryList}>
          <li key={`category-all`} className={styles.categoryItem} onClick={(e) => {setCurrentCategory(e.target.innerText)}}>all</li>
          {categories?.map(category => (
            <li key={`category-${category}`} className={styles.categoryItem} onClick={(e) => handleDropdownClick(e)}>{category}</li>
          ))}
        </ul>
      )}
    </div>
  )

}