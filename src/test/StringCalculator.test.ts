import { StringCalculator } from "../StringCalculator";

describe("StringCalculator", () => {
  let calc: StringCalculator;
  beforeEach(() => {
    calc = new StringCalculator();
  });
  test("returns 0 for an empty string", () => {
    expect(calc.add("")).toBe(0);
  });
});
