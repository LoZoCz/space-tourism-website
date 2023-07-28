import "../scss/crew.scss";
import { Header } from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Data from '../json/data.json'
export const Crew = () => {
  const [activeMember, setActiveMember] = useState(1);

  return (<>
    <Header />
    <main className="crew-main-cont">
        <p className="crew-title"><span className="title-number">02</span> Meet your crew</p>
        {Data.crew.filter(item => item.id === activeMember).map(item => {
          return (
            <section className="crew-wrapper" key={item.id}>
              <div className="crew-info-box">
                <div className="text-box">
                  <p className="crew-eyebrow">{item.role}</p>
                  <h1 className="crew-name">{item.name}</h1>
                  <p className="crew-desc">{item.bio}</p>
                </div>
                <ul className="indicator-list">
                  {Data.crew.map(item => {
                    return (
                    <li className="indicator" data-active={item.id === activeMember ? "true" : "flase"} key={item.id} onClick={() => setActiveMember(item.id)}>
                      <FontAwesomeIcon icon={faCircle} />
                    </li>
                  )
                  })}
                </ul>
              </div>
              <div className="crew-image-box">
                <img src={item.images.png} alt="crew member" className="crew-image"/>
              </div>
            </section>
          )
        })}
    </main>  
  </>);
};
