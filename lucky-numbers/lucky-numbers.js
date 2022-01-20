// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let newArr1 = array1.join("");
  let newArr2 = array2.join("");
  let intArray1 = Number(newArr1);
  let intArray2 = Number(newArr2);
  return intArray1+intArray2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const newValue = value.toString().split("").reverse();
  const joinValue = newValue.join("");
  if (Number(joinValue) === value) {
    return true
  } else {
    return false
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return "Required field";
  }
  return Number(input) ? "" : "Must be a number besides 0";
}
