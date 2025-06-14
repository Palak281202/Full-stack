import { useState } from "react";
import axios from "axios";
import EmotionCard from "../components/EmotionCard";
import NotesInput from "../components/NotesInput";
import SubmitButton from "../components/SubmitButton";
import FeedbackModal from "../components/FeedbackModal";
import classes from "./CheckIn.module.css";
import IntensitySelector from "../components/IntensitySelector";
import Home from "../components/Home";
import { useEmotion } from "../store/EmotionsStore";

const emotions = [
  { label: "Happy", emoji: "😊" },
  { label: "Sad", emoji: "😢" },
  { label: "Angry", emoji: "😠" },
  { label: "Neutral", emoji: "😐" },
  { label: "Content", emoji: "😌" },
  { label: "Awe", emoji: "😮" },
];

export default function CheckIn() {
  const { selected } = useEmotion();
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
      <NotesInput
        notes={notes}
        setNotes={setNotes}
        emotion={selected ? selected.label : null}
      />
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
