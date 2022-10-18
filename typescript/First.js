/*
Javascript = NO DATATYPES
Javascript = NO COMPILER. Is an interpreted language
Typescript = Javascript + Compilation + Datatypes
Compilation = When code is converted to Binary language (1011011)
Transpilation = When code is coverted to readable language
In typescipt: Code is converted (transpiled) to JAVASCRIPT
*/
var n1 = 100;
var n2 = 200;
var n3 = n1 + n2;
console.log("Value of n3 = " + n3);
var hisname = "Satish";
var obj = {
    k1: 100,
    k2: "ABC",
    k3: [10, 20, 30]
};
var isTrue = true;
var arrNames = ["Satish", "Kumar", "sky"];
function Greet(pName) {
    console.log("Namaste " + pName);
}
//call the Greet()
Greet("Satish");
console.log(hisname);
console.log(obj);
console.log("value of k3 is:" + obj.k3[1]);
console.log(isTrue);
console.log(arrNames);
