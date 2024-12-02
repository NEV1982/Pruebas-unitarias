const palindromo = require("../utils/palindromo");

test("comprobar reverse 1", () => {
     expect(palindromo("hola")).toBe("aloh")})

test("comprobar reverse 2", () => {
    expect(palindromo("hola mundo")).toBe("odnum aloh")})