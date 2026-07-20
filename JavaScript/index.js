// console.log("HelloWorld");

// let namel = "Nikhil";  // local variable and access within the block or class and its mutable
// name1 = "Rahul";
// console.log(name1);

// const name2 = "Ram"; // constant not change further and it is immutable
// console.log(name2);

// var name3 = "vadodara";  // Global variable, accessible from anywhere
// location = "delhi";
// console.log(location);

// // typeof()

// let game = "Cricket";
// console.log(typeof(game));

// // obect

// let student = {
//     name: "Bhavesh Solanki",
//     address: "Vijay Nagar",
//     state: "Rajasthan",
//     city: "Jodhpur"
// }

// console.log(student.name);
// console.log(student.address);
// console.log(student.state);
// console.log(student.city);
// console.log(typeof(student));

// // Arrays

// const fruits = ["mango", "pineapple","cherry","pear"];
// console.log(fruits);
// console.log(typeof(fruits));

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// // function

// function sum(a, b) {
//     let c = a+b;
//     console.log(c);
// }

// sum(2,5);

// for (let i=0; i<4; i++) {
//     console.log(fruits[i]);
// }


// function Allowed_voter(age) {
//     switch (age) {
//         case 17:
//             console.log("Not Allowed");
//             break;
//         case 19:
//             console.log("Allowed to vote");
//             break;
//         default:
//             console.log("Thanks for vote");
//     }
// }

// let age = 19;

// Allowed_voter(19);
// Allowed_voter(17);
// Allowed_voter(20);

// function Calculate(a, b, operator) {
//     switch (operator) {
//         case "*":
//             console.log(a*b);
//             break;
//         case "+":
//             console.log(a+b);
//             break;
//         case "-":
//             console.log(a-b);
//             break;
//         case "/":
//             console.log(a/b);
//             break;
//         default:
//             console.log("Invalid operator");
//     }

// }

// Calculate(2,3,"+");
// Calculate(2,3,"*");
// Calculate(2,3,"&");

// // FizzBuzz with a twist

// for (let i=1; i<=30; i++) {
//     let num = i;
//     if(num == 13) continue;
//     if(num == 25) break;

//     if (num%3==0) console.log("Fizz");
//     else if(num%5==0) console.log("Buzz");
//     else if(num%3==0 && num%5==0) console.log("FizzBuzz");
//     else console.log(i);
// }

// console.log(5 == "5"); 
// console.log(5 === "5"); // === -> check typeof data if same true else false

// let age = 17;

// let access = age >= 18 ? "Allowed" : "Denied";
// console.log(access);

// Great point! Open source isn't a shortcut to a job, it's a chance to learn, collaborate, and
//  give back to the tools that make our work easier. 
// The career benefits are just the cherry on top.

// let user;
// console.log(user ?? "Guest");  // user is assigned then return user else Guest

// const arr = [3,-1,0,5,-10,8]
// for (let i=1; i<6; i++) {
//     if (arr[i] < 0) continue;
//     console.log(arr[i]);
// }


// let x = 3;
// do {
//     console.log(x);
//     x*=2;
// }while(x<=256);

// const nums = [1,2,3,4];

// for (const x of nums) {
//     console.log(x*x);
// }

// const users = ["Walvekar", "Bhavesh", "Yadav"];
// for (let user of users) {
//     console.log(`User: ${user}`);
// }

// const car = {
//     Brand: 'Block Rock',
//     Model: 'Since Origin of US',
//     Year: '1800 AD'
// }

// for (let cars in car) {
//     console.log(car[cars]);
// }

// const fruits = ["Apple","banana","mango"];

// fruits.forEach(function(fruit,index) {
//     console.log(`fruit ${index} : ${fruit}`)
// });

// const a = [2,4,6];
// const squares = [];

// a.forEach(function(num) {
//     squares.push(num*num)
// });

// console.log(squares);

// let color=["Blue","Black","Green","Violet"]

// console.log(color)
// color[1]="Orange"
// console.log(color);
// color.push("Red")
// console.log(color)

// console.log(color.length)

// for(let i=0;i<color.length;i++){
//     console.log(color[i])
// }

// for(let c of color){
//     console.log(c)
// }

// let items = ['pen','book'];

// items.unshift('bag'); // add element at start, opposite of push


// items.shift(); // remove element from start


// let item = []
// item.push('eat');
// item.push('code');
// item.push('sleep');

// item.shift();


// let messages = ['msg1', 'msg2'];

// messages.unshift('urgent');
// messages.push('msg3');
// messages.shift();

