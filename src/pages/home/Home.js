import Header from "../../components/Header";

import HeaderImage from "../../Image/header2.jpg";
import HeaderImage1 from "../../Image/header1.jpg";
import HeaderImage2 from "../../Image//content.jpg";
import Video from "../../Image/video.mp4";
import "./home.css";
import Discover from "../../components/Discover";
import Reviews from "../../components/Reviews";
import Reals from "../../components/Reals";
const Home = () => {
  return (
    <>
      <div className="container__home">
        <div>
          <Header
            title="CHOOSE YOUR GIFT"
            image={HeaderImage}
            buttonText="Shop Now"
          >
            Enjoy your free travel-sized moisturizer or treatment on orders +$75
          </Header>
        </div>
        <div className="header__wrapper">
          <Header
            title="PURITY PERFORMANCE PLEASURE"
            image={HeaderImage1}
            buttonText="Shop Betseller"
          >
            Discover our must-have
          </Header>
        </div>
        
        <Discover />
        <div className="container__video">
          <Header
            className="content"
            title="CLEAN EFFECTIVE SKINCARE FROM NATURE’S BIOACTIVES"
            video={Video}
            buttonText="Meet You"
          ></Header>
        </div>
        <Reviews/>
        <Reals/>
      </div>
    </>
  );
};

export default Home;
