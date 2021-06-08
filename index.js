/* 
global scope: declare the variable in the root of the file that I'm using it in
Ex: the "var" is outside of the function so it's in the root of the file
can use it whereever in the doc
*/

var number = 10;

function calc() {
return number;
}

/*
local scope: declare the var inside the 
function & also return it 
*/

console.log(calc());

function add() {
var number1 = 1;
return number1;
}

console.log(add());
