// Write a function that takes one or more arrays and returns a new array of unique values in the order of the original arrays.
// Examples:
// If one array is passed of [1,3,2,2] then the array returned should be [1,3,2]
// If two arrays are passed of [1,3,2], [5,2,1,4] then array returned array should be [1,3,2,5,4]

const uniteUnique = require("./solution");

describe("uniteUnique function", () => {
  test("uniteUnique should return an array", () => {
    const result = uniteUnique([1, 3, 2]);
    expect(Array.isArray(result)).toBe(true);
  });

  test("WHEN '[1, 3, 2, 2]' is passed to uniteUnique THEN '[1, 3, 2]' is returned", () => {
    const result = uniteUnique([1, 3, 2, 2]);
    expect(result).toEqual([1, 3, 2]);
  });

  test("WHEN '[1, 2, 3], [5, 2, 1]' is passed to uniteUnique THEN '[1, 2, 3, 5]' is returned", () => {
    const result = uniteUnique([1, 2, 3], [5, 2, 1]);
    expect(result).toEqual([1, 2, 3, 5]);
  });

  test("WHEN '[1, 3, 2, 3], [5, 2, 1, 4], [2, 1]' is passed to uniteUnique THEN '[1, 3, 2, 5, 4]' is returned", () => {
    const result = uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);
    expect(result).toEqual([1, 3, 2, 5, 4]);
  });
});
