//
import React, { useState } from "react";
import classes from "./Activities.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Activities() {
  const navigate = useNavigate();

  const activitiesarray = [
    "Exercise",
    "Work",
    "Social",
    "Play",
    "Sports",
    "Arts",
    "TV/show",
    "Cooking",
    "Stretching",
    "Nature",
    "Doom Scrolling",
    "Comedy",
    "Over Working",
    "Hobbies",
    "Community",
    "Comparing",
    "Called a loved one",
    "Playing with pets",
    "Substance Used",
    "Events",
    "Music",
    "Reading",
    "Treating Yourself",
    "Family",
    "Study",
    "Journal",
    "Home",
  ];
  const [selectedActivities, setSelectedActivities] = useState([]);

  const handleCheckboxChange = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(
        selectedActivities.filter((item) => item !== activity)
      );
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  return (
    <div className={classes.main}>
      <h1 className={classes.heading}>Which did you do today?</h1>

      <div className={classes.gridContainer}>
        {activitiesarray.map((activity, idx) => (
          <div key={idx} className={classes.arrayItem}>
            <input
              className={classes.input}
              type="checkbox"
              id={`activity-${idx}`}
              name="activity"
              value={activity}
              checked={selectedActivities.includes(activity)}
              onChange={() => handleCheckboxChange(activity)}
            />
            <label className={classes.label} htmlFor={`activity-${idx}`}>
              {activity}
            </label>
          </div>
        ))}
      </div>

      <div className={classes.buttons}>
        <Link onClick={() => navigate("/checkIn")} className={classes.button}>
          Next
        </Link>
        <Link
          onClick={() => navigate("/intensity")}
          className={classes.backbutton}
        >
          Back
        </Link>
      </div>
    </div>
  );
}
