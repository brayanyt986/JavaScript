/* 
Strings in JavaScript 

Strings are a way to store and manipulate text in JavaScript. It is nothing but a collection of characters 

A string can be created using single quotes, double quotes and also a template literal 


*/

// Double quote string 

let item = "Apple"
console.log(item)
console.log(item.length) //.length is a method that returns the number of characters in a string 

//With the help of indexing, we can access individual characters of a string. In indexing, the couting always starts from 0.

console.log(item[0])
console.log(item[1])
console.log(item[2])
console.log(item[3])
console.log(item[4])


// Indexing is normally used to access the values stored in an array, which will be covered in the later programs 

//Single quote string 

let name = 'Brayan'
//Unlike other programming languages, JavaScript treats a string with single and double quotes equally 

console.log(name)
console.log(name.length)

//But we can't mix up using single quote and double quote
// let name = "Rayan'


/*
Template literal : This is another way of creating strings using the backtick character to create dynamic strings. This is used a lot in modern JavaScript 
*/
//We can use template literals with or without dynamic changes 

let school = `International School`

console.log(school)
console.log(school.length)



let girl1 = "Ria"
let sentence = `Her name is ${girl1}` //Here we are dynamically replacing girl1 with the variable girl1 that is declared 
console.log(sentence)

//Using this technique, it makes us much easier to repeatedly use different variables in a string and change them dynamically 


/*Escape Sequences / Characters 
Whenever we need to use single or double inverted quotes in a string repeatedly, we use escape characters. 
Sometimes a single or double inverted quote might be a part of the string we want to print, but due to the syntax of declaring a string , it might confuse JavaScript. 
*/



let house = "This is my \"house\""
console.log(house)
let car = 'This is my \'house\''
console.log(car)


//If we want to introduce new line into the string, we cam use \n, and \t for tab space 

console.log("Bray\nan")
console.log("Bray\tan")






