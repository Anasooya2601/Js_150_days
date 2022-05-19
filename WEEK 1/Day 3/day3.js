
// const n = 1; 
// n = 2; // Uncaught type error
// let n = 2 // Already assigned
const myVar = "someValue";
const myObj = {"name": "nameValue", "age": 14}

console.log(myVar); //someValue
console.log(myObj.name); //nameValue

myObj.name = "newNameValue"; 
console.log(myObj.name); //newNameValue

myObj.someNewAttr = "newAttrValue";
console.log(myObj.someNewAttr); //newAttrValue

myObj = {"newNameAttr": "newNameValue"}; //Uncaught TypeError: Assignment to constant variable.
console.log(myObj.newNameAttr);

myVar = "newValue"; //Uncaught TypeError: Assignment to constant variable.
console.log(myVar);