# String Calculator

A simple String Calculator implementation in Node.js with TypeScript, following Test-Driven Development (TDD) principles. This calculator can handle comma-separated numbers, newline-separated numbers, custom delimiters, multiple delimiters, and delimiters of varied lengths.

## Features

- **Addition of numbers in a string**: Supports numbers separated by commas or newlines
- **Custom delimiters**: Allows defining custom single or multiple delimiters
- **Negative number validation**: Throws an error when negative numbers are present
- **Ignores numbers greater than 1000**

## Requirements

- Node.js
- TypeScript
- Jest (for testing)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd string-calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Usage

### Basic Example

To use the `StringCalculator` class, import it and call the `add` method with a string of numbers:

```typescript
import { StringCalculator } from "./src/StringCalculator";

const calculator = new StringCalculator();
console.log(calculator.add("1,2,3")); // Output: 6
```

### Custom Delimiters

- **Single Character Delimiter**: Define a custom delimiter by specifying it after `//` in the format `//;\n1;2`
- **Multi-character Delimiters**: Wrap multi-character delimiters in square brackets, like `//[***]\n1***2***3`
- **Multiple Delimiters**: Use multiple square brackets for multiple delimiters, like `//[***][%%]\n1***2%%3`

#### Example with Custom Delimiters

```typescript
console.log(calculator.add("//[***]\n1***2***3")); // Output: 6
console.log(calculator.add("//[*][%]\n1*2%3")); // Output: 6
console.log(calculator.add("//[abc]\n4abc5abc6")); // Output: 15
```

### Error Handling

#### Negative Numbers

If the input string contains negative numbers, the calculator throws an error:

```typescript
try {
  calculator.add("1,-1,2,-3");
} catch (error) {
  console.error(error.message); // Output: "Negatives not allowed: -1,-3"
}
```

## Tests

This project uses **Jest** for testing. The tests are located in the `test` folder and cover cases like:

- Empty string input
- Single number input
- Newline and comma-separated numbers
- Custom delimiters of varied lengths
- Handling negative numbers
- Ignoring numbers greater than 1000

Run tests with:

```bash
npm test
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## AUTHOR

[Ashok](https://github.com/Ashokpal24)
