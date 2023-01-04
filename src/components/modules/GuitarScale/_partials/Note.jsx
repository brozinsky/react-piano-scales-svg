import { useThemeContext } from "@/contexts/ThemeContext";
import { fretX, stringY, radius } from "@/utils/svgCoords.js";

const Note = ({
  fret,
  string,
  note,
  isRootNote,
  isInScale,
  showAllNotes,
  markRootNote,
  showNoteName,
}) => {
  const { colorPrimary, colorPrimaryDark } = useThemeContext();

  if (isInScale || showAllNotes) {
    return (
      <>
        <circle
          cx={fretX[fret]}
          cy={stringY[string]}
          r={radius}
          fill={
            isInScale
              ? isRootNote && markRootNote
                ? colorPrimaryDark
                : colorPrimary
              : "#e5e7eb"
          }
        />
        {showNoteName ? (
          <text
            textAnchor="middle"
            fill={isInScale ? "#fff" : "#000"}
            x={fretX[fret]}
            y={stringY[string] + 5}
            fontSize="1rem"
          >
            {note}
          </text>
        ) : null}
      </>
    );
  } else null;
};

export default Note;
