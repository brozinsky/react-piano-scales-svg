import React from "react";
import GuitarBody from "./_partials/GuitarBody";
import { createScale, guitarFretboardNotes } from "@/utils/data";
import Note from "./_partials/Note";
import { useScaleContext } from "@/contexts/ScaleContext";

const GuitarScale = () => {
  const {
    rootNote,
    setRootNote,
    scaleType,
    setScaleType,
    tuning,
    setTuning,
    showAllNotes,
    markRootNote,
    showNoteName,
  } = useScaleContext();

  const testingScale = createScale(scaleType, rootNote); //[ "A", "B", "C#", "D", "E", "F#", "G#" ]

  return (
    <svg
      width="1059"
      height="320"
      viewBox="0 0 1059 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GuitarBody strokeColor={"#1e293b"} circleColor={"#cbd5e1"} />
      {Object.entries(guitarFretboardNotes).map(([string, notes]) =>
        notes.map((note, index) => {
          return (
            <Note
              showNoteName={showNoteName}
              markRootNote={markRootNote}
              showAllNotes={showAllNotes}
              key={`${string}-${index}`}
              fret={index}
              string={string}
              note={note}
              isRootNote={testingScale[0] === note}
              isInScale={testingScale.includes(note)}
            />
          );
        })
      )}
    </svg>
  );
};

export default GuitarScale;
