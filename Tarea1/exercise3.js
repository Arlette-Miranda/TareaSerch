//////////////////////////////////////////////////////////////////////////////
/*
Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

console.log("Ejercicio 3");
const array = [1, 2, 3, 4] ;

console.log("Suma de " + array.join(" + "));
sum = array.reduce(
    (sum,currentValue) => sum + currentValue
);
console.log(sum);

console.log("Multiplicación de " + array.join(" x "));
product = array.reduce(
  (product,currentValue) => product * currentValue
);
console.log(product);