import { useState } from "react";
import HomePage from "./routes/Home/home";
import GamePage from "./routes/Game/game";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("app");

  const startGameHandler = (page) => {
    setPage(page);
  };

  switch (page) {
    case "app":
      return <HomePage onChangeGameState={startGameHandler} />;
    case "game":
      return <GamePage onChangeGameState={startGameHandler} />;
    default:
      return <HomePage onChangeGameState={startGameHandler} />;
  }
};

export default App;
