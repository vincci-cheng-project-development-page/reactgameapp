import { useState, createContext } from "react";

export const FavoritesContext = createContext()

export const FavoritesProvider = (props) => {
    const [favorites, setFavorites] = useState([])

    return (
        <FavoritesContext.Provider value = {[favorites, setFavorites]}> 
            {props.children}
        </FavoritesContext.Provider>
    )
}

