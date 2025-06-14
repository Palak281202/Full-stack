import { useState } from "react";
import axios from "axios";
import EmotionCard from "../components/EmotionCard";
import NotesInput from "../components/NotesInput";
import SubmitButton from "../components/SubmitButton";
import FeedbackModal from "../components/FeedbackModal";
import classes from "./CheckIn.module.css";
import IntensitySelector from "../components/IntensitySelector";
import Home from "../components/Home";

const emotions = [
  { label: "Happy", emoji: "😊" },
  { label: "Sad", emoji: "😢" },
  { label: "Angry", emoji: "😠" },
  { label: "Neutral", emoji: "😐" },
  { label: "Content", emoji: "😌" },
  { label: "Awe", emoji: "😮" },
];

export default function CheckIn() {
  const [selected, setSelected] = useState(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        emotion: selected.label,
        notes,
        timestamp: new Date().toISOString(),
      };
      await axios.post("https://jsonplaceholder.typicode.com/posts", payload);
      setModalMessage("✅ Check-in submitted successfully!");
      setModalOpen(true);
    } catch (error) {
      setModalMessage("❌ Submission failed. Please try again.", error);
      setModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.maindiv}>
      <Home/>
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
        <button>Complete</button>
      </div>
      {selected === null ? (
        <p></p>
      ) : (
        <IntensitySelector emotion={selected.label} />
      )}
      <NotesInput notes={notes} setNotes={setNotes} emotion = {selected ? selected.label : null}/>
      <SubmitButton
        isDisabled={!selected}
        isLoading={loading}
        onClick={handleSubmit}
      />
      <FeedbackModal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
