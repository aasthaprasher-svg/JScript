// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// javascript is a dynamically typed language this means that types are determined at runtime and you don't have to explicitly declare them

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 3535668762876876n

// Reference(Non Primitive)

// Array, Object, Functions

const heros = ["ironman", "spiderman", "thor"];
let myOjb = {
    name: "Aastha",
    age: 19
}

const myFunction = function(){
    console.log("Hello World")

}

console.log(typeof anotherId);