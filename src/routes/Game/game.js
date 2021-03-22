import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/pokemonCard";
import database from "../../service/firebase";

import s from "./style.module.css";

const GamePage = ({ onChangeGameState, pokemons }) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/");
  };

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  });

  const [pokemonID, setPokemonID] = useState("");
  const [pokemonsArr, setPokemons] = useState({});

  const newPokemon = {
    abilities: ["keen-eye", "tangled-feet", "big-pecks"],
    stats: {
      hp: 63,
      attack: 60,
      defense: 55,
      "special-attack": 50,
      "special-defense": 50,
      speed: 71,
    },
    type: "flying",
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    name: "newPokemon",
    base_experience: 122,
    height: 11,
    id: 17,
    values: {
      top: "A",
      right: 2,
      bottom: 7,
      left: 5,
    },
  };

  const pokemonClickHandler = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = true;
        }

        database.ref("pokemons/" + item[0]).set(pokemon);
        console.log(item[0], item[1], pokemon, pokemonsArr);

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
  };

  const pokemonAddHandler = (newPokemon) => {
    const newKey = database.ref().child("pokemons").push().key;
    database.ref("pokemons/" + newKey).set(newPokemon);

    setPokemons((prevState) => {
      const newPokemonArr = Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        acc[item[0]] = pokemon;
        return acc;
      }, {});
      newPokemonArr.newKey = newPokemon;
      return newPokemonArr;
    });
  };

  return (
    <div>
      This game page!
      <button onClick={clickHandler}>Вернуться на стартовую страницу</button>
      <button onClick={() => pokemonAddHandler(newPokemon)}>
        Добавить нового покемона
      </button>
      <div className={s.flex}>
        {Object.entries(pokemonsArr).map(
          ([key, { name, type, img, id, values, active }]) => (
            <PokemonCard
              key={key}
              id={id}
              name={name}
              type={type}
              img={img}
              values={values}
              isActive={active}
              pokemonCardRotate={pokemonClickHandler}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GamePage;
