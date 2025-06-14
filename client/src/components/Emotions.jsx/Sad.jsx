import React from "react";
import classes from './Emotions.module.css'

export default function Sad() {
  return (
    <div>
      <div className={classes.main}>
        <p className={classes.heading}>What state is your sadness in?</p>
        <div className={classes.inputdiv}>
          <input type="checkbox" id="sad1" name="sad1" value="Down" className={classes.input}></input>
          <label className={classes.label} for="sad1">Down </label>
          <input  className={classes.input}
            type="checkbox"
            id="sad2"
            name="sad2"
            value="Disappointment"
          ></input>
          <label className={classes.label} for="sad2">Disappointment </label>
          <input className={classes.input} type="checkbox" id="sad3" name="sad3" value="Listless"></input>
          <label className={classes.label} for="sad3">Listless </label>
          <input  className={classes.input}type="checkbox" id="sad4" name="sad4" value="Apathy"></input>
          <label className={classes.label} for="sad4">Apathy </label>
          <input className={classes.input}
            type="checkbox"
            id="sad5"
            name="sad5"
            value="Disheartened"
          ></input>
          <label className={classes.label} for="sad5">Disheartened </label>
        </div>
      </div>
    </div>
  );
}
