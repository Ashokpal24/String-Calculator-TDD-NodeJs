export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    if (numbers.length == 1 && !isNaN(Number(numbers))) return Number(numbers);
    let delimiters = /,|\n/;
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiters = new RegExp(numbers.slice(2, delimiterEnd));
      numbers = numbers.slice(delimiterEnd + 1);
      console.log(delimiters);
    }
    let numArray = numbers.split(delimiters).map(Number);
    numArray = numArray.filter((num) => num < 1001);

    const NegArray = numArray.filter((num) => num < 0);
    if (NegArray.length > 0) {
      throw new Error(`Negatives not allowed: ${NegArray.join(",")}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
