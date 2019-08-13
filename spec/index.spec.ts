import { createBasesFromColor, getRgbDifference, getRgbFromHexString, rgbNumberToString, rgbStrings } from "../src/";
describe("solarizer", () => {
  describe("rgbNumberToString", () => {
    it("should convert 3 number arrays into rgb strings", async () => {
      const rgbString = rgbNumberToString([1, 2, 3]);
      expect(rgbString).toEqual("rgb(1,2,3)");
    });
  });
  describe("getRgbFromHexString", () => {
    it("should properly convert hex with # to rgb", async () => {
      const rgb = getRgbFromHexString("#001122");
      expect(rgb).toEqual([0, 17, 34]);
    });
    it("should properly convert hex without # to rgb", async () => {
      const rgb = getRgbFromHexString("001122");
      expect(rgb).toEqual([0, 17, 34]);
    });
  });
  describe("getRgbDifference", () => {
    it("should correctly calculate RGB difference", async () => {
      const difference = getRgbDifference([10, 10, 10], [4, 4, 4]);
      expect(difference).toEqual([6, 6, 6]);
    });
  });
  describe.only("createBasesFromColor", () => {
    it("should be able to create bases for yellow", async () => {
      const bases = createBasesFromColor(rgbStrings.yellow, "base03");
      expect(Object.values(bases).length).toEqual(9);
      for (const baseKey of Object.keys(bases)) {
        const base = bases[baseKey];
        if (typeof base === "string") {
          expect((base as string).includes("NaN")).toBeFalsy();
        }
      }
    });
  });
});
