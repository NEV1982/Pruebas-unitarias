const isUpperCase = require("../utils/esmayuscula");

describe('mayuscula', () => {
    test.each`
      firstValue | expectedResult    
      ${"hola"}      | ${false}
      ${"perro"}     | ${false}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue,)).toBe(expectedResult);
    });
  });
