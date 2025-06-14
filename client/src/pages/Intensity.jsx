import React from "react";
import IntensitySelector from "../components/IntensitySelector";
import { useEmotion } from "../store/EmotionsStore";
import classes from './CheckIn.module.css'

export default function Intensity() {
  const { selected } = useEmotion();
  return (
    <div >
      {selected === null ? (
        <h1 className={classes.h1}>Select an emotion first</h1>
      ) : (
        <IntensitySelector emotion={selected.label} />
      )}
    </div>
  );
}
