import "../scss/home.scss";
import { Header } from "../components/Header";
export const Home = () => {
  
  return (
    <>
    <Header />
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
