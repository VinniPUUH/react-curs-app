import { useState } from "react";
import NavBar from "../NavBar/navBar";
import Menu from "../Menu/menu";
import s from "./style.module.css";

const MenuHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const menuStateToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div>
      <NavBar menuOpened={isActive} onMenuClick={menuStateToggle} />
      {isActive && <Menu />}
    </div>
  );
};
export default MenuHeader;
