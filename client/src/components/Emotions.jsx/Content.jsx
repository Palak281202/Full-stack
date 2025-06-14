import React from "react";

import classes from './Emotions.module.css'
export default function Content() {
  return (
    <div className={classes.main}>
      <p className={classes.heading}>What state is your contentment in?</p>
      <div className={classes.inputdiv}>
        <input className={classes.input}
          type="checkbox"
          id="content1"
          name="content1"
          value="Calm"
        ></input>
        <label className={classes.label} for="content1">Calm </label>
        <input className={classes.input}
          type="checkbox"
          id="content2"
          name="content2"
          value="Settled"
        ></input>
        <label className={classes.label} for="content2">Settled </label>
        <input className={classes.input}
          type="checkbox"
          id="content3"
          name="content3"
          value="At ease"
        ></input>
        <label className={classes.label} for="content3">At ease </label>
        <input className={classes.input}
          type="checkbox"
          id="content4"
          name="content4"
          value="Fed up"
        ></input>
        <label className={classes.label} for="content4">Fed up </label>
        <input className={classes.input}
          type="checkbox"
          id="content5"
          name="content5"
          value="Composed"
        ></input>
        <label className={classes.label} for="content5">Composed </label>
        <input className={classes.input}
          type="checkbox"
          id="content6"
          name="content6"
          value="Relieved"
        ></input>
        <label className={classes.label} for="content6">Relieved </label>
      </div>
      <button className={classes.button}>Submit</button>
    </div>
  );
}
