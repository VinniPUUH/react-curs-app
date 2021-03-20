import { useHistory } from "react-router-dom";

import s from "./style.module.css";

const Header = ({ title, desc, onStartGame }) => {
  const history = useHistory();
  console.log(history)
  const clickHandler = () => {
    history.push("/game")
  };

  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button onClick={clickHandler}>Start game</button>
      </div>
    </header>
  );
};

export default Header;
