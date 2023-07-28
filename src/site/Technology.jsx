import "../scss/technology.scss";
import { Header } from "../components/Header";
import { useState } from "react";
import Data from '../json/data.json'
export const Technology = () => {
  const [activeTech, setActiveTech] = useState(1)

  return (
    <>
      <Header/>
      <main className="tech-main-cont">
        <p className="tech-title">
          <span className="title-number">03</span> Space lunch 101
        </p>
        {Data.technology.filter(item => item.id === activeTech).map(item => {
          return (
            <section className="tech-wrapper" key={item.id}>
              <ul className="indicator-list">
                {Data.technology.map((item, index) => {
                  return (
                  <li className="indicator" key={item.id} data-active={item.id === activeTech ? 'true' : 'false'} onClick={() => setActiveTech(item.id)}>
                    {index + 1}
                  </li>)
                })}
              </ul>
              <div className="tech-info-box">
                <div className="text-box">
                  <p className="tech-eyebrow">The terminology...</p>
                  <h1 className="tech-title">{item.name}</h1>
                  <p className="tech-desc">{item.description}</p>
                </div>
              </div>
              <div className="image-wrapper">
                <img src={item.images.portrait} alt="technology image" />
              </div>
            </section>
          )
        })}
      </main>
    </>
  );
};
