import React from "react";
import classes from "./Home.module.css";
import bee_complete from '../assets/bee_complete.png';
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={classes.first}>
      <div className={classes.main}>
        <img className={classes.img}
          src={bee_complete}
          alt="Welcome to mood check In"
        />
        <h1 className={classes.heading}>Instructions</h1>
        <div className={classes.secdiv}>
          <p className={classes.para}>
            Welcome to stress scale. This is a quiz to identify your stress
            level ranging from high to low and navigate through such situations.
          </p>
          <p className={classes.para}>
            ✓ Read the statements carefully and relate to each of the statements
          </p>
          <p className={classes.para}>
            ✓ Choose the option which best describes your mood.
          </p>
        </div>
        <Link className={classes.button} onClick={()=>navigate('/emotion')}>Start Check-in</Link>
        {/* <a className={classes.button} href="/emotion">
          Start Check-in
        </a> */}
      </div>
    </div>
  );
}
