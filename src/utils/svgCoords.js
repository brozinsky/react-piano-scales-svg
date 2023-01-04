export const firstFretCoords = 46;
export const fretCoords = Array.from(
  { length: 16 },
  (v, k) => firstFretCoords + k * 75
);
export const firstStringCoords = 21;

export const radius = "21";
// const stringCoords = Array.from(
//   { length: 6 },
//   (v, k) => firstStringCoords + k * 48
// );

export const fretX = [0, ...fretCoords];
export const stringY = {
  6: 290,
  5: 242,
  4: 192,
  3: 144,
  2: 98,
  1: 48,
};
