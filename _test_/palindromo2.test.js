const palindromo = require("../utils/palindromo");

describe('palindromo', () => {
    test.each`
      firstValue | expectedResult    
      ${"hola"}  | ${"aloh"}
      ${"perro"} | ${"orrep"}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });
