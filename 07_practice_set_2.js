/* Practice set 2 contains questions of practice for concepts like operators and expressions, conditional statements. 

1) User logical operators to find if the age of a person is lies between 10 and 20

2) Demonstrate the use of switch case statements in JavaScript 

3) Write a program to find if a number is divisible by 2 and 3

4) Write a program to find if a number is divisible by either 2 or 3

5) Print you can drive or you cannot drive based on age if it's greater or less than 18 using ternary operator 

*/ 


let age = prompt("Enter your age")
age = Number.parseInt(age)
if(age>10 && age<20){
  console.log("Age lies between 10 and 20")
}
else{
  console.log("Does not lie in range")
}


let marks = prompt("Pleas enter the marks")
marks = Number.parseInt(marks)

switch(marks){
  case 30:
  console.log("Just Passed")
  break;
    
  case 60:
  console.log("Average")
  break;

  case 80:
  console.log("Good")
  break;

  case 90:
  console.log("Excellent")
  break;

  default:
  console.log("Invalid marks")
}



let num = prompt("Enter a number")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
  console.log("Entered number is divisible by both 2 and 3")
}
else{
  console.log("Entered number is not divisible by both 2 and 3")
}


num = prompt("Enter a number")
num = Number.parseInt(num)
if(num%2==0 || num%3==0){
  console.log("Entered number is divisible by 2 or 3")
}
else{
  console.log("Entered number is not divisible by 2 or 3")
}



let age = prompt("Enter your age")
age = Number.parseInt(age)
console.log(age>18 ? "Can Drive" : "Cannot Drive")
  
