import React from "react";
import { infor } from "../pages/data";

const Infor = () => {
  return (
    <>
    <hr className="separator" />
    <section className="infor">
      
      <div className="container__infor">
        <div className="content__infor">
          {infor.map(({ id, name, content, img }) => {
            return (
              <div className="infor_card" key={id}>
                <img className="infor_img" src={img} alt={name} />
                <h3 className="title__infor">{name}</h3>
                <p className="paramgrap__infor">{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default Infor;
