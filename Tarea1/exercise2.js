//////////////////////////////////////////////////////////////////////////////////////////////
/*  Exercise #2 (sugerencia map())
  Write a function that:
    -Takes in an array of numbers.
    -Doubles the value of each number in the array.
    -Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/
console.log("Ejercicio 2");
const numbers = [1, 2, 4, 5] ;
console.log("El doble de " + numbers + " es: ");

////// Opción 1////////
console.log("Opción 1");

const duplicateNumbers = ( currentValue, index, array )=>{
  return currentValue * 2;
};

const dobleNumber = numbers.map(  duplicateNumbers  );
console.log(dobleNumber);

////// Opción 2////////
console.log("Opción 2");
const duplicateNumber1 = numbers.map( currentValue => currentValue *2);
console.log(duplicateNumber1);