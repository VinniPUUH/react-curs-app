import { useState } from "react";
import cx from "classnames";
import s from "./style.module.css";

import backImage from "./img/card-back-side.jpg";

const PokemonCard = ({ id, name, type, img, values, isActive, pokemonCardRotate }) => {

  const pokemonClickHandler = () => {pokemonCardRotate(id)};

  return (
    <div className={s.root}>
      <div className={cx(s.pokemonCard, {[s.active]: isActive})} onClick = {pokemonClickHandler}>
        <div className={s.cardFront}>
          <div className={cx(s.wrap, s.front)}>
            <div className={cx(s.pokemon, s.[type])}>
              <div className={s.values}>
                <div className={cx(s.count, s.top)}>{values.top}</div>
                <div className={cx(s.count, s.right)}>{values.right}</div>
                <div className={cx(s.count, s.bottom)}>{values.bottom}</div>
                <div className={cx(s.count, s.left)}>{values.left}</div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={s.info}>
                <span className={s.number}>#{id}</span>
                <h3 className={s.name}>{name}</h3>
                <small className={s.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={s.cardBack}>
          <div className={cx(s.wrap, s.back)}>
            <img src={backImage} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
