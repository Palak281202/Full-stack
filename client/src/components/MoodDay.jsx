import React from "react";
import classes from "./MoodDay.module.css";

const moodColors = {
  sad: "var(--sad)",
  angry: "var(--angry)",
  happy: "var(--happy)",
  content: "var(--content)",
  neutral: "var(--neutral)",
  awe: "var(--awe)",
};

export default function MoodDay({ day, mood }) {
  console.log(moodColors[mood]);
  return (
    <div
      className={classes.day}
      style={{ backgroundColor: mood ? moodColors[mood] : "#e0e0e0"}}
    >
      {day.toString().padStart(2, "0")}
    </div>
  );
}
