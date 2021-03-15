const GamePage = ({ onChangeGameState }) => {
  const clickHandler = () => {
    onChangeGameState && onChangeGameState("app");
  };

  return (
    <div>
      This game page!
      <button onClick={clickHandler}>Вернуться на стартовую страницу</button>
    </div>
  );
};

export default GamePage;
