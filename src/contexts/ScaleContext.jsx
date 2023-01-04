import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ScaleContext = ({ children }) => {
  const [rootNote, setRootNote] = useState("C");
  const [scaleType, setScaleType] = useState("major");
  const [tuning, setTuning] = useState(["E", "A", "D", "G", "B", "E"]);
  const [showAllNotes, setShowAllNotes] = useState(true);
  const [markRootNote, setMarkRootNote] = useState(true);
  const [showNoteName, setShowNoteName] = useState(true);

  return (
    <Context.Provider
      value={{
        rootNote,
        setRootNote,
        scaleType,
        setScaleType,
        tuning,
        setTuning,
        showAllNotes,
        setShowAllNotes,
        markRootNote,
        setMarkRootNote,
        showNoteName,
        setShowNoteName,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useScaleContext = () => useContext(Context);
