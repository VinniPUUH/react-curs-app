import s from "./style.module.css";

const Layout = ({ title, urlBg, colorBg, children }) => {
  const styleLayout = {};
  if (urlBg) {
    styleLayout.backgroundImage = `url(${urlBg})`;
  }
  if (colorBg) {
    styleLayout.backgroundColor = colorBg;
  }

  return (
    <section className={s.root} style={styleLayout}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{children}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
