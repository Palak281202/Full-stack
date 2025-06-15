import React from "react";
import { useNavigate } from "react-router-dom";
import classes from './CheckIn.module.css';
import EmotionCard from '../components/EmotionCard';
import { useEmotion } from '../store/EmotionsStore'
import happyimg from '../assets/happy.png'
import sadimg from '../assets/sad.png'
import neutralimg from '../assets/neutral.png'
import contentimg from '../assets/content.png'
import angerimg from '../assets/anger.png'
import aweimg from '../assets/awe.png'

export default function Emotions() {
  const anger = <img className = {classes.img} src={angerimg} alt="anger" />
  const happy = <img className = {classes.img} src={happyimg} alt="happy" />
  const neutral = <img className = {classes.img} src={neutralimg} alt="neutral"/>
  const content = <img className = {classes.img} src={contentimg} alt = "content"/>
  const sad = <img className = {classes.img} src={sadimg} alt="sad"/>
  const awe = <img className = {classes.img} src={aweimg} alt="awe"/>
  const emotions = [
    { label: "Happy", emoji: happy},
    { label: "Sad", emoji: sad},
    { label: "Angry", emoji: anger },
    { label: "Neutral", emoji: neutral },
    { label: "Content", emoji: content },
    { label: "Awe", emoji: awe },
  ];

  const { selected, setSelected } = useEmotion();
  const navigate = useNavigate();

  return (
    <div className={classes.emotions}>
      <div className={classes.mainheading}>𓆞How are you feeling today?𓆝 </div>
      <div className={classes.text}>
        ╰┈➤No matter how you're feeling, it's okay.
         We're here to support you.
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
        Choose the feeling that is closest to how you are feeling.☁︎
      </div>
      {selected !== null && <p>{selected.emoji} {selected.label}</p>}
      <button onClick={() => navigate('/intensity')} className={classes.button}>Complete</button>
    </div>
  );
}
