import "../scss/destination.scss";
import { useState } from "react";
import { Header } from "../components/Header";
import Data from "../json/data.json"
export const Destination = () => {
  const [activePlanet, setActivePlanet] = useState(1)

  return (
    <>
      <Header/>
      <main className="dest-main-cont">
        <p className="dest-title"><span className="title-number">01</span> PICK YOUR DESTINATION</p>
        {Data.destinations.filter(item => item.id === activePlanet).map(item => {
          return (
            <>
              <section className="planets-wrapper">
                <div className="planet-img-wrapper">
                  <img src={item.images.png} alt="planet image" className="planet-img"/>
                </div>
                <div className="planet-info-wrapper">
                  <ul className="planets-list">
                    {Data.destinations.map((item) => {
                      return (
                        <li key={item.id} className="planet-name" data-active={item.id === activePlanet ? "true" : "flase"} onClick={() => setActivePlanet(item.id)}>{item.name}</li>
                      )
                    })}
                  </ul>
                  <h1 className="planet-title">{item.name}</h1>
                  <p className="planet-desc">{item.description}</p>
                  <div className="additional-info">
                    <p className="distance-info">{item.distance}</p>
                    <p className="travel-info">{item.travel}</p>
                  </div>
                </div>
              </section>
            </>
          )
        })}
      </main>
    </>
    
  );
};
