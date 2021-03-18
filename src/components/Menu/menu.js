import cx from "classnames";
import s from "./style.module.css";

const Menu = () => {
  return (
    <div class={cx(s.menuContainer, s.active)}>
      <div class={s.overlay} />
      <div class={s.menuItems}>
        <ul>
          <li>
            <a href="#welcome">HOME</a>
          </li>
          <li>
            <a href="#game">GAME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
