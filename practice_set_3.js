/* 
This practice set contains questions regarding loops and functions

1) Write a program to print the marks of the student from an object using the normal for loop 
object = {Brayan : 98, Rayan : 97}

2) Write the program in Q1 using for in loop 

3) Write a program to print try again until user enters the correct number 

4) Write a function to find the mean of 5 numbers
*/


const marks = {
  Brayan : 98, 
  Rayan : 97,
  Ria : 100
}


for(let i=0;i<Object.keys(marks).length;i++){
  console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
}




for (a in marks){
  console.log("The marks of " + a + " is " + marks.a);
}



let correct_number = 15
let entered_number = prompt("Please enter a number")
entered_number = parseInt(entered_number)

while(entered_number != correct_number){
  entered_number = prompt("Please enter a number")
  entered_number = parseInt(entered_number)
}
console.log("User entered correct number")




const mean_numbers = (a,b,c,d,e) => {
  let sum = a+b+c+d+e
  return sum/5
}

console.log(mean_numbers(1,2,3,4,5))











