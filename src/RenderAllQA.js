import {useContext} from 'react'
import styles from './mystyle.module.css'; 
import {FavoritesContext} from './contexts/FavoritesContext'

const RenderAllQA = (props) => {
    const [favorites, setFavorites] = useContext(FavoritesContext)
const addToFavorites = () => {
    setFavorites([...favorites, props.arrayOfQuestions[props.currentItemIndex]])
}

const renderAllQA = () => {
    if (props.arrayOfQuestions !== 0 && props.currentItemIndex<props.combinedSelection.length) {
      return (
        <div>
          <h1>Statement:</h1>
          <h1>{props.arrayOfQuestions[props.currentItemIndex]}</h1>
          <button onClick={props.isItCorrect} className={styles.TFButton}>   True   </button>

          <button onClick={props.isItCorrect} className={styles.TFButton}>   False   </button>
          <button onClick= {addToFavorites}>Save to Favorites</button>
        </div>)
    }
  };

return(
<h1>{renderAllQA()}</h1>
)
}

export default RenderAllQA