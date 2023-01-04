import { useScaleContext } from "@/contexts/ScaleContext";
import { scales } from "@/utils/data";

const notes = ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"];

const Panel = () => {
  const { rootNote, setRootNote, scaleType, setScaleType, tuning, setTuning } =
    useScaleContext();

  return (
    <div>
      <select value={rootNote} onChange={(e) => setRootNote(e.target.value)}>
        {notes.map((note, index) => {
          return (
            <option key={note + index} value={note}>
              {note}
            </option>
          );
        })}
      </select>
      <select
        style={{ textTransform: "capitalize" }}
        value={scaleType}
        onChange={(e) => setScaleType(e.target.value)}
      >
        {scales.map(({ name }, index) => {
          return (
            <option key={name + index} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Panel;
