import "../scss/home.scss";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <header className="main-head">
        <div className="image-wrapper">
          <img
            src="../../public/shared/logo.svg"
            alt="main logo"
            className="main-logo"
          />
        </div>
        <div className="options-wrapper__head">
          <ul className="options-list">
            <li className="option">
              <Link to="/" data-active="true">
                <strong className="option-number">00</strong> HOME
              </Link>
            </li>
            <li className="option">
              <Link to="/destination" data-active="false">
                <strong className="option-number">01</strong> DESTINATION
              </Link>
            </li>
            <li className="option">
              <Link to="/crew" data-active="false">
                <strong className="option-number">02</strong> CREW
              </Link>
            </li>
            <li className="option">
              <Link to="/technology" data-active="false">
                <strong className="option-number">03</strong> TECHNOLOGY
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="main-cont">
        <div className="text-wrapper">
          <p className="title-eyebrow">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="main-title">SPACE</h1>
          <p className="main-desc">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <button className="explore-btn">EXPLORE</button>
      </main>
    </>
  );
};
