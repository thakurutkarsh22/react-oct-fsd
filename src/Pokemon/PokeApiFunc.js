import React, { useEffect, useState } from "react";

function PokeApiFun() {
  // update phase
  console.log("rendering debug");

  const [pokemonChoice, setPokemonChoice] = useState("pikachu");
  //   console.log("pokemonChoice debug", pokemonChoice);

  const [selectedPokemon, setSelectedPokemon] = useState();

  //   console.log("selectedPokemon", selectedPokemon);

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`;

  function convertJsonToRelevantData(data) {
    if (!data && !data.id) {
      return [];
    }
    const { id, name, weight, height, abilities } = data;

    const abilityString = abilities
      .map((ability) => {
        return ability.ability.name;
      })
      .join(", ");

    return {
      id,
      name,
      weight,
      height,
      abilityString,
    };
  }

  //   fetch , LocalStorage operations, (anything blocking the UI)
  useEffect(() => {
    console.log("fetch data");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("data debug", data);

        if (!pokemonChoice) {
        } else {
          const convertedData = convertJsonToRelevantData(data);

          setSelectedPokemon(convertedData);
        }
      });

    //   CLEANUP function
    return () => {
      // UPDATE and UNMOUNTING PHASE...
      // cleanup function (this will work ONLY in UNMOUNTING PHASE)

      console.log("unmounting");
    };
  }, [pokemonChoice, url]);

  // // Flavour 1: (NEVER USE THIS OTHERWISE YOU WILL BE IN INFINITE LOOP)
  // useEffect(() => {

  // })

  // // Flavour 2:
  // useEffect(() => {

  // }, [])

  // // Flavour 3 :
  // useEffect(() => {

  // }, [pokemonChoice])

  function pokemonSelection(event) {
    const value = event.target.value;
    setPokemonChoice(value);
  }

  return (
    <>
      <div>Select pokemon</div>

      <select onChange={(event) => pokemonSelection(event)}>
        <option value="">Select an option</option>

        <option value="ditto">DITTO</option>
        <option value="bulbasaur">BULBASAUR</option>
        <option value="pikachu">PIKACHU</option>
      </select>

      {/* Card  */}

      <div
        style={{ width: "500px", height: "90px", border: "1px solid black" }}
      >
        <div>Name: {selectedPokemon ? selectedPokemon.name : ""}</div>
        <div>height: {selectedPokemon?.height}</div>
        <div>wieght: {selectedPokemon?.weight}</div>
        <div>abilities: {selectedPokemon?.abilityString}</div>
      </div>
    </>
  );
}

export default PokeApiFun;
