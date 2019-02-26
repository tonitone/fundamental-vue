<<<<<<< Updated upstream:ui/src/components/Calendar/util/__tests__/Utils.test.ts
import { laterDate, earlierDate } from "./../";
import { assert } from "chai";
=======
import { laterDate, earlierDate } from './../';
>>>>>>> Stashed changes:src/components/Calendar/util/__tests__/Utils.test.ts

describe("utils", () => {
  describe("laterDate", () => {
    it("works with different month", () => {
      const d1 = new Date(2018, 5, 12);
      const d2 = new Date(2018, 6, 12);
      expect(laterDate(d1, d2) === d2).toBe(true);
    });
    it("works with different day", () => {
      const d1 = new Date(2018, 6, 1);
      const d2 = new Date(2018, 6, 12);
      expect(laterDate(d1, d2) === d2).toBe(true);
    });
    it("works with different year", () => {
      const d1 = new Date(2020, 6, 12);
      const d2 = new Date(2018, 6, 12);
      expect(laterDate(d1, d2) === d1).toBe(true);
    });
  });
  describe("earlierDate", () => {
    it("works with different month", () => {
      const d1 = new Date(2018, 5, 12);
      const d2 = new Date(2018, 6, 12);
      expect(earlierDate(d1, d2) === d1).toBe(true);
    });
    it("works with different day", () => {
      const d1 = new Date(2018, 6, 1);
      const d2 = new Date(2018, 6, 12);
      expect(earlierDate(d1, d2) === d1).toBe(true);
    });
    it("works with different year", () => {
      const d1 = new Date(2020, 6, 12);
      const d2 = new Date(2018, 6, 12);
      expect(earlierDate(d1, d2) === d2).toBe(true);
    });
  });
});
