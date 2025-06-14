import React from "react";
import classes from './Emotions.module.css'

export default function Angry() {
  return (
    <div className={classes.main}>
      <p className={classes.heading}>What state is your anger in?</p>
      <div className={classes.inputdiv}>
        <input className={classes.input}
          type="checkbox"
          id="angry1"
          name="angry1"
          value="Irritated"
        ></input>
        <label className={classes.label} for="angry1">Irritated </label>
        <input className={classes.input}
          type="checkbox"
          id="angry2"
          name="angry2"
          value="Annoyed"
        ></input>
        <label className={classes.label} for="angry2">Annoyed </label>
        <input className={classes.input}
          type="checkbox"
          id="angry3"
          name="angry3"
          value="Frustrated"
        ></input>
        <label className={classes.label} for="angry3">Frustrated </label>
        <input className={classes.input} type="checkbox" id="angry4" name="angry4" value="Fed up"></input>
        <label className={classes.label} for="angry4">Fed up </label>
        <input className={classes.input} type="checkbox" id="angry5" name="angry5" value="Grumpy"></input>
        <label className={classes.label} for="angry5">Grumpy </label>
        <input className={classes.input} type="checkbox" id="angry6" name="angry6" value="Touchy"></input>
        <label className={classes.label} for="angry6">Touchy </label>
      </div>
      <button className={classes.button}>Submit</button>
    </div>
  );
}
