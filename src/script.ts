// array
// let mixed = [1, 'two', 3, true, {}];

// mixed.push({
//     name: 'four',
//     value: 4
// });

// console.log(mixed);

// object
// let person= {
//     name: 'John',
//     age: 30,
//     isEmployed: true,

// };

// person.county = 'USA';

// let a: string;
// let b: number;

// b= "sfs"

// array

// let a: (string | number)[] = [];

// a.push(1);

//object

// let c: {
//     name: string;
//     age: number;
//     isEmployed: boolean;
//     country?: string;
// }

// c = {
//     name: 'John',
//     age: 30,
//     isEmployed: true,
//     country: 'USA'
// }

// console.log(c)

// let a: any[] = [];

// a.push(1);
// a.push('two');
// a.push(true);

// console.log(a);

// const myFunc = (a: number, b: number , c: string ="true") => {
//     return a + b ;
// };

// myFunc(4, 5, );

// TypeScript example with function and object types

// type stringOrNumber = string | number;
// type userType = {
//   name: string;
//   age: number;
// };

// const userDetails = (
//   id: stringOrNumber,
//   user: {
//     name: string;
//     age: number;
//   }
// ) => {
//   console.log(`User ID: ${id}, name is ${user.name}, age is ${user.age}`);
// };

// const sayHello = (user: userType) => {
//   console.log(`Hello ${user.name}, you are ${user.age} years old.`);
// };

// let add: (x: number, y: number, z: string) => void;

// add = (a: number, b: number) =>{
// return a + b;
// }

// let calculate: (a: number, b: number, c: string) => number;

// calculate = (x: number, y: number, z: string) => {
//   if (z === 'add') {
//     return x + y;
//   }
//   else{
//     return x - y;
//   }
// }

// console.log(calculate(5, 3, 'minus')); // Output: 8
// let userDetails: (
//   id: number | string,
//   userInfo: {
//     name: string;
//     age: number;
//   }
// ) => void;

// userDetails = (
//   id: number | string,
//   userInfo: {
//     name: string;
//     age: number;
//   }
// ) => {};

// class Player {
//   name: string;
//   age: number;
//   county: string;

//   constructor(n: string, a: number, c: string) {
//     this.name = n;
//     this.age = a;
//     this.county = c;
//   }
//   play() {
//     console.log(`${this.name} from ${this.county} is playing at the age of ${this.age}.`);
//   }
// }

// import { Player } from "./classes/Player.js";
// import { IsPlayer } from "./interfaces/IsPlayer.js";
// const alex = new Player("alex", 40, "Bangladesh");
// const david = new Player("david", 34, "Bangladesh");
// let jason: IsPlayer;

// jason = new Player("json", 36, "Bangladesh");

// console.log(jason.name);
// const players: IsPlayer[] = [];

// players.push(david);
// players.push(alex);

// interface RectangleOptions {
//   width: number;
//   length: number;
// }

// function drawRectangle(options: RectangleOptions) {
//   let width = options.width;
//   let length = options.length;
// }

// let threeDOptions = {
//   width: 20,
//   length: 30,
//   height: 10,
// };

// drawRectangle(threeDOptions);
