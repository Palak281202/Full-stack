import React from "react";
import classes from "./Home.module.css";
export default function Home() {
  return (
    <div className={classes.main}>
      <h1 className={classes.heading}>Instructions</h1>
      <div className={classes.secdiv}>
        <p className={classes.para}>
          Welcome to stress scale. This is a quiz to identify your stress level
          ranging from high to low and navigate through such situations.
        </p>
        <p className={classes.para}>
          ✓ Read the statements carefully and relate to each of the statements
        </p>
        <p className={classes.para}>
          ✓ Choose the option which best describes your mood.
        </p>
      </div>
      <a className={classes.button} href="/emotion">Start Check-in</a>
    </div>
  );
}
