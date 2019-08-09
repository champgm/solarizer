import { RgbColor } from "./RgbColor";
import { RgbBaseMap, RgbBaseStringMap, RgbColorMap, RgbColorStringMap } from "./RgbMaps";
import { SolarizedBaseNumber } from "./SolarizedBaseNumber";

/**
 * The original Solarized values, stored as RGB arrays
 */
export const rgb: RgbColorMap & RgbBaseMap = {
  asStringMap: () => rgbStrings,
  base0: [131, 148, 150],
  base00: [101, 123, 131],
  base01: [88, 110, 117],
  base02: [7, 54, 66],
  base03: [0, 43, 54],
  base1: [147, 161, 161],
  base2: [238, 232, 213],
  base3: [253, 246, 227],
  blue: [38, 139, 210],
  cyan: [42, 161, 152],
  green: [133, 153, 0],
  magenta: [211, 54, 130],
  orange: [203, 75, 22],
  red: [220, 50, 47],
  violet: [108, 113, 196],
  yellow: [181, 137, 0],
};

/**
 * The original Solarized values, stored as RGB strings
 */
export const rgbStrings: RgbColorStringMap & RgbBaseStringMap = {
  asRgbMap: () => rgb,
  base0: rgbNumberToString(rgb.base0),
  base00: rgbNumberToString(rgb.base00),
  base01: rgbNumberToString(rgb.base01),
  base02: rgbNumberToString(rgb.base02),
  base03: rgbNumberToString(rgb.base03),
  base1: rgbNumberToString(rgb.base1),
  base2: rgbNumberToString(rgb.base2),
  base3: rgbNumberToString(rgb.base3),
  blue: rgbNumberToString(rgb.blue),
  cyan: rgbNumberToString(rgb.cyan),
  green: rgbNumberToString(rgb.green),
  magenta: rgbNumberToString(rgb.magenta),
  orange: rgbNumberToString(rgb.orange),
  red: rgbNumberToString(rgb.red),
  violet: rgbNumberToString(rgb.violet),
  yellow: rgbNumberToString(rgb.yellow),
};

/**
 *
 * @param nonBaseColor Can be hex color string or RgbColor
 * @param correspondingBase The starting point where you want your original color to be stored in the "Base" range.
 *                          Darker and lighter color values will be calculated.
 */
export function createBasesFromColor(nonBaseColor: RgbColor | string, correspondingBase: SolarizedBaseNumber): RgbBaseStringMap {
  const nonBase = typeof nonBaseColor === "string"
    ? getRgbFromHexString(nonBaseColor)
    : nonBaseColor;
  const baseRgb = rgb[correspondingBase];
  const base0 = getRgbDifference(nonBase, getRgbDifference(baseRgb, rgb.base0));
  const base00 = getRgbDifference(nonBase, getRgbDifference(baseRgb, rgb.base00));
  const base01 = getRgbDifference(nonBase, getRgbDifference(baseRgb, rgb.base01));
  const base02 = getRgbDifference(nonBase, getRgbDifference(baseRgb, rgb.base02));
  const base03 = getRgbDifference(nonBase, getRgbDifference(baseRgb, rgb.base03));
  const base1 = getRgbDifference(nonBase, getRgbDifference(baseRgb, rgb.base1));
  const base2 = getRgbDifference(nonBase, getRgbDifference(baseRgb, rgb.base2));
  const base3 = getRgbDifference(nonBase, getRgbDifference(baseRgb, rgb.base3));
  const colorMap: RgbBaseMap = {
    base0,
    base00,
    base01,
    base02,
    base03,
    base1,
    base2,
    base3,
    asStringMap: () => stringMap,
  };
  const stringMap: RgbBaseStringMap = {
    asRgbMap: () => colorMap,
    base0: rgbNumberToString(base0),
    base00: rgbNumberToString(base00),
    base01: rgbNumberToString(base01),
    base02: rgbNumberToString(base02),
    base03: rgbNumberToString(base03),
    base1: rgbNumberToString(base1),
    base2: rgbNumberToString(base2),
    base3: rgbNumberToString(base3),
  };

  return stringMap;
}

/**
 * Gets the difference of each individual RGB value
 * @param minuendRgb The original color
 * @param subtrahendRgb The target color from which a difference should be calculated
 */
export function getRgbDifference(minuendRgb: RgbColor, subtrahendRgb: RgbColor): RgbColor {
  return [
    minuendRgb[0] - subtrahendRgb[0],
    minuendRgb[1] - subtrahendRgb[1],
    minuendRgb[2] - subtrahendRgb[2],
  ];
}

/**
 * Converts a hex string (e.g. #000000) to an RGB array
 * @param stringValue
 */
export function getRgbFromHexString(stringValue: string): RgbColor {
  const hex = stringValue.substring(0, 1) === "#"
    ? stringValue.substring(1)
    : stringValue;
  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4), 16),
  ];
}

/**
 * Converts an RGB array to a string value usable in CSS, etc
 * @param rgbNumber
 */
export function rgbNumberToString(rgbNumber: RgbColor) {
  return `rgb(${rgbNumber[0]},${rgbNumber[1]},${rgbNumber[2]})`;
}
