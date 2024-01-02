import React, { useState } from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";
const Dropdown = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const handleShopClick = () => {
    if (isExploreOpen) {
      setIsExploreOpen(false);
      setIsShopOpen(true);
    } else {
      setIsShopOpen(!isShopOpen);
    }
  };

  const handleExploreClick = () => {
    if (isShopOpen) {
      setIsShopOpen(false);
      setIsExploreOpen(true);
    } else {
      setIsExploreOpen(!isExploreOpen);
    }
  };

  const handleRoutineClick = () => {
      setIsShopOpen(false);
      setIsExploreOpen(false);
  };

  return (
    <div className="container__dropdown">
      <div className="dropdown__item">
        <Link to={"/"} onClick={handleRoutineClick}>
          <h3>Home</h3>
        </Link>
      </div>
      <div
        className={`dropdown__item ${isShopOpen ? "open" : ""}`}
        onClick={handleShopClick}
      >
        <h3>Shop</h3>

        <div className="dropdown__content">
          <div className="content__a">
            <h4 className="nav__title">By category</h4>
            <Link to="#">Bestsellers</Link>
            <Link to="#">Cleansers</Link>
            <Link to="#">Exfoliators & toners</Link>
            <Link to="#">Serums</Link>
            <Link to="#">Moisturizers</Link>
            <Link to="#">Eye Creams</Link>
            <Link to="#">Masks</Link>
            <Link to="#">Make up prep</Link>
            <Link to="#">Body Care</Link>
            <Link to="#">Hair Care</Link>
            <Link to="#">Save with sets</Link>
            <Link to="#">Travel</Link>
            <Link to="#">Gitfs</Link>
          </div>
          <div className="content__a">
            <h4 className="nav__title">Solutions for</h4>
            <Link to="#">Sensitivity & Redness</Link>
            <Link to="#">Eczema-prone</Link>
            <Link to="#">Dark Spots & Hyperpigmentation </Link>
            <Link to="#">Dullness & Uneven Skin Tone</Link>
            <Link to="#">Dehydration & Dryness</Link>
            <Link to="#">Blemishes & Breakouts</Link>
          </div>
          <div className="content__a">
            <h4 className="nav__title">By skin type</h4>
            <Link to="#">Sensitive</Link>
            <Link to="#">Dry</Link>
            <Link to="#">Combination to Oily </Link>
            <Link to="#">Mature</Link>
            <Link to="#">Balanced</Link>
          </div>
          <div className="content__a">
            <h4 className="nav__title">By range</h4>
            <Link to="#">Evercalm</Link>
            <Link to="#">Radiance</Link>
            <Link to="#">Everhydrate </Link>
            <Link to="#">Bip Retinoid</Link>
            <Link to="#">Clearncalm</Link>
            <Link to="#">Perdect Canvas</Link>
            <Link to="#">Body Care</Link>
            <Link to="#">Hair Care </Link>
          </div>
        </div>
      </div>
      <div
        className={`dropdown__item ${isExploreOpen ? "open" : ""}`}
        onClick={handleExploreClick}
      >
        <h3>Explore</h3>
        <div className="dropdown__content1">
          <div className="content__a">
            <Link to="#">About REN</Link>
            <Link to="#">All Skin Is Sensitive</Link>
            <Link to="#">Bioactives Glossary</Link>
            <Link to="#">Pregnancy Skincare</Link>
            <Link to="#">Clean Thoughts</Link>
            <Link to="#">Clean Rewards</Link>
          </div>
        </div>
      </div>
      <div className="dropdown__item">
        <Link to={"/routine"} onClick={handleRoutineClick}>
          <h3>Routine Builder</h3>
        </Link>
      </div>
    </div>
  );
};
export default Dropdown;
