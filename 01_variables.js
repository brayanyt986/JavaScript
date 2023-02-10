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


