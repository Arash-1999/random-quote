import React from "react";
import {ReactComponent as Twitter} from "./twitter.svg";

import Animation from "./../animation/animation.js";

import "./buttonHolder.css";

const ButtonHolder = (props) => {
  return(
    <div className="btn-holder">
      <div className="btns">
        <button onClick={props.clicked}>New Quote!</button>
          <a href="https://twitter.com/intent/tweet" target="__blank"><Twitter height="1.8rem"/></a>
      </div>
      <Animation/>
    </div>
  );
};

export default ButtonHolder;
