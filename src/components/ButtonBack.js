import React from 'react'
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ButtonBack = () => {
  return (
    <div className="container__btn">
        <div className="btn__back">
          <p className="icon__back">
            <IoChevronBackOutline />
          </p>

          <Link to="/routine " className="link__btn">
            Back
          </Link>
        </div>
      </div>
  )
}

export default ButtonBack
