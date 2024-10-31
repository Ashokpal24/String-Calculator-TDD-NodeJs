export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    if (numbers.length == 1 && !isNaN(Number(numbers))) return Number(numbers);
    let delimiters = /,|\n/;
    if (numbers.startsWith("//")) {
      delimiters = new RegExp(numbers[2]);
      numbers = numbers.slice(4);
    }
    let numArray = numbers.split(delimiters).map(Number);
    numArray = numArray.filter((num) => num < 1001);
    // console.log(numArray);
    const NegArray = numArray.filter((num) => num < 0);
    if (NegArray.length > 0) {
      throw new Error(`Negatives not allowed: ${NegArray.join(",")}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
