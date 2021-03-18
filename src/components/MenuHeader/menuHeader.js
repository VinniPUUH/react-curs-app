import { useState } from "react";
import NavBar from "../NavBar/navBar";
import Menu from "../Menu/menu";

import s from "./style.module.css";

const MenuHeader = ({bgActive}) => {
  const [isActive, setIsActive] = useState(false);
  const menuStateToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div>
      <NavBar bgActive={bgActive} menuOpened={isActive} onMenuClick={menuStateToggle} />
      {isActive && <Menu onMenuClick={menuStateToggle}/>}
    </div>
  );
};
export default MenuHeader;
