import "./App.css";
import { useState } from "react";
import GuitarScale from "@/modules/GuitarScale/GuitarScale";
import PianoScale from "@/components/modules/PianoScale/PianoScale";
import Settings from "@/modules/Settings";
import Panel from "@/modules/Panel";
import { useScaleContext } from "@/contexts/ScaleContext";
import { createScale, guitarFretboardNotes } from "@/utils/data";

const currentChord = {
  frets: [1, 3, 3, 2, 1, 1],
  fingers: [1, 3, 4, 2, 1, 1],
  barres: [1],
};

const currentTuning = ["E", "A", "D", "G", "B", "E"];

function App() {
  const [chord, setChord] = useState(currentChord);
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
  // const [tuning, setTuning] = useState(currentChord);

  // const instrumentData = {
  //   strings: 6,
  //   fretsOnChord: 4,
  //   name: "Guitar",
  //   keys: [],
  //   tunings: {
  //     standard: tuning,
  //   },
  // };
  const lite = false; // defaults to false if omitted
  const scale = createScale(scaleType, rootNote); //[ "A", "B", "C#", "D", "E", "F#", "G#" ]

  return (
    <>
      <Settings />
      <GuitarScale />
      <PianoScale
        scale={scale}
        showAllNotes={showAllNotes}
        markRootNote={markRootNote}
        showNoteName={showNoteName}
      />
      <Panel />
    </>
    // <Chord chord={chord} instrument={instrumentData} lite={lite} />;
  );
}

export default App;
