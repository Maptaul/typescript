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
class Player {
    name;
    age;
    country;
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is playing in ${this.country}.`);
    }
}
const alex = new Player("Alex", 37, "Bangladesh");
const david = new Player("David", 35, "Bangladesh");
console.log(alex.name);
const Players = [];
Players.push(alex);
Players.push(david);
export {};
//# sourceMappingURL=script.js.map