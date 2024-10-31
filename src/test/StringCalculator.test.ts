import { StringCalculator } from "../StringCalculator";

describe("StringCalculator", () => {
  let calc: StringCalculator;
  beforeEach(() => {
    calc = new StringCalculator();
  });
  test("returns 0 for an empty string", () => {
    expect(calc.add("")).toBe(0);
  });
  test("returns the number itself for a single number", () => {
    expect(calc.add("5")).toBe(5);
  });
  test("returns the sum of two numbers", () => {
    expect(calc.add("1,2")).toBe(3);
  });
});
