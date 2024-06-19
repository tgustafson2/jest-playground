import { capitalize, reverseStr, calc, caesarCipher, analyzeArray } from "../src/playFunctions";


test("true to be true", () => {
  expect(true).toBe(true);
});

test("should capitalize first character", () => {
  expect(capitalize("hello World")).toBe("Hello World");
});

test("should reverse a string", () => {
  expect(reverseStr("abcde")).toBe("edcba");
});

test("should add two numbers", () => {
  expect(calc.add(4, 4)).toBe(8);
});

test("should divide two numbers", () => {
  expect(calc.div(5, 2)).toBeCloseTo(2.5);
});

test("should subtract two numbers", () => {
  expect(calc.sub(4, 2)).toBe(2);
});

test("should multiply two numbers", () => {
  expect(calc.mult(4, 2)).toBe(8);
});

test("should shift a string", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("should analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
