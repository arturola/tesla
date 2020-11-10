import React, { useEffect, useState } from "react";
import "./Car.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Car({ img }) {
  const [showModel, handleShowModel] = useState(false);
  const [showText, handleShowText] = useState(false);
  const [showButtonWhite, handleShowButtonWhite] = useState(false);
  const [showButtonBlack, handleShowButtonBlack] = useState(false);
  const [showShopButton, handleShowShopButton] = useState(false);
  const [showArrow, handleShowArrow] = useState(false);
  const [nextModel, setNextModel] = useState("");
  const [nextText, setNextText] = useState("");
  const [nextButtonWhiteText, setNextButtonWhiteText] = useState("");
  const [nextButtonBlackText, setNextButtonBlackText] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleShowModel(false);
      handleShowText(false);
      handleShowButtonWhite(false);
      handleShowButtonBlack(false);
      handleShowArrow(false);
      handleShowShopButton(false);
      if (window.scrollY > 400 && window.scrollY < 1000) {
        handleShowModel(true);
        handleShowButtonWhite(true);
        setNextButtonWhiteText("EXISTING INVENTORY");
        setNextModel("Model X");
        handleShowArrow(true);
      } else if (window.scrollY > 1000 && window.scrollY < 1600) {
        handleShowModel(true);
        handleShowButtonWhite(true);
        setNextModel("Model 3");
        setNextButtonWhiteText("EXISTING INVENTORY");
        handleShowArrow(true);
      } else if (window.scrollY > 1600 && window.scrollY < 2200) {
        handleShowModel(true);
        handleShowButtonWhite(true);
        handleShowArrow(true);
        setNextModel("Model S");
        setNextButtonWhiteText("EXISTING INVENTORY");
      } else if (window.scrollY > 2200 && window.scrollY < 2800) {
        handleShowModel(true);
        handleShowText(true);
        handleShowButtonBlack(true);
        handleShowArrow(true);
        setNextModel("Only $1.49/Watt for Solar on Existing Roofs");
        setNextText("Lowest Cost in America - Money-back guarantee");
        setNextButtonWhiteText("LEARN MORE");
        setNextButtonBlackText("ORDER NOW");
      } else if (window.scrollY > 2800 && window.scrollY < 3600) {
        handleShowModel(true);
        handleShowText(true);
        handleShowArrow(true);
        setNextModel("Solar for New Roofs");
        setNextText("Solar Roof Costs Less Than a New Roof Plus Solar Panels");
      } else if (window.scrollY > 3600) {
        handleShowModel(true);
        handleShowText(true);
        handleShowArrow(true);
        handleShowShopButton(true);
        setNextModel("Accessories");
        setNextText("");
      }

      //else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="car">
      {/* <div>{name}</div> */}
      {/* <div className="car__model">{model} </div> */}
      <div className={`car__model ${showModel && "car__modelTransparent"}`}>
        {!showModel ? "Model Y" : nextModel}
      </div>
      <div className={`car__delivery ${showText && "car__modelTransparent"}`}>
        {!showText ? (
          <p>
            Order Online for <u>Touchless Delivery</u>
          </p>
        ) : (
          nextText
        )}
      </div>
      <div
        className={`car__buttons ${
          showShopButton && "car__buttonsTransparent"
        }`}
      >
        <button className="car__buttonBlack">
          {!showButtonBlack ? "CUSTOM ORDER" : nextButtonBlackText}
        </button>
        <button className="car__buttonWhite">
          {!showButtonWhite ? "LEARN MORE" : nextButtonWhiteText}
        </button>
      </div>
      <div
        className={`car__shopButtonAlt ${
          !showShopButton && "car__buttonsTransparent"
        }`}
      >
        <button className="car__shopButton">SHOP</button>
      </div>

      <KeyboardArrowDownIcon
        fontSize="large"
        className={`car__arrow ${showArrow && "car__arrowTransparent"}`}
      />

      <div className="car__background">
        <section>
          <img className="car__backgroundImage" src={img} alt="car" />
        </section>
      </div>
    </div>
  );
}

export default Car;
