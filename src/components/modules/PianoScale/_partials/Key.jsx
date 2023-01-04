import React from "react";

const whiteKeyWidth = "74.6428";
const whiteKeyHeight = "242.738";
const blackKeyWidth = "31.619";
const blackKeyHeight = "149.286";

const variants = {
  white: {
    width: whiteKeyWidth,
    height: whiteKeyHeight,
    fill: "white",
    strokeWidth: 1,
  },
  black: {
    width: blackKeyWidth,
    height: blackKeyHeight,
    fill: "#444",
    strokeWidth: 2,
  },
};

const Key = ({
  note,
  variant = "white",
  x,
  y,
  scale,
  showAllNotes,
  markRootNote,
  showNoteName,
}) => {
  const isInScale = scale.includes(note);
  const isRoot = scale[0] === note;

  return (
    <>
      <rect
        x={x}
        y={y}
        width={variants[variant].width}
        height={variants[variant].height}
        fill={variants[variant].fill}
        stroke="#444444"
        strokeWidth={variants[variant].strokeWidth}
      />
      {showAllNotes || isInScale
        ? {
            white: (
              <>
                <circle
                  cx={x + 35}
                  cy={"250"}
                  r={"21px"}
                  fill={
                    isInScale
                      ? isRoot && markRootNote
                        ? "#047857"
                        : "#10b981"
                      : "transparent"
                  }
                />
                {showNoteName ? (
                  <text
                    textAnchor="middle"
                    fill={isInScale ? "#fff" : "#000"}
                    x={x + 35}
                    y={"255"}
                    fontSize="1rem"
                  >
                    {note}
                  </text>
                ) : null}
              </>
            ),
            black: (
              <>
                <circle
                  cx={x + 15}
                  cy={"180"}
                  r={"15px"}
                  fill={
                    isInScale
                      ? isRoot && markRootNote
                        ? "#047857"
                        : "#10b981"
                      : "transparent"
                  }
                />
                {showNoteName ? (
                  <text
                    textAnchor="middle"
                    fill={isInScale ? "#fff" : "#fff"}
                    x={x + 15}
                    y={"185"}
                    fontSize="1rem"
                  >
                    {note}
                  </text>
                ) : null}
              </>
            ),
          }[variant]
        : null}
    </>
  );
};

export default Key;
