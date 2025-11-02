// 1. Introduction Example
console.log("Hello JavaScript");

// 2. Variables Example
var x = 10;
let y = 20;
const PI = 3.14;
document.write(`var x = ${x}, let y = ${y}, const PI = ${PI}<br>`);

// 3. Data Types Example
let name = "Raj";
let age = 25;
let isStudent = true;
let empty = null;
let notDefined;
let big = 12345678901234567890n;
document.write(`name: ${name}, age: ${age}, isStudent: ${isStudent}, empty: ${empty}, notDefined: ${notDefined}, big: ${big}<br>`);

// 4. Operators
let a = 10, b = 5;
document.write(`a + b = ${a+b}, a > b = ${a>b}, a === "10" = ${a==="10"}<br>`);

// 5. Control Flow
let num = 2;
if(num === 1) document.write("One<br>");
else if(num === 2) document.write("Two<br>");
else document.write("Other<br>");

switch(num) {
  case 1: document.write("Switch: One<br>"); break;
  case 2: document.write("Switch: Two<br>"); break;
  default: document.write("Switch: Other<br>");
}

// 6. Loops
for(let i=0;i<5;i++) document.write(`for loop: ${i}<br>`);
let arr = [10,20,30];
for(let val of arr) document.write(`for...of: ${val}<br>`);

// 7. Functions
function add(a,b){ return a+b; }
let mul = (a,b) => a*b;
document.write(`add(2,3) = ${add(2,3)}<br>mul(2,3) = ${mul(2,3)}<br>`);

// 8. Scope & Hoisting
var globalVar = "I am global";
function testScope(){
  let localVar = "I am local";
  document.write(globalVar + ", " + localVar + "<br>");
}
testScope();

// 9. Arrays
let arrNums = [1,2,3];
arrNums.push(4);
let doubled = arrNums.map(x=>x*2);
document.write(`Array: ${arrNums}, Doubled: ${doubled}<br>`);

// 10. Objects
let person = {name:"Sara", age:22, greet:function(){return "Hello " + this.name;}};
document.write(person.greet() + "<br>");

// 11. Strings
let str = " JavaScript ";
document.write(`Length: ${str.length}, Trim: ${str.trim()}, Uppercase: ${str.toUpperCase()}, Slice: ${str.slice(0,4)}<br>`);

// 12. Math & Date
document.write(`Random: ${Math.random()}, Floor(3.9): ${Math.floor(3.9)}<br>`);
let now = new Date();
document.write(`Year: ${now.getFullYear()}<br>`);

// 14. Events
document.getElementById("btnEvent").addEventListener("click",()=>alert("Button Clicked!"));

// 15. Timing Functions
function showTimeout(){
  setTimeout(()=>document.getElementById("timeout").innerHTML="Hello after 2 seconds!", 2000);
}

// 16. Error Handling
function testError(){
  try{
    let x = y+1;
  }catch(e){
    document.getElementById("error").innerHTML="Error: "+e.message;
  }finally{
    console.log("Error handling done.");
  }
}

// 18. Fetch API
async function loadUser(){
  let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let data = await res.json();
  document.getElementById("fetchUser").innerHTML=`Name: ${data.name}, Email: ${data.email}`;
}

// 19. Local Storage
function saveLS(){
  let val = document.getElementById("localInput").value;
  localStorage.setItem("username", val);
}
function loadLS(){
  document.getElementById("localOutput").innerHTML = localStorage.getItem("username");
}


