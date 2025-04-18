import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/background_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/Play_icon.png";
import info_icon from "../../assets/Info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero title" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            at aliquid cupiditate eum, vero fuga consectetur minus alias
            reprehenderit molestiae iste sequi laudantium, officia reiciendis
            aut voluptas amet rerum consequuntur?
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="play icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="info icon" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
