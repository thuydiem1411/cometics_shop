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
            <a href="#">Bestsellers</a>
            <a href="#">Cleansers</a>
            <a href="#">Exfoliators & toners</a>
            <a href="#">Serums</a>
            <a href="#">Moisturizers</a>
            <a href="#">Eye Creams</a>
            <a href="#">Masks</a>
            <a href="#">Make up prep</a>
            <a href="#">Body Care</a>
            <a href="#">Hair Care</a>
            <a href="#">Save with sets</a>
            <a href="#">Travel</a>
            <a href="#">Gitfs</a>
          </div>
          <div className="content__a">
            <h4 className="nav__title">Solutions for</h4>
            <a href="#">Sensitivity & Redness</a>
            <a href="#">Eczema-prone</a>
            <a href="#">Dark Spots & Hyperpigmentation </a>
            <a href="#">Dullness & Uneven Skin Tone</a>
            <a href="#">Dehydration & Dryness</a>
            <a href="#">Blemishes & Breakouts</a>
          </div>
          <div className="content__a">
            <h4 className="nav__title">By skin type</h4>
            <a href="#">Sensitive</a>
            <a href="#">Dry</a>
            <a href="#">Combination to Oily </a>
            <a href="#">Mature</a>
            <a href="#">Balanced</a>
          </div>
          <div className="content__a">
            <h4 className="nav__title">By range</h4>
            <a href="#">Evercalm</a>
            <a href="#">Radiance</a>
            <a href="#">Everhydrate </a>
            <a href="#">Bip Retinoid</a>
            <a href="#">Clearncalm</a>
            <a href="#">Perdect Canvas</a>
            <a href="#">Body Care</a>
            <a href="#">Hair Care </a>
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
            <a href="#">About REN</a>
            <a href="#">All Skin Is Sensitive</a>
            <a href="#">Bioactives Glossary</a>
            <a href="#">Pregnancy Skincare</a>
            <a href="#">Clean Thoughts</a>
            <a href="#">Clean Rewards</a>
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
