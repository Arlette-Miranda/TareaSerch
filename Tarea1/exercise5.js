///////////////////////////////////////////////////
/* 
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log("Ejercicio 5");

// Write a command that prints out all of the people in the list.
console.log("Las personas en la lista son: " + people.join(", ") + ".");

// Write the command to remove "Dani" from the array.

people.splice(1,1);
console.log("Si quitamos a 'Dani' del lista, tenemos: " );
console.log( people.join(", ") + ".");

// Write the command to remove "Juan" from the array.

people.splice(2,1);
console.log("Si quitamos a 'Juan' del lista, tenemos: ");
console.log( people.join(", ") + ".");

// Write the command to move "Luis" to the front of the array.

people.splice(1,1);
people.unshift("Luis");
console.log("Si movemos a 'Luis' al inicio del lista, tenemos: " );
console.log( people.join(", ") + ".");

// Write the command to add your name to the end of the array.

people.push("Arlette");
console.log("Si agregamos mi nombre al final del lista, tenemos: "); 
console.log( people.join(", ") + ".");

// Using a loop, iterate through this array and after 
// console.log "Maria", exit from the loop.

console.log("Podemos mostrar a los elementos que estén hasta 'Maria'.");

for(let i=0; i < people.length; i++){
    console.log(people[i]);
    if (people[i]=="Maria"){
      break;
    } 
};

//Write the command that gives the indexOf where "Maria" is located.
console.log("La posición de 'Maria' en el arreglo es: ");
console.log(people.indexOf("Maria"));

//At the end of the exercise, there should be 4 people in the array.
console.log("Nuestroa lista final es: " + people.join(", ") + ".");
