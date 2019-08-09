import { getRgbFromHexString, rgbNumberToString, getRgbDifference } from "../src/";
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
});
