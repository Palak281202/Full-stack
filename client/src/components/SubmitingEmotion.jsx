import React from "react";
import bee_home from "../assets/bee_home.png";
import classes from "./SubmitingEmotion.module.css";
import bee_error from "../assets/bee_error.png";

export default function SubmitingEmotion() {
  return (
    <div className={classes.main}>
      <img className={classes.img} src={bee_home} alt="error" />
      <h2 className={classes.heading}>
        ꕤ Great job completing your session! ꕤ
      </h2>
      <p className={classes.p}>
        ✌︎︎ Want to make this a habit? Set a reminder for the next time
      </p>
      <div className={classes.div}>
        <a href="/reminder" className={classes.button1}>Set Reminder</a>
        <a className={classes.button2} href="/analytics">View Analytics</a>
      </div>
      <h3 className={classes.last_heading}>My recomendations 𓍯𓂃</h3>
      <div className={classes.cardflex}>
        <div className={classes.carddiv}>
          <h4>9 ways to deal with problem</h4>
          <div className={classes.colcarddiv}>
            <p className={classes.colcarddivp}>
              [ ▸ ] Video <br />⏱ 9 min
            </p>
            <img className={classes.cardimg} src={bee_error} alt="" />
          </div>
        </div>
        <div className={classes.carddiv}>
          <h4>9 ways to deal with problem</h4>
          <div className={classes.colcarddiv}>
            <p className={classes.colcarddivp}>
              ♫ Audio <br />⏱ 7 min
            </p>
            <img className={classes.cardimg} src={bee_error} alt="" />
          </div>
        </div>
        <div className={classes.carddiv}>
          <h4>9 ways to deal with problem</h4>
          <div className={classes.colcarddiv}>
            <p className={classes.colcarddivp}>
              🗪 Text <br />⏱ 10 min
            </p>
            <img className={classes.cardimg} src={bee_error} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
