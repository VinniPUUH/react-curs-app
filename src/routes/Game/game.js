import { useState } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/pokemonCard";

import s from "./style.module.css";

const GamePage = ({ onChangeGameState, pokemons }) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push("/");
  };

  const [pokemonID, setPokemonID] = useState("");
  const [pokemonsArr, setPokemons] = useState(pokemons);

  const pokemonClickHandler = (id) => {
    setPokemonID(id);
    const newPokemons = pokemons.map((item) => {
      const card = Object.assign({}, item);
      if (item.id == pokemonID) {
        card.active = true;
      }
      return card;
    });
    setPokemons(newPokemons);
    console.log(pokemonID);
  };

  return (
    <div>
      This game page!
      <button onClick={clickHandler}>Вернуться на стартовую страницу</button>
      <div className={s.flex}>
        {pokemonsArr.map((item) => (
          <PokemonCard
            key={item.id}
            id={item.id}
            name={item.name}
            type={item.type}
            img={item.img}
            values={item.values}
            isActive={item.active}
            pokemonCardRotate={pokemonClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
