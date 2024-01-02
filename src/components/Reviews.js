import { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { reviews } from "../pages/data";

const Reviews = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedReviews = reviews.slice(
    currentImageIndex,
    currentImageIndex + 3
  );
  const showNextButton = currentImageIndex !== 0;
  const showPrevButton = currentImageIndex !== reviews.length - 3;

  return (
  <>
  
  <section className="reviews">
      <h3 className="home__title">REAL RESULTS, REAL REVIEWS</h3>
      <div className="container__reviews">
        {displayedReviews.map(({ id, img }, index) => (
          <div
            key={id}
            className={`review-item ${index === 0 ? "active" : ""}`}
          >
            <div className="reals__image">
              <img className="img__reals"src={img} alt="Image Reviews" />
            </div>
          </div>
        ))}
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
    <hr className="separator" />
  </>
    
  );
};

export default Reviews;
