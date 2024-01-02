import "./routine.css";
import Logoutine1 from "../../Image/routine1.jpg";
import Logoutine2 from "../../Image/routine2.jpg";
import Logoutine3 from "../../Image/routine3.jpg";
import Logoutine4 from "../../Image/routine4.jpg";
import Logoutine5 from "../../Image/routine5.jpg";
import Logoutine6 from "../../Image/routine6.jpg";
import Logoutine7 from "../../Image/routine7.jpg";
import Logoutine8 from "../../Image/routine8.jpg";
import InfoRoutine from "../../components/InfoRoutine";

const Routine = () => {
  return (
    <>
    <div className="routine">
      <div className="container__routine">
        <div className="routine__content">
          <div className="routine__left">
            <p className="left__title">You answer, we curate.</p>
            <p className="left__content">
              When it comes to skin, one size doesn't fit all.
            </p>
            <span className="left__content">
              We're here to help you find the right routine for you with
              personalized product picks that fit your lifestyle and skin goals.
            </span>
            <button className="routine__left__btn">
              Building Your Routine
            </button>
            <p className="left__contentbot">
              This website uses cookies. By continuing to browse this site, you
              agree to our use of cookies. Read our Cookie Policy.
            </p>
          </div>
          <div className="routine__right">
            <div className="right__image">
              <div className="image-group">
                <img src={Logoutine1} alt="Image 1" className="image active" />
                <img src={Logoutine3} alt="Image 3" className="image" />
              </div>
              <div className="image-group">
                <img src={Logoutine5} alt="Image 5" className="image" />
                <img src={Logoutine7} alt="Image 7" className="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InfoRoutine/>
    </>
  );
};

export default Routine;
