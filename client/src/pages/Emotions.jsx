import React from "react";
import { useNavigate } from "react-router-dom";
import classes from './CheckIn.module.css';
import EmotionCard from '../components/EmotionCard';
import { useEmotion } from '../store/EmotionsStore'

export default function Emotions() {
  const emotions = [
    { label: "Happy", emoji: "😊" },
    { label: "Sad", emoji: "😢" },
    { label: "Angry", emoji: "😠" },
    { label: "Neutral", emoji: "😐" },
    { label: "Content", emoji: "😌" },
    { label: "Awe", emoji: "😮" },
  ];

  const { selected, setSelected } = useEmotion();
  const navigate = useNavigate();

  return (
    <div className={classes.emotions}>
      <div className={classes.mainheading}>How are you feeling today?</div>
      <div className={classes.text}>
        No matter how you're feeling, it's okay. We're here to support you.
      </div>
      <div className={classes.emotion}>
        {emotions.map((emotion, idx) => (
          <EmotionCard
            key={idx}
            emotion={emotion}
            isSelected={selected?.label === emotion.label}
            onClick={() => setSelected(emotion)}
          />
        ))}
      </div>
      <div className={classes.text}>
        Choose the feeling that is closest to how you are feeling.
      </div>
      <button onClick={() => navigate('/intensity')}>Complete</button>
    </div>
  );
}
