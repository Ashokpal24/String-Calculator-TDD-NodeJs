export class StringCalculator {
  add(numbers: string): number {
    if (!numbers) return 0;
    if (numbers.length == 1 && !isNaN(Number(numbers))) return Number(numbers);

    let delimiters = /,|\n/;
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      const delimiterSection = numbers.slice(2, delimiterEnd);
      const customDelimiters = delimiterSection.match(/\[(.*?)\]/g);
      if (customDelimiters) {
        delimiters = new RegExp(
          customDelimiters.map((exp) => escapeExp(exp.slice(1, -1))).join("|")
        );
      } else {
        delimiters = new RegExp(escapeExp(delimiterSection));
        // console.log(delimiters);
      }
      numbers = numbers.slice(delimiterEnd + 1);
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

function escapeExp(str: string): string {
  // get all the special chars and add escape so it can processed by regex engine
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
