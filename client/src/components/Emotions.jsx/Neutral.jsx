import React from "react";
import classes from './Emotions.module.css'

export default function Neutral() {
  return (
    <div className={classes.main}>
      <p className={classes.heading}>What state is your anger in?</p>
      <div className={classes.inputdiv}>
        <input className={classes.input}
          type="checkbox"
          id="neutral1"
          name="neutral1"
          value="Blank"
        ></input>
        <label className={classes.label} for="neutral1">Blank </label>
        <input className={classes.input}
          type="checkbox"
          id="neutral2"
          name="neutral2"
          value="Apathetic"
        ></input>
        <label className={classes.label} for="neutral2">Apathetic </label>
        <input className={classes.input}
          type="checkbox"
          id="neutral3"
          name="neutral3"
          value="Detached"
        ></input>
        <label className={classes.label} for="neutral3">Detached </label>
        <input className={classes.input}
          type="checkbox"
          id="neutral4"
          name="neutral4"
          value="Good"
        ></input>
        <label className={classes.label} for="neutral4">Good </label>
        <input className={classes.input}
          type="checkbox"
          id="neutral5"
          name="neutral5"
          value="Indifferent"
        ></input>
        <label className={classes.label} for="neutral5">Indifferent </label>
        <input className={classes.input}
          type="checkbox"
          id="neutral6"
          name="neutral6"
          value="Okay"
        ></input>
        <label className={classes.label} for="neutral6">Okay </label>
      </div>
    </div>
  );
}
