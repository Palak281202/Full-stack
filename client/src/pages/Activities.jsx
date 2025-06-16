import React from "react";
import { useEmotion } from "../store/EmotionsStore";
import classes from "./CheckIn.module.css";
import bee_error from "../assets/bee_error.png";
import Activities from "../components/Activities";
import { Link, useNavigate } from "react-router-dom";

export default function Intensity() {
  const navigate = useNavigate();
  const { selected } = useEmotion();
  return (
    <div className={classes.activity}>
      {selected === null ? (
        <h1 className={classes.h1activity}>
          ➤Select an emotion first 
          <img className={classes.error_img} src={bee_error} alt="error" />
          <Link onClick={()=>{navigate('./emotion')}} className={classes.backbutton}>Back</Link>
        </h1>
      ) : (
        <Activities emotion={selected.label} />
      )}
    </div>
  );
}
