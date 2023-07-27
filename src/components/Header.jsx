import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../scss/header.scss";

export const Header = () => {
    const location = useLocation();
    const [activeLinks, setActiveLinks] = useState({
        home: false,
        destination: false,
        crew: false,
        technology: false,
      });

      useEffect(() => {
        setActiveLinks((prevState) => ({
          ...prevState,
          home: location.pathname === "/",
          destination: location.pathname === "/destination",
          crew: location.pathname === "/crew",
          technology: location.pathname === "/technology",
        }));
      }, [location]);

  return (
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
          <Link to="/" data-active={activeLinks.home}>
            <strong className="option-number">00</strong> HOME
          </Link>
        </li>
        <li className="option">
          <Link to="/destination" data-active={activeLinks.destination}>
            <strong className="option-number">01</strong> DESTINATION
          </Link>
        </li>
        <li className="option">
          <Link to="/crew" data-active={activeLinks.crew}>
            <strong className="option-number">02</strong> CREW
          </Link>
        </li>
        <li className="option">
          <Link to="/technology" data-active={activeLinks.technology}>
            <strong className="option-number">03</strong> TECHNOLOGY
          </Link>
        </li>
      </ul>
    </div>
  </header>
  )
}
