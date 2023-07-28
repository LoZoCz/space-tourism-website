import { Header } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Data from '../json/data.json';
import { useState, useEffect, useCallback } from 'react';
import "../scss/crew.scss"

export const Crew = () => {
  const [activeMember, setActiveMember] = useState(1);
  const [isAutoRotate, setAutoRotate] = useState(true);
  const [isPageVisible, setPageVisible] = useState(true);

  // Funkcja do przesuwania wskaźnika aktywnej osoby co 5 sekund
  const rotateMembers = useCallback(() => {
    if (isAutoRotate) {
      setActiveMember((prevMember) => (prevMember % Data.crew.length) + 1);
    }
  }, [isAutoRotate]);

  // Obsługa zdarzenia visibilitychange
  const handleVisibilityChange = () => {
    setPageVisible(!document.hidden);
  };

  useEffect(() => {
    // Uruchamiamy setInterval po zamontowaniu komponentu
    const intervalId = setInterval(rotateMembers, 8000);

    // Obsługa zdarzenia visibilitychange i blur
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleVisibilityChange);

    // Czyszczenie interwału i usuwanie listenerów po odmontowaniu komponentu
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleVisibilityChange);
    };
  }, [isAutoRotate, isPageVisible, rotateMembers]);

  // Obsługa zmiany osoby po kliknięciu na wskaźnik
  const handleIndicatorClick = (id) => {
    setActiveMember(id);
    setAutoRotate(false); // Zatrzymujemy zmianę automatyczną na 4 sekundy
    setTimeout(() => setAutoRotate(true), 4000); // Wznawiamy zmianę automatyczną po 4 sekundach
  };

  return (
    <>
      <Header />
      <main className="crew-main-cont">
        <p className="crew-title">
          <span className="title-number">02</span> Meet your crew
        </p>
        {Data.crew.filter((item) => item.id === activeMember).map((item) => {
          return (
            <section className="crew-wrapper" key={item.id}>
              <div className="crew-info-box">
                <div className="text-box">
                  <p className="crew-eyebrow">{item.role}</p>
                  <h1 className="crew-name">{item.name}</h1>
                  <p className="crew-desc">{item.bio}</p>
                </div>
                <ul className="indicator-list">
                  {Data.crew.map((item) => {
                    return (
                      <li
                        className="indicator"
                        data-active={item.id === activeMember ? 'true' : 'false'}
                        key={item.id}
                        onClick={() => handleIndicatorClick(item.id)}
                      >
                        <FontAwesomeIcon icon={faCircle} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="crew-image-box">
                <img
                  src={item.images.webp}
                  alt="crew member"
                  className="crew-image"
                />
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
};
