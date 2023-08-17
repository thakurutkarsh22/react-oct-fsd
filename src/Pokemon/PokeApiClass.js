import React from "react";

class PokeApiClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonChoice: "pikachu",
      selectedPokemon: null,
    };
  }

  convertJsonToRelevantData(data) {
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

  // ONLY works in MOUNTING phase (THIS IS LIKE USE EFFECT)
  componentDidMount() {
    const { pokemonChoice } = this.state;

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("data debug", data);

        if (!pokemonChoice) {
        } else {
          const convertedData = this.convertJsonToRelevantData(data);

          this.setState((oldState) => {
            return {
              ...oldState,
              selectedPokemon: convertedData,
            };
          });
        }
      });
  }

  // ONLY works in UPDATE phase (THIS IS LIKE USE EFFECT)
  componentDidUpdate(prevProps, prevState) {
    // do not update State here NEVER DO THIS ()

    console.log(prevState, "prevState");
    console.log(this.state, "latest state");

    // WE HAVE TO CHECK THE CONDITION and then UPdate the state....

    if (prevState.pokemonChoice !== this.state.pokemonChoice) {
      const { pokemonChoice } = this.state;
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // console.log("data debug", data);
          if (!pokemonChoice) {
          } else {
            const convertedData = this.convertJsonToRelevantData(data);
            this.setState((oldState) => {
              return {
                ...oldState,
                selectedPokemon: convertedData,
              };
            });
          }
        });
    }
  }

  pokemonSelection(event) {
    const value = event.target.value;
    this.setState((oldState) => {
      return {
        ...oldState,
        pokemonChoice: value,
      };
    });
  }

  render() {
    console.log("render");
    const { selectedPokemon } = this.state;

    return (
      <>
        <div>Select pokemon</div>
        {/* onChange={(event) => pokemonSelection(event)} */}
        <select onChange={(event) => this.pokemonSelection(event)}>
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
}

export default PokeApiClass;
