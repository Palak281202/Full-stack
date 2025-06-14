import React from "react";

import classes from './Emotions.module.css'
export default function Happy() {
  return (
    <div className={classes.main}>
      <p className={classes.heading}>What state is your happiness in?</p>
      <div className={classes.inputdiv}>
        <input className={classes.input}
          type="checkbox"
          id="happy1"
          name="happy1"
          value="Cheerful"
        ></input>
        <label className={classes.label} for="happy1">Cheerful </label>
        <input className={classes.input} type="checkbox" id="happy2" name="happy2" value="Warm"></input>
        <label className={classes.label} for="happy2">Warm </label>
        <input className={classes.input}
          type="checkbox"
          id="happy3"
          name="happy3"
          value="Playful"
        ></input>
        <label className={classes.label} for="happy3">Playful </label>
        <input className={classes.input} type="checkbox" id="happy4" name="happy4" value="Amused"></input>
        <label className={classes.label} for="happy4">Amused </label>
        <input className={classes.input}
          type="checkbox"
          id="happy5"
          name="happy5"
          value="Lighthearted"
        ></input>
        <label className={classes.label} for="happy5">Lighthearted </label>
        <input className={classes.input}
          type="checkbox"
          id="happy6"
          name="happy6"
          value="Chipper"
        ></input>
        <label className={classes.label} for="happy6">Chipper </label>
      </div>
    </div>
  );
}
