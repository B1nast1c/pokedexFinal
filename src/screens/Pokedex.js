import React, { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemonsList, setPokemons] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
          favorite: false
        });
      }

      setPokemons([...pokemonsList, ...pokemonsArray]);
      setFilterData([...pokemonsList, ...pokemonsArray]);

    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
      <PokemonList
        pokemons={pokemonsList}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
        filterData={filterData}
        setFilterData={setFilterData}
        valor={true}
        load={load}
      />
    </>
  );
}
