import React from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useState } from "react";

export default function FavoritesComponent({ children }) {
    const [pokemons, setPokemons] = useState([]); //Modificar los elementos que se hagan favs

    const setList = (list) => {
        setPokemons(list)
    }

    const addPokemon = (pokemon) => {
        setPokemons(pokemons => [... new Set(pokemons), pokemon])
    }

    const removePokemon = (pokemon) => {
        var idx = pokemons.indexOf(pokemon)
        setPokemons(
            ([
                ...pokemons.slice(0, idx),
                ...pokemons.slice(idx + 1, pokemons.length)
            ])
        )
    }

    return (
        <FavoritesContext.Provider
            value={{
                pokemons, setList, addPokemon, removePokemon
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}