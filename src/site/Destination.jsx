import "../scss/destination.scss";
// import { useState } from "react";
import { Header } from "../components/Header";
// import Data from "../json/data.json"
export const Destination = () => {
  // const [activePlanet, srtActivePlanet] = useState(1)

  return (
    <>
      <Header/>
      <main className="dest-main-cont">
        <p className="dest-title"><span className="title-number">01</span> PICK YOUR DESTINATION</p>
        <section className="planets-wrapper">
          <div className="planet-img-wrapper">
            <img src="public/destination/image-moon.png" alt="planet image" className="planet-img"/>
          </div>
          <div className="planet-info-wrapper">
            <ul className="planets-list">
              <li className="planet-name">MOON</li>
              <li className="planet-name">MARS</li>
              <li className="planet-name">EUROPA</li>
              <li className="planet-name">TITAN</li>
            </ul>
            <h1 className="planet-title">MOON</h1>
            <p className="planet-desc">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <div className="additional-info">
              <p className="distance-info">384,400 km</p>
              <p className="travel-info">3 days</p>
            </div>
          </div>
        </section>
      </main>
    </>
    
  );
};
