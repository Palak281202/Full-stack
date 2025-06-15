import React from "react";
import classes from "./Analytics.module.css";
import MoodDay from "./MoodDay";
import { Link, useNavigate } from "react-router-dom";

export default function Analytics() {
  const navigate = useNavigate();
  const moodData = {
    "2025-01-01": "",
    "2025-01-02": "content",
    "2025-01-03": "angry",
    "2025-01-04": "happy",
    "2025-01-05": "happy",
    "2025-01-06": "awe",
    "2025-01-07": "neutral",
    "2025-01-08": "sad",
    "2025-01-09": "happy",
    "2025-01-10": "neutral",
    "2025-01-11": "neutral",
    "2025-01-12": "sad",
    "2025-01-13": "happy",
    "2025-01-14": "neutral",
    "2025-01-15": "neutral",
    "2025-01-16": "",
    "2025-01-17": "angry",
    "2025-01-18": "happy",
    "2025-01-19": "happy",
    "2025-01-20": "awe",
    "2025-01-21": "content",
    "2025-01-22": "angry",
    "2025-01-23": "",
    "2025-01-24": "sad",
    "2025-01-25": "happy",
    "2025-01-26": "neutral",
    "2025-01-27": "",
    "2025-01-28": "neutral",
    "2025-01-29": "happy",
    "2025-01-30": "content",
    "2025-01-31": "angry",
  };
  const daysInMonth = 31;
  const year = 2025;
  const month = 0;

  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1);
    const dateStr = date.toISOString().split("T")[0];
    console.log(dateStr);
    return {
      date: i + 1,
      mood: moodData[dateStr],
    };
  });
  console.log(daysArray[0]);
  return (
    <div className={classes.main}>
      <div className={classes.days}>
        <h2 className={classes.jan}>ʚɞ January ʚɞ</h2>
        <div className={classes.daydiv}>
          <div className={classes.header}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d} className={classes.day}>
                {d}
              </div>
            ))}
          </div>
          <div className={classes.months}>
            {Array(firstDayOfMonth)
              .fill(null)
              .map((_, i) => (
                <div key={`empty-${i}`} className={classes.month}></div>
              ))}

            {daysArray.map((day, idx) => (
              // console.log(day.mood, idx)
              <MoodDay key={idx} day={day.date} mood={day.mood} />
            ))}
          </div>
        </div>
        <div className={classes.mainemotion}>
          <div>
            <span className={classes.sad}></span> Sad
          </div>
          <div>
            <span className={classes.neutral}></span> Neutral
          </div>
          <div>
            <span className={classes.awe}></span> Awe
          </div>
          <div>
            <span className={classes.happy}></span> Happy
          </div>
          <div>
            <span className={classes.angry}></span> Angry
          </div>
          <div>
            <span className={classes.content}></span> Content
          </div>
        </div>
        <Link
          onClick={() => navigate("/submitingCheckIn")}
          className={classes.button}
        >
          Back
        </Link>
      </div>
    </div>
  );
}
