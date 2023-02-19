/* 
Practice set 4 - This set will explore questions regarding string and string functions

1) What will the following print in Javascript? 
console.log("Brayan\"")

2) Explore the startswith , endswith , and includes functions of a string 

3) Write a program to convert a given string to lower case.

4) Extract the amount out of this string 
string = "Please give Rs 1000"

5) Try to change a character of an already existing string. Were you able to do it ?

*/


let name1 = "Brayan"
console.log(name1.toLowerCase())

let print = "Brayan\""
console.log(print.length)

let sentence = "I am a boy"
console.log(sentence.startsWith("I")) //checks if the string starts with the given sub string  
console.log(sentence.includes("I",3)) // Starts the search from the 4th index of the string and check if the string includes the given substring 
console.log(sentence.endsWith("o")) // checks if the string ends with the given sub string 





let statement = "Please give Rs 1000"
let amount = statement.slice("Please give Rs ".length)
amount = Number.parseInt(amount)
console.log(typeof amount)