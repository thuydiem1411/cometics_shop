import { reals } from "../pages/data";
import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
const Reals = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? reals.length - 1 : prevIndex - 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === reals.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedReals = reals.slice(currentImageIndex, currentImageIndex + 3);
  const  showNextButton = currentImageIndex !== 0;
  const showPrevButton = currentImageIndex !== reals.length - 3;
  return (
    <section className="reals">
      <h3 className="home__title">REAL PEOPLE, REAL RESULTS</h3>
      <div className="container__reals ">
        {displayedReals.map(({ id, name, content, img }, index) => {
          return (
            <di>
              <div
                key={id}
                className={`reals-item ${index === 0 ? "active" : ""}`}
              >
                <div className="reals__image">
                  <img className="img__reals" src={img} alt={name} />
                </div>

                <h3 className="title__discover">{name}</h3>
                <p className="content__discover">{content}</p>
              </div>
            </di>
          );
        })}
      </div>
      <div className="controls">
        <div className="controls__content">
          {showPrevButton && (
            <button className="controls__button" onClick={handlePrevImage}>
              <IoChevronBackOutline />
            </button>
          )}
          {showNextButton && (
            <button className="controls__button" onClick={handleNextImage}>
              <IoChevronForwardOutline />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reals;