// //splice 

// let arr = ['My','First','Class','this','week'];
// arr.splice(2,2); // deletion => from index 2 remove 2
// arr.splice(0,2,'last'); // remove from 0 index to 2 index and add last
// arr.splice(2,0,'this is'); // add
// arr.splice(2,1,'this is'); // replace
// console.log(arr);

// slice

// console.log(arr.slice(0,5));
// console.log(arr.slice(-1));

// const cart = ['pen','vehicle','book','mouse','charger','fruits'];

// cart.splice(3,0,'bat');
// cart.splice(4,2);
// cart.splice(4,0,'football');
// cart.splice(5,0,'tennis');
// cart.slice(-1,-6);
// console.log(cart);

// function sum(a,b){
//     return a+b;
// }
// sum(4,5);

// let sum2 = (a,b) => a+b;


// console.log(sum(4,5) == sum2(4,5));


// function Greet(name) {
//     return `GoodBye ${name}`;
// }

// let greet = name => `GoodBye ${name}`;

// console.log(Greet('Alpesh') == greet('Alpesh'));

// Oops

// const obj = {
//     name: "Sara",
//     age: 25,

//     regular: function () {
//         console.log("Regular:", this.age);
//     },

//     arrow: () => {
//         console.log("Arrow:", this.age);
//     }

    
// };


// Rest

// function sum(...rest) {
//     let total = 0 ;

//     for (let i=0; i<rest.length; i++) {
//         total += rest[i];
//     }

//     console.log(total);
// }

// sum(10);
// sum(10,20,30,40);

// // Reduce

// function add(...rest) {
//     rest.reduce((total,curr) =>  {
//         return total + curr
//     },0)
// }


// add(10,20,30,40,50);

// function makeSentence(...rest) {
//     console.log(rest.join("-"));
// }

// makeSentence("Hello","I","am","Nikhil")

// // trim

// const input = " Hello World ";

// console.log(input.trim());
// console.log(input.trimStart());
// console.log(input.trimEnd());


// // slice

// const str = "JavaScript";

// console.log(str.slice(0,4));
// console.log(str.slice(-4));
// console.log(str.slice(-6));

// // split

// const s = "I Love You";

// console.log(s.split(" "));
// console.log("a,b,c".split(","));
// console.log("hello".split(""));

// const url = "https://example.com/page";

// console.log(url.includes("example"));
// console.log(url.startsWith("https"));
// console.log(url.endsWith(".com/page"));

// const str = "banana";

// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));
// console.log(str.indexOf("z"));

// function createCounter() {
//     let count = 0;

//     return function() {
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// setTimeout(function() {
//     console.log("hello")
// },8*1000)

// function sayHello() {
//     console.log("hello func runs");
// }

// setTimeout(sayHello,6000);

// let count = 0;

// let clock = setInterval(function() {
//     count += 1;
//     console.log("count: ", count)

// },1000)

// setTimeout(() => {
//     clearInterval(clock);
// },5*1000);

// const clock = setInterval(() => {
//     console.log("This prints every 1 second");
// },1000);

// clearInterval(clock);

// console.log("A");                

// setTimeout(() => {
//     console.log("B");           
// }, 2000);

// setTimeout(() => {
//     console.log("C"); 
// }, 3000);

// arr = [20,40,80,10];
// newArr = [];

// for (let i=0; i<arr.length; i++) {
//     newArr[i] = arr[i] *2
// }

function asyncOperation(resolve, reject) {
    setTimeout(() => {
        console.log("data fetched");
        // resolve("Promise resolved");
        reject("Promise rejected");
    },3000)
}

// promise creation
let p = new Promise(asyncOperation);
console.log("p:",p);

// promise consumption
p.then((data) => {
    console.log("p:",p);
    console.log("data:",data);
})
.catch((error) => {
    console.log("p:",p);
    console.log("error:",error);
})


// wait for 5sec and print "5 sec passed" 
let promise = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log("5 sec passed");
        reject("Promise Rejected")
    },1000)
})

promise.then((d) => {
    console.log("After 5 sec");
    console.log(d);
}).catch((e) => {
    console.log("Error",e);
})

function delayMsg(msg) {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        },3000)
    })
}

delayMsg("Delay Step 1").then(() => {
    delayMsg("Delay Step 2").then(() =>  {
        delayMsg("Delay Step 3")
    })
})

function Sleeping(time) {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`${time} sec taken to passed`);
        }, time*1000)
    })
}

