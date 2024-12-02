const isUpperCase = require("../utils/esmayuscula");

test("comprobar mayuscula True", () => {
     expect(isUpperCase("HOLA")).toBe(true)})

test("comprobar mayuscula False", () => {
    expect(isUpperCase("hola")).toBe(false)})