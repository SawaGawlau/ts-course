"use strict";
// decorator factory
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) { };
}
// decorators execute when your class is defined(when js finds class definition)
// not when it is initiated - not when you use to instantiate an object
let Person = class Person {
    constructor() {
        this.name = 'sawa';
        console.log('creating new person...');
    }
};
Person = __decorate([
    Logger('LOGGING PERSON') // we need to execute it as a function with ()
], Person);
const pers = new Person();
console.log(pers);
