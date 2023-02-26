/*
Variables:
These are containers used to store data in a programming languages. Even in the case of JavaScript, it works in a similar way.
JavaScript is a dynamically typed language, meaning the datatype of variable can be changed at runtime. 
These features are not available in C , and other static typed languages.

example:
*/

let a = 67 //Here, let is a keyword, a is an identifier and 67 is a constant 
console.log(a)
a = "Brayan"
console.log(a)

/*
In the above program , we are initially declaring a variable a by storing integer type data in it, but later we store a string literal into it, 
thus dynamically changes the behavior of the variable at run time 

Rules for variable names:
i) digits, letters, underscores and $ are allowed in a variable name example
let ss_$44 = "Hello" - This will work
   
ii) A variable name can't start with a digit
let 8abc = 28, this will give an error

iii) JavaScript reserved keywords can't be used as variable names
//eg: let var = "hello" - not possible because var is a reserved keyword

// JavaScript is case sensitive i.e., two variable x and X are two seperate entities. It is recommended to avoid two same variable even though 
they have different case in a program to improve readibility
*/

/*
*********Var, Let and Const ***************************************************************************************************************************************
The three main keywords used to declare indentifiers in JavaScript are var, let , and const 

var - was used to declare vairables in JavaScript before the advent of ES6 (EcmaScript 6, relased in 2015). 
It's not a good practice to use var in the programs because it behaves like a global variable and can be changed under any scope.
It can be declared and redeclared several times in the program
*/

var a = "hello"
var a = 67 // here var a is being redeclared and this will not throw an error.

/*while working on a large codebase, var keyword is avoided because it provides high flexibility to any user to change the value easily. 
Due to this, bugs will be difficult to track in the program */

/*let - this keyword is used to declare variables that are declared only once, and can't be redeclared again in the same scope
These are block scoped variables, meaning, their scope is confined to the block they are declared in*/

let b  = 67
// console.log(b)
{
  let b = 55 //redeclaring in different block is allowed. Makes a new copy 
  console.log(b) // here it prints 55
}
console.log(b) //here it prints 67, because it is in the main scope

var e = "hello"
{
  var e = "hi" // Here we are redeclaring a var, and this does not make a new copy
  console.log(e)
}

console.log(e) // here also, hi will be printed therefore we are changing the value of e from the inner block.


//const 
//const is a keyword used to declare values that can't be updated or redeclared in the program 
//They must be intialized during declaration unlike const and var 


const k = "hello"
k = "ee" This is not possible because const can't be updated









