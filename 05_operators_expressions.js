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










