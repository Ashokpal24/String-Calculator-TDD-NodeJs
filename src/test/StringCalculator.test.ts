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
  test("handles newlines as delimiters", () => {
    expect(calc.add("3\n4,5")).toBe(12);
  });
  test("support custom delimiters", () => {
    expect(calc.add("//;\n1;2")).toBe(3);
    expect(calc.add("//*\n3*2")).toBe(5);
  });
  test("throw an error with negative numbers", () => {
    expect(() => calc.add("1,-1,2,-3")).toThrow("Negatives not allowed: -1,-3");
  });
  test("Don't allow number greater that 1000 to be calculated", () => {
    expect(calc.add("1001,1")).toBe(1);
    expect(calc.add("1000,96")).toBe(1096);
    expect(calc.add("1000,1,2000")).toBe(1001);
    expect(calc.add("2,1001")).toBe(2);
  });
  test("support delimiter of any length", () => {
    expect(calc.add("//[***]\n1***2***3")).toBe(6);
    expect(calc.add("//[%%%%]\n1%%%%2%%%%5")).toBe(8);
  });
  test("support multiple delimiter", () => {
    expect(calc.add("//[*][%]\n1*2%3")).toBe(6);
    expect(calc.add("//[***][%]\n1***5%3")).toBe(9);
  });
});
