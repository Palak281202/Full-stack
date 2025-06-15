import classes from "./Reminder.module.css";
import React, { useState, useEffect } from "react";
import clock from '../assets/clock.gif'

export default function AlarmSetter() {
  const [hour, setHour] = useState(3);
  const [minute, setMinute] = useState(0);
  const [ampm, setAmPm] = useState("am");
  const [days, setDays] = useState([]);
  const [alarmSet, setAlarmSet] = useState(false);

  const allDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const toggleDay = (day) => {
    if (day === "All") {
      setDays([...allDays]);
    } else {
      setDays((prev) =>
        prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentDay = allDays[now.getDay()];
      const selectedHour = ampm === "am" ? hour % 12 : (hour % 12) + 12;

      if (
        alarmSet &&
        currentHour === selectedHour &&
        currentMinute === minute &&
        days.includes(currentDay)
      ) {
        alert("⏰ Alarm! It's time.");
        setAlarmSet(false); // prevent repeat
      }
    }, 60000); // check every minute

    return () => clearInterval(interval);
  }, [alarmSet, hour, minute, ampm, days]);

  return (
    <div className={classes.alarm_container}>
      <h2>Set Reminder</h2>
      <img className={classes.clockimg} src={clock} alt="clock"/>
      <div className={classes.time_picker}>
        <input
          type="number"
          min="1"
          max="12"
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
        />
        :
        <input
          type="number"
          min="0"
          max="59"
          value={minute}
          onChange={(e) => setMinute(Number(e.target.value))}
        />
        <select value={ampm} onChange={(e) => setAmPm(e.target.value)}>
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>

      <h3>Select Days</h3>
      <div className={classes.days}>
        {[...allDays, "All"].map((day) => (
          <button
            key={day}
            className={classes.button}
            onClick={() => toggleDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <a href="/submitingCheckIn" className={classes.save_btn} onClick={() => setAlarmSet(true)}>
        Save
      </a>
    </div>
  );
}

