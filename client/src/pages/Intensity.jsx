import React from "react";
import IntensitySelector from "../components/IntensitySelector";
import { useEmotion } from "../store/EmotionsStore";
import classes from "./CheckIn.module.css";
import bee_error from "../assets/bee_error.png";
import { Link, useNavigate } from "react-router-dom";

export default function Intensity() {
  const navigate = useNavigate()
  const { selected } = useEmotion();
  return (
    <div className={classes.intensity}>
      {selected === null ? (
        <h1 className={classes.h1}>
          ➤Select an emotion first 
          <img className={classes.error_img} src={bee_error} alt="error" />
          <Link onClick={()=>{navigate('/emotion')}} className={classes.backbutton}>Back</Link>
        </h1>
      ) : (
        <IntensitySelector emotion={selected.label} />
      )}
    </div>
  );
}
