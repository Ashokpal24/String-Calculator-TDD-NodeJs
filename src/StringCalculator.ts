export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    if (numbers.length == 1 && !isNaN(Number(numbers))) return Number(numbers);
    numbers = numbers.replace("\n", ",");
    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
