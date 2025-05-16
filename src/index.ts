/// <reference types="webpack-env" />


import { MyClass } from "./random";

console.log("App started");
console.log("App started");

const myClass: MyClass = new MyClass(11, 2);
console.log(myClass);

if (module.hot) {
  module.hot.accept();
} 

