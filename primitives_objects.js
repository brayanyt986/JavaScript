/*
Datatypes: These are the different types of data that can be supported by a programming language. In JavaScript, we have 7  primitive data types
 
i) Null
ii) Number 
iii) Boolean 
iv) BigInt
v) String
vi) Symbol
vii) Undefined

*/


let a = null //Here we are explicitly saying that the value contained in 'a' is empty 
let b = 344 // we are storing a number, so the datatype is number 
let c = true // we are storing a boolean value (True or False)
let d = BigInt("233") + BigInt("2") //BigInt value, we are adding 233 and 2
let e = "Brayan" //String value
let f = Symbol("This is a symbol") //Storing a data of type symbol
let g = undefined  //g is undefined, which means, it does not contain any value yet. It may get a value in the future
let h //this by default will be of type undefined

console.log(a,b,c,d,e,f,g)


/*
Non primitve data types are objects in JavaScript.Very similar to dictionary in Python. Objects are nothing but key value pairs 
*/


const item = { // declaring an object
  "Name" : "Brayan",
  "Age" : 22,
  "Gender" : "Male"
}

console.log(item["Age"]) //printing a value using the key 