const kelvin = 293; //temperature in kelvin
var celsius = kelvin - 273; //temperature in celsius
var fahrenheit = Math.floor(celsius * (9/5) + 32); //temperature in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);