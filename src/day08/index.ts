import run from "aocrunner";
import { day1, day2 } from "./functions.js";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return day1(input);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  return day2(input);
};

run({
  part1: {
    tests: [
      {
        input: `
30373
25512
65332
33549
35390 `,
        expected: 21,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
30373
25512
65332
33549
35390`,
        expected: 8,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
});
