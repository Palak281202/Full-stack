import React from "react";
import classes from './Emotions.module.css'

export default function Awe() {
  return (
    <div className={classes.main}>
      <p className={classes.heading}>What state is your anger in?</p>
      <div className={classes.inputdiv}>
        <input className={classes.input} type="radio" id="awe1" name="awe1" value="Curious"></input>
        <label className={classes.label} for="awe1">Curious </label>
        <input className={classes.input} type="radio" id="awe2" name="awe2" value="Intrigued"></input>
        <label className={classes.label} for="awe2">Intrigued </label>
        <input className={classes.input} type="radio" id="awe3" name="awe3" value="Interested"></input>
        <label className={classes.label} for="awe3">Interested </label>
        <input className={classes.input} type="radio" id="awe4" name="awe4" value="Engaged"></input>
        <label className={classes.label} for="awe4">Engaged </label>
        <input className={classes.input} type="radio" id="awe6" name="awe6" value="Observant"></input>
        <label className={classes.label} for="awe6">Observant </label>
      </div>
    </div>
  );
}