Sleeping(3).then((data) => {
    console.log(data);
    Sleeping(6).then((data) => {
        console.log(data);
    }).catch((error) => console.log(error))
}).catch((error) => console.log(error)) 


// fetch 

fetch("https://dummyjson.com/products")
.then((res) => {
    return res.json();
}).then((data) => {
    console.log(data);
}).catch(e => {
    console.log(e.message);
})


// deepCopy
const original = {
    name: "Rahul",
    info: {
        age: 2,
        class: 6
    }
}

const deepCopy = structuredClone(original)
deepCopy.info.class = 12;

console.log(original)
console.log(deepCopy)

const pairs = [[1,'one'],[2,'two'],[3,'three']]
console.log(pairs)

// SWAP two var without 3rd variable

var a = 2;
var b = 3;

[a,b] = [b,a]
console.log(a,b)


function employee(name, salary, department) {
    this.name = name;
    this.salary = salary;
    this.department = department;

    this.info = function() {
        console.log(`${name} monthly salary is ${salary} and it come from ${department} department`)
    }
}

const s1 = new employee('naresh', 200000, 'Commerce')
s1.info()


function rectangle(width, height){
    this.width = width;
    this.height = height;

    this.getArea = function() {
        console.log('area: ', width*height);
    }
}

const rec = new rectangle(2,3);
rec.getArea()

const rectangle = {
    width: 5,
    height: 3,

    getArea: function(width,height) {
        console.log("area:",width*height)
    }
}

rectangle.getArea()

// Key Values 

const user = {
    name: 'Rahul',
    age: 12,
    class: 6
}

for (let [Key,values] of Object.entries(user)) {
    console.log(`${key} -> ${values}`)
}

// Object => JSON String

const user = {
    name: "Rahul",
    location: "Ahmedabad",
    age: undefined,
    greet: function() {
        console.log("Hi there");
    }
}

console.log(typeof user);
console.log("User: ", user);

let res = JSON.stringify(user);
let res2 = JSON.parse(res);

console.log(res);
console.log(res2);
console.log(typeof res2);

// constructor 
class Student {
    constructor (name, id) {
        this.name = name;
        this.id = id;
    }

    introduce() {
        console.log("Hi, I am "+this.name+ " with id"+ this.id);
    }

    greet() {
        console.log("Hi, "+this.name);
    }

     getAvg(){ 
        return this.marks.reduce((sum, val) => sum + val, 0) / this.marks.length;
    }
}

let s1 = new Student("Alpesh",64);
s1.introduce();

// employee class

class Employee {
    constructor (name) {
        this.name = name;
    }

    greet() {
        console.log("Hi, I'm "+ this.name);
    }
}

let s2 = new Employee("Rohan");
s2.greet();

// 
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}
const mySquare = new Square(4);
console.log(`The area of the square is: ${mySquare.getArea()}`);

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name}, bhau... bhau...`);
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name);
    }
}

const d = new Dog("Alpesh");
d.speak();

class Car {
    constructor (model, year) {
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`This car is a ${this.year} ${this.model} `)
    }
}

let c = new Car ("BMW M4", 1999);
c.displayInfo();

class Rectangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

    area(){
        console.log(`Area: ${this.height*this.width}`);
    }

    parmenter() {
        console.log(`Area: ${2*(this.height+this.width)}`);
    }
}

let rec = new Rectangle(20, 40);
rec.area();
rec.parmenter();

class Temp {
  #c;

  constructor(c) { this.#c = c; }

  get c() { return this.#c; }
  set c(v) { this.#c = v; }

  get f() { return (this.#c * 1.8) + 32; }
  set f(v) { this.#c = (v - 32) / 1.8; }
}

// Usage
const t = new Temp(0);
console.log(t.f); // 32 (Convert C to F)

t.f = 212;
console.log(t.c); // 100 (Reconvert F to C)  

class User {
  static count = 0;

  constructor() {
    User.count++;
  }
  static getCount() {
    return User.count;
  }
}
const user1 = new User();
const user2 = new User();
const user3 = new User();

console.log(User.getCount());

class Employee {
    constructor (name,salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor (name, salary, teamsize) {
        super(name,salary);
        this.teamsize = teamsize;
    }
}

let manager = new Manager("Alpesh", 200000, 20);


function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
  
  this.intro = function() {
    console.log(`My pet name is ${this.name}`);
  };
}

Animal.prototype.speak = function() {
  console.log(`${this.name}: ${this.sound}`);
};

let a1 = new Animal("bob", "barks");
a1.intro();
a1.speak();
