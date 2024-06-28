 ////////////////////////////////////////////////////////////
//OPTIONAL: Exercise # 6
//Write a function that performs the bubble algorithm.
//Input [3, 6, 12, 5, 100, 1]
//Output [1, 3, 5, 6, 12, 100]

const input = [3, 6, 12, 5, 100, 1];

/// Opción 1
input.sort(function (a, b) {
  return a - b;
});
console.log(input);

/// Opción 2
console.log( input.sort( (a, b) => a - b) );