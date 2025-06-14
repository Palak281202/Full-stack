import { createContext, useContext, useState } from "react";

const EmotionContext = createContext();

export function EmotionProvider({ children }) {
  const [selected, setSelected] = useState(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  return (
    <EmotionContext.Provider
      value={{
        selected,
        setSelected,
        notes,
        setNotes,
        loading,
        setLoading,
        modalMessage,
        setModalMessage,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </EmotionContext.Provider>
  );
}

export function useEmotion() {
  return useContext(EmotionContext);
}
