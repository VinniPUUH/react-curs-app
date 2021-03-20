import { setState } from "react";
import cx from "classnames";
import s from "./style.module.css";

const NavBar = ({ onMenuClick, menuOpened, bgActive }) => {
  return (
    <nav className={(cx(s.root, {[s.bgActive]: bgActive }))}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          className={cx(s.menuButton, { [s.active]: menuOpened })}
          onClick={() => onMenuClick()}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
