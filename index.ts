export type RgbColor = [number, number, number];

export interface RgbColorMap {
  yellow: RgbColor;
  orange: RgbColor;
  red: RgbColor;
  magenta: RgbColor;
  violet: RgbColor;
  blue: RgbColor;
  cyan: RgbColor;
  green: RgbColor;
  asStringMap: () => RgbColorStringMap;
}

export interface RgbBaseMap {
  base03: RgbColor;
  base02: RgbColor;
  base01: RgbColor;
  base00: RgbColor;
  base0: RgbColor;
  base1: RgbColor;
  base2: RgbColor;
  base3: RgbColor;
  asStringMap: () => RgbBaseStringMap;
}

export interface RgbColorStringMap {
  yellow: string;
  orange: string;
  red: string;
  magenta: string;
  violet: string;
  blue: string;
  cyan: string;
  green: string;
  asRgbMap: () => RgbColorMap;
}

export interface RgbBaseStringMap {
  base03: string;
  base02: string;
  base01: string;
  base00: string;
  base0: string;
  base1: string;
  base2: string;
  base3: string;
  asRgbMap: () => RgbBaseMap;
}

export const rgb: RgbColorMap & RgbBaseMap = {
  base03: [0, 43, 54],
  base02: [7, 54, 66],
  base01: [88, 110, 117],
  base00: [101, 123, 131],
  base0: [131, 148, 150],
  base1: [147, 161, 161],
  base2: [238, 232, 213],
  base3: [253, 246, 227],
  yellow: [181, 137, 0],
  orange: [203, 75, 22],
  red: [220, 50, 47],
  magenta: [211, 54, 130],
  violet: [108, 113, 196],
  blue: [38, 139, 210],
  cyan: [42, 161, 152],
  green: [133, 153, 0],
  asStringMap: () => rgbStrings,
};

export const rgbStrings: RgbColorStringMap & RgbBaseStringMap = {
  base03: rgbNumberToString(rgb.base03),
  base02: rgbNumberToString(rgb.base02),
  base01: rgbNumberToString(rgb.base01),
  base00: rgbNumberToString(rgb.base00),
  base0: rgbNumberToString(rgb.base0),
  base1: rgbNumberToString(rgb.base1),
  base2: rgbNumberToString(rgb.base2),
  base3: rgbNumberToString(rgb.base3),
  yellow: rgbNumberToString(rgb.yellow),
  orange: rgbNumberToString(rgb.orange),
  red: rgbNumberToString(rgb.red),
  magenta: rgbNumberToString(rgb.magenta),
  violet: rgbNumberToString(rgb.violet),
  blue: rgbNumberToString(rgb.blue),
  cyan: rgbNumberToString(rgb.cyan),
  green: rgbNumberToString(rgb.green),
  asRgbMap: () => rgb,
};

export function createBasesFromColor(
  nonBaseColor: RgbColor,
  correspondingBase: "base03" | "base02" | "base01" | "base00" | "base0" | "base1" | "base2" | "base3",
): RgbBaseStringMap {
  const baseRgb = rgb[correspondingBase];
  const base03 = getRgbDifference(nonBaseColor, getRgbDifference(baseRgb, rgb.base03));
  const base02 = getRgbDifference(nonBaseColor, getRgbDifference(baseRgb, rgb.base02));
  const base01 = getRgbDifference(nonBaseColor, getRgbDifference(baseRgb, rgb.base01));
  const base00 = getRgbDifference(nonBaseColor, getRgbDifference(baseRgb, rgb.base00));
  const base0 = getRgbDifference(nonBaseColor, getRgbDifference(baseRgb, rgb.base0));
  const base1 = getRgbDifference(nonBaseColor, getRgbDifference(baseRgb, rgb.base1));
  const base2 = getRgbDifference(nonBaseColor, getRgbDifference(baseRgb, rgb.base2));
  const base3 = getRgbDifference(nonBaseColor, getRgbDifference(baseRgb, rgb.base3));
  const colorMap: RgbBaseMap = {
    base03,
    base02,
    base01,
    base00,
    base0,
    base1,
    base2,
    base3,
    asStringMap: () => stringMap,
  };
  const stringMap: RgbBaseStringMap = {
    base03: rgbNumberToString(base03),
    base02: rgbNumberToString(base02),
    base01: rgbNumberToString(base01),
    base00: rgbNumberToString(base00),
    base0: rgbNumberToString(base0),
    base1: rgbNumberToString(base1),
    base2: rgbNumberToString(base2),
    base3: rgbNumberToString(base3),
    asRgbMap: () => colorMap,
  };

  return stringMap;
}

export function getRgbDifference(
  originalRgb: RgbColor,
  targetRgb: RgbColor,
): RgbColor {
  return [
    originalRgb[0] - targetRgb[0],
    originalRgb[1] - targetRgb[1],
    originalRgb[2] - targetRgb[2],
  ];
}

export function rgbNumberToString(rgbNumber: RgbColor) {
  return `rgb(${rgbNumber[0]},${rgbNumber[1]},${rgbNumber[2]})`;
}
