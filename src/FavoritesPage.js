import { useState, useContext } from "react";
import {FavoritesContext} from './contexts/FavoritesContext'

const FavoritesPage = (props) => {
    //const [newlyLiked, setNewlyLiked] = setState([])
    const [favorites, setFavorites] = useContext(FavoritesContext)
  
    favorites.forEach((fav) =>
    console.log(`Item: ${fav}`))

    const renderFav = () => { return(
      favorites.forEach((fav) => <h1>{fav}</h1>))
    }

    const removeFromFavorites = () => {
      
    }
    return (
    
      <div>
        <br />
        <br />
        <div>{favorites[0]}</div>
        <br />
        <div>{favorites[1]}</div>
        <br />
        <div>{favorites[2]}</div>
        <br />
        <div>{favorites[3]}</div>
        <br />
        <div>{favorites[4]}</div>
        <br />
        <div>{favorites[5]}</div>
        <br />
        <div>{favorites[6]}</div>
        <br />
        <div>{favorites[7]}</div>
        <br />
        <div>{favorites[8]}</div>
        <br />
        <div>{favorites[9]}</div>
        <br />
        <div>{favorites[10]}</div>
        <br />
        <div>{favorites[11]}</div>
        {renderFav()}
      </div>
    )
  }
  
export default FavoritesPage

