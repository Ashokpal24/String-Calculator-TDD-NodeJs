export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    if (numbers.length == 1 && !isNaN(Number(numbers))) return Number(numbers);
    return 0;
  }
}
