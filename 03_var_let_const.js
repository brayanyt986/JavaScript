/*
The three main keywords used to declare indentifiers in JavaScript are var, let , and const 

var - was used to declare vairables in JavaScript before the advent of ES6 (EcmaScript 6, relased in 2015). 
It's not a good practice to use var in the programs because it behaves like a global variable and can be changed under any scope.
It can be declared and redeclared several times in the program
*/

var a = "hello"
var a = 67 // here var a is being redeclared and this will not throw an error.

//while working on a large codebase, var keyword is avoided because it provides high flexibility to any user to change the value easily. Due to this, bugs will be difficult to track in the program 

//let - this keyword is used to declare variables that are declared only once, and can't be redeclared again in the same scope
// These are block scoped variables, meaning, their scope is confined to the block they are declared in 

let b  = 67
// console.log(b)
{
  let b = 55 //redeclaring in different block in allowed. Makes a new copy 
  console.log(b) // here it prints 55
}
console.log(b) //here it prints 67

var e = "hello"
{
  var e = "hi" // Here we are redeclaring a var, and this does not make a new copy
  console.log(e)
}

console.log(e) // here also, hi will be printed therefore we are changing the value of e from the inner block.


//const 
//const is a keyword used to declare values that can't be updated or redeclared in the program 
//They must be intialized during declaration unlike const and var 


/*const k = "hello"
k = "ee" This is not possible because const can't be updated
*/

console.log(w)
{
  var w = 23
}
console.log(w)



