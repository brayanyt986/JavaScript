/*Operators and expressions
Operators allow us to manipulate data. Any statement that has a logical value of True or False is an expression. 

JavaScript contains arithmetic, assignment, relational , logical, and bitwise operators and ternary operator

Arithmetic operators are:
+(addition)
-(subtraction)
/(division)
%(modulus)
*(multiplication)
**(exponential) a**b = a raised to the power b
++(increment)
--(decrement)
*/


let a  = 23
let b = 2
console.log("a + b = ",(a+b)) //here and b are operands and + is the operator
console.log("a - b = ",(a-b))
console.log("a / b = ",(a/b)) // this gives the answer in float 
console.log("a * b = ",(a*b))
console.log("a % b = ",(a%b))
console.log("a ** b = ",(a**b))


/*Increment and decrement operators
pre increment = ++a = increment the value first and then use in expression
pre decrement = --a = decrement the value first and then use in expressions 

consider a = 10

--a + b // Here the value of a is decremented , i.e., it becomes 9 and then is used in the expression
--a + b + d + k //Here the value of a is further decremented and becomes 8

post increment = a++ =  use in expression and then increment the value 
post decrement = a-- = use in expression and then decrement the value 


consider a = 10
a++ + b // Here the value used in expression is 10, but once this line is executed , it becomes 11
a++ + b + k//Here the value of a used is 11, but once this line is executed ut becomes 12
*/



a = 10
console.log("initial value of a",a) // here it prints 10
console.log("a++",a++) //here it prints 10, but then value becomes 11
console.log("a++",a++) //here it prints 11, but value becomes 12
console.log("++a",++a) // here value becomes 13 and is printed
console.log("a++",a++) //here value printed is 13 but value then becomes 14
console.log("a",a)//here it prints 14


/*
Assignment operators 
= (Assignment operator)
short hand assignments:
a += 2 is same as a = a+2
a -= 2 is same as a = a-2
a /= 2 is same as a = a/2
a *= 2 is same as a = a*2
a **= 2 is same as a = a**2
*/

a = 12
console.log(a+=2) // a+2 = 14
console.log(a-=2) // a-2 = 12
console.log(a/=2) // a/2 = 6
console.log(a*=2) // a*2 = 12
console.log(a**=2) // a = a**2 = 144

/*Relational operators
>= (greater than or equal to)
<= (less than or equal to)
!= (not equal to)
== (equal to)
> (greater than)
< (less than)
=== (triple equals to)
!== (triple not equals to)
*/

a = 12
b = 15
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a!=b)
console.log(a==b)
 console.log ("******")
let k = "12"
console.log(a==k) // here a is a number 12, and k is a string 12 but == gives value as true, and  === gives value as false
console.log(a===k)
console.log(a!=k) // same thing happens here
console.log(a!==k)




/*Logical operators

Used to club the values of two expressions and evaluate them.

&& = logical and
|| = logical or
! = NOT or complement
will explore more about them in the coming programs

*/
console.log(!true)
console.log(1 && 7)
console.log(1 || 2)


/*  
Ternary operator : This operator is called ternary operator because it works with three operands

(expression) ? (True block) : (False block)

consider a = 10, b = 8

(a > b) ? "a is greater than b" : "b is greater"

*/


a = 12
b = 16

console.log(a > b? "a is greater" : "b is greater")


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












