import { Link } from "react-router-dom";
import "./footer.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className=" container__footer">
          <div className="footer__topcontent">
            <div className="right__topcontent">
              <h3>Subscribe to our newsletter for 15% off your first order</h3>
              <p>
                Believe us, it's one of the good ones! Join our community and
                you'll be first in line to hear about product launches, promos
                and more.
              </p>
              <div className="topcontent__input">
                <input placeholder="Your Email" />
                <FaAngleRight />
              </div>
            </div>
            <div className="next__right__topcontent">
              <h3>REN CLEAN SKINCARE</h3>
              <Link to="/shop">Shop</Link><br/>
              <Link to="/shop">About Ren</Link><br/>
              <Link to="/shop">Routine Builder</Link><br/>
              <Link to="/shop">Bioactives Glossary</Link><br/>
              <Link to="/shop">Pregnancy Skincare</Link><br/>
              <Link to="/shop">Creator Program</Link>
            </div>
            <div className="next__left__topcontent">
              <h3>CUSTOMER CARE</h3>
              <Link to="/shop">Contact Us</Link><br/>
              <Link to="/shop">FAQs</Link><br/>
              <Link to="/shop">Shipping</Link><br/>
              <Link to="/shop">Returns</Link><br/>
              <Link to="/shop">My Account</Link><br/>
              <Link to="/shop">Loyalty Program</Link>
            </div>
            <div className="left__topcontent">
              <h3>CUSTOMER CARE</h3>
              <Link to="/shop">Terms & Conditions</Link><br/>
              <Link to="/shop">Privacy Notice</Link>
              <button className="left__button">
                Do Not Sell or Share My Personal Information
              </button>
            </div>
          </div>
          <div className="footer__bottomcontent">
            <div className="bottom__icon">
              <FaFacebook />
              <FaTwitter />
              <FaPinterest />
              <PiInstagramLogoFill />
              <IoLogoYoutube />
              <FaTiktok />
            </div>
            <div className="bottom__items">
              <p>© 2023, REN Clean Skincare.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
