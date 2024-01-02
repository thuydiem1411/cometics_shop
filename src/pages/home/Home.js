import Header from "../../components/Header";
import TopFooter3 from "../../Image/top_footer3.png";
import HeaderImage from "../../Image/header2.jpg";
import HeaderImage1 from "../../Image/header1.jpg";
import HeaderImage2 from "../../Image//content.jpg";
import Video from "../../Image/video.mp4";
import "./home.css";
import Discover from "../../components/Discover";
import Reviews from "../../components/Reviews";
import Reals from "../../components/Reals";
import Infor from "../../components/Infor";
import LogoStype from "../../Image/Style_logo_1-.png";
import LogoExperst from "../../Image/Sensitive_Skin_Experts-0.png"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
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
        <Reviews />
        <Reals />
        <Infor />
        <div className="container__stype">
          <div className="content__type">
            <div className="stype__card">
              <span className="card__span">
                <FaQuoteLeft />
              </span>
              <div className="type__content">
                <p className="para_type">
                  REN Evercalm Redness Relief Serum really works. I put it on
                  and within an hour the redness has abated. - India Knight
                </p>
              </div>
              <span className="card__span">
                <FaQuoteRight />
              </span>
              <div className="stype__image">
                <img className="image__logo" src={LogoStype} alt="LogoStype" />
              </div>
            </div>
          </div>
        </div>
        <div class="container__planet">
          <div class="planet__content">
            <div class="planet__image">
              <img src={TopFooter3} alt="TopFooter3" />
            </div>
            <div class="planet__text">
              <div class="text__logo">
                <span>CLEAN TO PLANET</span>
              </div>
              <p class="text__logo">Convert your Clean Rewards points for purpose with VERDN</p>
              <a class="text__a">LEARN MORE</a>
            </div>
          </div>
        </div>
        <div className="container__experst">
          <div className="container__logo">
            <img className ="logo__experst"src={LogoExperst} alt="LogoExperst"></img>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
