///////////////////////////////////////////////////////////////////////////////////
//Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

console.log("Ejercicio 4");
console.log("En los arreglos dados se tiene en común: ");

function sameElement(array1,array2){
  for( let j=0 ; j < array1.length; ++j){
    
    if( array2.includes(array1[j])){
      result = array1[j];
      console.log(result);
    };
  };
};

sameElement(student1Courses,student2Courses);

////// Otra opción ////
const commonCourse2 = student1Courses.filter(course1 => student2Courses.includes(course1));
console.log(commonCourse2)