import { useScaleContext } from "@/contexts/ScaleContext";

const Settings = () => {
  const {
    showAllNotes,
    setShowAllNotes,
    markRootNote,
    setMarkRootNote,
    showNoteName,
    setShowNoteName,
  } = useScaleContext();

  return (
    <div>
      <label>
        Note name
        <input
          checked={showNoteName}
          onChange={() => setShowNoteName(!showNoteName)}
          type="checkbox"
        />
      </label>
      <label>
        Mark root
        <input
          checked={markRootNote}
          onChange={() => setMarkRootNote(!markRootNote)}
          type="checkbox"
        />
      </label>
      <label>
        All notes
        <input
          checked={showAllNotes}
          onChange={() => setShowAllNotes(!showAllNotes)}
          type="checkbox"
        />
      </label>
    </div>
  );
};

export default Settings;
