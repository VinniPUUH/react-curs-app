import cx from "classnames";
import { Link } from "react-router-dom";

import s from "./style.module.css";

const Menu = ({ onMenuClick }) => {
  return (
    <div className={cx(s.menuContainer, s.active)}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                onMenuClick();
              }}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/game"
              onClick={() => {
                onMenuClick();
              }}
            >
              GAME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                onMenuClick();
              }}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => {
                onMenuClick();
              }}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
