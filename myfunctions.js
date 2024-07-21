"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// addTwo(5)  // or we can give a string as a argumant like addTwo('5) bacause we dont declear so the type of num is any this is not good pratices so 
function addTwo2(num) {
    return num + 2;
}
// addTwo(5) 
// now we can't give string or any data type as a argument to addTwo2 accept number because we defime num to number
// lets define a functions return type 
function addTwo3(num) {
    return num + 2;
}
// by aerow functions
var getHello = function (name) {
    return name + 'Hello';
};
var arrey = ['Aniket', 'hello', 2];
var returnedVal = arrey.map(function (arreyVal) {
    return arreyVal;
});
console.log(returnedVal);
