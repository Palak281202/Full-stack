import React from "react";
import { useEmotion } from "../store/EmotionsStore";
import classes from "./CheckIn.module.css";
import bee_error from "../assets/bee_error.png";
import Activities from "../components/Activities";

export default function Intensity() {
  const { selected } = useEmotion();
  return (
    <div className={classes.intensity}>
      {selected === null ? (
        <h1 className={classes.h1activity}>
          ➤Select an emotion first 
          <img className={classes.error_img} src={bee_error} alt="error" />
          <a href="/emotion" className={classes.backbutton}>Back</a>
        </h1>
      ) : (
        <Activities emotion={selected.label} />
      )}
    </div>
  );
}
