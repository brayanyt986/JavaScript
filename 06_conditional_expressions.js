/* Prompts and Alerts  
Prompt is used to ask the user for a value. This can be executed from the console tab in the browser
*/
x = prompt("Enter any value")
  
/* the value accepted by prompt is always a string. If we enter a number , it takes it as a string 


Alert is used to display a message to the alert message to the user*/

alert("Warning message")


/* 
Conditional statements

simple if - acts like a conditional statement that performs a set of action for true case

syntax:
if(exp){

}

*/


a = 12
if(a > 0){
  console.log("a is positive")
}


/*else if - this is different from simple if, because it has a block that will handle the false case

syntax: 
if(exp){

}
else{

} */


a = 12
if(a > 0){
  console.log("a is positive")
}
else{
    console.log("a is negative")
}

/*
else - if ladder: Used to check multiple conditions 

syntax: 
if(exp){

}
else if(exp2){

}
else if(exp2){

}
else{

}

The control keeps on checking the conditions untill one of them evaluates to true, once that happens, it comes out of this ladder 
*/


a = 12
if(a == 0){
  console.log("a is zero")
}
else if (a>0){
    console.log("a is positive")
}
else {
  console.log("a is negative")
}


/* switch statement
This is similar to the else if ladder, here we pass a parameter to the switch case upon which the control depends, we do the matching of it's value for different cases, and if it satisfies any case, we perform the true block and come out of the switch statement

Every case needs to have a break for it to work properly
further exersices will have questions related to switch case


syntax:

switch(exp){

case a:
statement
break

case b:
statement
break

case c:
statement
break

default:
statement
}
*/

let marks = 30
switch(marks){
  case 30:
  console.log("Marks are 30")
  break;

  case 40:
  console.log("Marks are 40")
  break;

  case 50:
  console.log("Marks are 50")
  break;

  default:
  console.log("Invalid marks")  
}

