import "./App.css";
import Header from "./components/Header/header";
import Layout from "./components/Layout/layout";
import Footer from "./components/Footer/footer";

import layoutBG from ".//shared-assets/bg.jpg";

console.log(layoutBG);

const App = () => {
  return (
    <>
      <Header title="Мой проект" desc="На react.js" />
      <Layout title="Первый заголовок" desc="Здесь наверное что-то будет" urlBg={layoutBG} />
      <Layout title="Второй заголовок" desc="Здесь наверное что-то будет" colorBg="#fb6666db" />
      <Layout title="Третий заголовок" desc="Здесь наверное что-то будет" urlBg={layoutBG} />
      <Footer />
    </>
  );
};

export default App;
