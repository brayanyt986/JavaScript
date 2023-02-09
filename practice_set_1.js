/*
This practice set in intended to understand and apply the concepts of JavaScript learnt so far 

1) Create a variable of type string and try to add a number to it 
2) User type of operator to find the data type of the string in last question
3) Create a const object in Javascript, can you change it to hold a number later
4) Try to add a new key to a const object the JavaScript, were you able to do it ?
5) Create a JS program to create a word meaning dictionary of 5 words
*/


let a = "hello"
 a = a + '1'
a = a + 133444 //Javascript internally converts the number to a string and adds
console.log(typeof a)
console.log(a)

const items = {
      "name" : 67,
}
console.log(items)
items["name"] = 55
items["car"] = "Mercedes"
console.log(items)
// items = { // we can't use the assignment operator later with a const object once it has been initialized 
//   "name" : 32
// }
// console.log(items)


const dictionary = {
  Adulting : "The action of becoming or acting like an adult",
   Contactless : "not having to physically touch or interact with people",
    Quaranteen : "a teenager during the COVID-19 pandemic"
}


console.log(dictionary)


console.log(dictionary.Adulting) // object keys can be accessed by dot operator or brackets
