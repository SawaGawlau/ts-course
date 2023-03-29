"use strict";
// Basic Types
let id = 2;
let company = 'Sawka';
let isPublishes = true;
let something = 'anyTypeMightBeHere';
// array that only contains numbers
let ids = [1, 2, 3, 4, 5];
// Tuple
let person = [1, 'sawa', true];
// Tuple Array
let employee; // array of tuples
employee = [
    [1, 'sonia'],
    [2, 'soncia'],
    [3, 'soncia-loncia']
];
// Union
let pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
const sonia = {
    id: 28,
    name: 'sonia'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(a, b) {
    return a + b;
}
// console.log(addNum(1, 2))
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => y + x;
const sub = (x, y) => y - x;
// Classes are used to create objects
class Employee {
    // when we initialize object Person the constructor runs:
    constructor(id, name) {
        ;
        (this.id = id), (this.name = name);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Sawka = new Employee(1, 'Sawka');
console.log(Sawka.register());
