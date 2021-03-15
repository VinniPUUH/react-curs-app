import { setState } from "react";
import cx from "classnames";
import s from "./style.module.css";

const NavBar = ({ onMenuClick, menuOpened }) => {
  return (
    <nav class={s.root}>
      <div class={s.navWrapper}>
        <p class={s.brand}>LOGO</p>
        <a
          class={cx(s.menuButton, { [s.active]: menuOpened })}
          onClick={() => onMenuClick()}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
