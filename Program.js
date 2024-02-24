const kelvin = 293;
//declaring the kelvin temperature 
const celsius = kelvin - 273;
//finding out the celsius temperature

let fahrenheit = celsius * (9/5) + 32;
//formula for fahrenheit temperature

fahrenheit = Math.floor(fahrenheit);
//rounding up to nearest value

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees newton`);



