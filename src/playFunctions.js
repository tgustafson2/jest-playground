function capitalize(str) {
  if (str.length <= 0) {
    return "";
  }
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

let calc = (function () {
  function add(num1, num2) {
    return num1 + num2;
  }
  function div(num1, num2) {
    return num1 / num2;
  }
  function sub(num1, num2) {
    return num1 - num2;
  }
  function mult(num1, num2) {
    return num1 * num2;
  }
  return { add, div, sub, mult };
})();

function caesarCipher(str, shift) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str.codePointAt(i) < "A".codePointAt(0) ||
        str.codePointAt(i) > "Z".codePointAt(0)) &&
      (str.codePointAt(i) < "a".codePointAt(0) ||
        str.codePointAt(i) > "z".codePointAt(0))
    ) {
      result += str.charAt(i);
    } else {
      if (
        str.codePointAt(i) < "A".codePointAt(0) &&
        str.codePointAt(i) > "Z".codePointAt(0)
      ) {
        result += String.fromCharCode(
          str.codePointAt(i) + shift > "Z".codePointAt(0)
            ? str.codePointAt(i) + shift - 26
            : str.codePointAt(i) + shift,
        );
      } else {
        result += String.fromCharCode(
          str.codePointAt(i) + shift > "z".codePointAt(0)
            ? str.codePointAt(i) + shift - 26
            : str.codePointAt(i) + shift,
        );
      }
    }
  }
  return result;
}

function analyzeArray(arr) {
  if (arr.length === 0) return {};
  let average = arr[0];
  let min = arr[0];
  let max = arr[0];
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
    average += arr[i];
  }
  average /= length;
  return { average, min, max, length };
}

module.exports = {
  capitalize,
  reverseStr,
  calc,
  caesarCipher,
  analyzeArray,
};
