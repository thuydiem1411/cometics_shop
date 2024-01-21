import "./routine.css";
import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import InfoRoutine from "../../components/InfoRoutine";
import ButtonBack from "../../components/ButtonBack";
import Logo from "../../Image/Build.jpg";
import Logo1 from "../../Image/Build1.jpg";
import Logo2 from "../../Image/buld2.jpg";
import Logo3 from "../../Image/build3.jpg";
import Logo4 from "../../Image/buid4.jpg";
import Logo5 from "../../Image/buid5.jpg";
const BuildRoutine = () => {
  const [showAge, setShowAge] = useState(false);
  const [showBuildRoutineContent, setShowBuildRoutineContent] = useState(true);
  const [showWrapper, setShowWrapper] = useState(false);
  const [showMainSkinContent, setShowMainSkinContent] = useState(false);
  const handleAgeButtonClick = () => {
    setShowAge(true);
    setShowBuildRoutineContent(false);
  };
  const handleAgeImageClick = () => {
    setShowAge(false);
    setShowMainSkinContent(true);
  };

  useEffect(() => {
    if (showAge) {
      setTimeout(() => {
        setShowWrapper(true);
      }, 1000); // Thay đổi số milliseconds tùy theo thời gian của animation__slide-in-left
    }
  }, [showAge]);
  return (
    <>
      <section className="BuildRoutine">
        <div className="wrapper__builroutine">
          {showBuildRoutineContent && (
            <div className="container__BuildRoutine">
              <span className="BuildRoutine__span">
                Let's start with your age?
              </span>

              <div className="content__BuildRoutine">
                <div className="content__link">
                  <button
                    className="content__link__btn"
                    onClick={handleAgeButtonClick}
                  >
                    20 and under
                  </button>
                </div>
                <div className="content__link">
                  <button
                    className="content__link__btn"
                    onClick={handleAgeButtonClick}
                  >
                    21-30
                  </button>
                </div>
                <div className="content__link">
                  <button
                    className="content__link__btn"
                    onClick={handleAgeButtonClick}
                  >
                    31-40
                  </button>
                </div>
                <div className="content__link">
                  <button
                    className="content__link__btn"
                    onClick={handleAgeButtonClick}
                  >
                    41-50
                  </button>
                </div>
                <div className="content__link">
                  <button
                    className="content__link__btn"
                    onClick={handleAgeButtonClick}
                  >
                    50+
                  </button>
                </div>

                <button className="content__btn">Prefer not to stay</button>
              </div>
            </div>
          )}
          {showAge && (
            <div className="container__age animation__fade-in ">
              <div className="age__title__span animation__slide-in-left">
                <span className="age__title">What's Your Skin Type ?</span>
              </div>
              {showWrapper && (
                <div className="age__wrapper animation__fade-in">
                  <div className="age__image__left">
                    <div
                      className="age__image__content"
                      onClick={handleAgeImageClick}
                    >
                      <img src={Logo} alt="Logo" className="image__content " />
                      <p className="age__content">Dry</p>
                    </div>
                    <div
                      className="age__image__content"
                      onClick={handleAgeImageClick}
                    >
                      <img
                        src={Logo1}
                        alt="Logo1"
                        className="image__content "
                      />
                      <p className="age__content">Oily</p>
                    </div>
                    <div
                      className="age__image__content"
                      onClick={handleAgeImageClick}
                    >
                      <img
                        src={Logo2}
                        alt="Logo2"
                        className="image__content "
                      />
                      <p className="age__content">Combination</p>
                    </div>
                  </div>
                  <div className="age__image__right">
                    <div
                      className="age__image__content"
                      onClick={handleAgeImageClick}
                    >
                      <img
                        src={Logo3}
                        alt="Logo3"
                        className="image__content "
                      />
                      <p className="age__content">Sensitive</p>
                    </div>
                    <div
                      className="age__image__content"
                      onClick={handleAgeImageClick}
                    >
                      <img
                        src={Logo4}
                        alt="Logo4"
                        className="image__content "
                      />
                      <p className="age__content">BlemMish Prone</p>
                    </div>
                    <div
                      className="age__image__content"
                      onClick={handleAgeImageClick}
                    >
                      <img
                        src={Logo5}
                        alt="Logo5"
                        className="image__content "
                      />
                      <p className="age__content">Balanced</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {showMainSkinContent && (
            <div className="container__mainskin">
              <div className="mainskin__divspan">
                <span className="mainskine__span">
                  What are your main skin concerns?
                </span>
              </div>
              <div className="mainskin__divp">
                <p className="mainskine__p">
                  Please select up to 3 skin concerns by order of importance.
                </p>
              </div>

              <table className="mainskine__table">
                <tr className="mainskine__tr">
                  <td className="mainskin__td">
                    <select className="mainskin__select">
                      <option value="option1">Sensitivity and Redness</option>
                      <option value="option2">Dullness</option>
                      <option value="option3">Dehydration and Dryness</option>
                      <option value="option1">
                        Uneven Skin Tone and Pigmentation
                      </option>
                      <option value="option2">Signs of Aging</option>
                    </select>
                  </td>
                </tr>
                <tr className="mainskine__tr">
                  <td className="mainskin__td">
                    <select className="mainskin__select">
                      <option value="option1">Sensitivity and Redness</option>
                      <option value="option2">Dullness</option>
                      <option value="option3">Dehydration and Dryness</option>
                      <option value="option1">
                        Uneven Skin Tone and Pigmentation
                      </option>
                      <option value="option2">Signs of Aging</option>
                    </select>
                  </td>
                </tr>
                <tr className="mainskine__tr">
                  <td className="mainskin__td">
                    <select className="mainskin__select">
                      <option value="option1">Sensitivity and Redness</option>
                      <option value="option2">Dullness</option>
                      <option value="option3">Dehydration and Dryness</option>
                      <option value="option1">
                        Uneven Skin Tone and Pigmentation
                      </option>
                      <option value="option2">Signs of Aging</option>
                    </select>
                  </td>
                </tr>
              </table>
              <div className="mainskin__button__div">
                <button className="mainskin__button">SUBMIT</button>
              </div>
            </div>
          )}
        </div>
      </section>
      <ButtonBack />

      <InfoRoutine />
    </>
  );
};

export default BuildRoutine;
