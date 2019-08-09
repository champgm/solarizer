import { RgbColor } from "./RgbColor";

export interface RgbColorMap {
  asStringMap: () => RgbColorStringMap;
  blue: RgbColor;
  cyan: RgbColor;
  green: RgbColor;
  magenta: RgbColor;
  orange: RgbColor;
  red: RgbColor;
  violet: RgbColor;
  yellow: RgbColor;
}

export interface RgbBaseMap {
  asStringMap: () => RgbBaseStringMap;
  base0: RgbColor;
  base00: RgbColor;
  base01: RgbColor;
  base02: RgbColor;
  base03: RgbColor;
  base1: RgbColor;
  base2: RgbColor;
  base3: RgbColor;
}

export interface RgbColorStringMap {
  asRgbMap: () => RgbColorMap;
  blue: string;
  cyan: string;
  green: string;
  magenta: string;
  orange: string;
  red: string;
  violet: string;
  yellow: string;
}

export interface RgbBaseStringMap {
  asRgbMap: () => RgbBaseMap;
  base0: string;
  base00: string;
  base01: string;
  base02: string;
  base03: string;
  base1: string;
  base2: string;
  base3: string;
}
