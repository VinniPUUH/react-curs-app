import s from "./style.module.css"

const Header = ({title, desc, onStartGame}) => {

const clickHandler = () => {
  onStartGame && onStartGame("game");
}

  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button onClick={clickHandler}>
          Start game
        </button>
      </div>
    </header>
  );
};

export default Header;
