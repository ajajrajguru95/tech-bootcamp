// script.js

console.log("welcome to script.js");

// --- Utility to Capture Console Output ---
const consoleOutput = document.getElementById('console-output');
const logToHTML = (message) => {
    // Stringify objects/arrays for readable output
    const output = typeof message === 'object' && message !== null ? JSON.stringify(message, null, 2) : String(message);
    consoleOutput.textContent += output + '\n';
    console.log(message); // Still log to the actual console
};
logToHTML('--- JavaScript Demo Start: Check the sections below for results ---');

// --- 1. Introduction ---
// (Already covered by the initial logToHTML call)

// --- 2. Variables & Constants ---
var x = 10;
let y = 20;
const PI = 3.14;

console.log(x,y,PI);

//PI = 3.15;
//var x = 25;
y = 35; // prevents accidental redeclarations

console.log(x,y,PI);


function test_var(){
    let x = 30;
    let y = 40;

    document.getElementById('var_print').innerHTML = 'print:'+x;

    document.getElementById('var-const-demo').innerHTML += `<br>Values in JS: x=${x}, y=${y}, PI=${PI}`;
    logToHTML(`2. var x: ${x}, let y: ${y}, const PI: ${PI}`);

}

 document.getElementById('var_print').innerHTML += '<br>print:'+x;

test_var()

document.getElementById('var-const-demo').innerHTML += `<br>Values in JS: x=${x}, y=${y}, PI=${PI}`;
logToHTML(`2. var x: ${x} , let y: ${y}, const PI: ${PI}`);

// --- 3. Data Types ---
let name = "Raj";
let age = 25;
let isStudent = true;
let empty = null;
let notDefined;
document.getElementById('data-type-demo').textContent = 
    `Demo: Name(${typeof name}), Age(${typeof age}), Null(${typeof empty}), Undefined(${typeof notDefined})`;
logToHTML(`3. Primitive Types: String: "${name}", Number: ${age}, Boolean: ${isStudent}`);

// --- 4. Operators ---
let a = 10;
let b = 5;
let result = a + b; // Arithmetic

let c = a + b;

console.log(c);

let isEqual = a === "10"; // Strict Comparison
document.getElementById('operators-demo').textContent = 
    `Demo: a+b = ${result}, a === "10" is ${isEqual}`;
logToHTML(`4. Operators: ${a} > ${b} is ${a > b} (Comparison)`);

// --- 5. Control Flow ---
let num = 2;
let controlFlowResult = "";
if (num === 1) {
    controlFlowResult = "test";
} else if (num === 2) {
    controlFlowResult = "Two (If-else) test content";
} else {
    controlFlowResult = "Other (If-else)";
}
switch(num) {
    case 2:
        controlFlowResult += ", Two (Switch)";
        break;
}
document.getElementById('control-flow-demo').textContent = `Result for num=2: ${controlFlowResult}`;
logToHTML(`5. Control Flow executed for num=2: ${controlFlowResult}`);

// --- 6. Loops ---
let loopOutput = "For loop: ";
for (let i = 0; i < 3; i++) { loopOutput += i + ' '; }
let arrOf = [10, 20];
loopOutput += " | for...of: ";
for (let val of arrOf) { loopOutput += val + ' '; }
document.getElementById('loops-demo').textContent = loopOutput;
logToHTML('6. Loops finished execution.');

// --- 7. Functions ---

function test_add(x,y){
    let result = x +y;

    return result;
}

let p = test_add(10,20);
console.log(p)


function add(p1, p2) { return p1 + p2; }
let mul = (p1, p2) => p1 * p2;
document.getElementById('functions-demo').textContent = `Result: add(2,3) = ${add(2, 3)}, mul(4,5) = ${mul(4, 5)}`;
logToHTML(`7. Functions: add(2, 3) returned ${add(2, 3)}`);

// --- 8. Scope & Hoisting ---
var globalVar = "Global";
function testScope() {
    let localVar = "Local";
    logToHTML(`8. Inside Function: Global access: ${globalVar}, Local access: ${localVar}`);
}
testScope();

// --- 9. Arrays ---
let demoArr = [1, 2, 3];
demoArr.push(4); 
let doubled = demoArr.map(test => test * 2);
let sum = demoArr.reduce((acc, val) => acc + val, 0);
document.getElementById('arrays-results').textContent = 
    `After push(4): ${demoArr}. Doubled: ${doubled}. Sum: ${sum}`;
logToHTML(`9. Array Demo: Sum is ${sum}`);

// --- 10. Objects ---
let person = {
    name: "Sara",
    age: 22,
    greet: function() { 
        document.getElementById('objects-greet').textContent = `Method Output: Hello ${this.name}`;
    }
};
person.greet();
console.log(person.name)

//logToHTML(`10. Object Demo: Name accessed is ${person.name}`);

// --- 11. Strings ---
let str = " JavaScript test ";
let length = str.length;
let trimmed = str.trim();
let upper = str.toUpperCase();
document.getElementById('strings-results').textContent = 
    `Length: ${length}, Trimmed: "${trimmed}", Uppercase: ${upper}`;
logToHTML(`11. String Demo: ${upper}`);




// --- 12. Math & Date ---
let randm = Math.random();
//let test_val = Math.round(3.8);
let floor = Math.floor(3.9);
let currentYear = new Date().getFullYear();
document.getElementById('math-date-demo').textContent = `Math: Random (2 dp): ${randm}, Floor(3.9): ${floor}`;
document.getElementById('date-demo').textContent = `Date: Current Year: ${currentYear}`;
logToHTML(`12. Date Demo: Year ${currentYear}`);

// --- 13. DOM Manipulation ---
let domP = document.getElementById("dom-demo");
domP.innerHTML = "Hi! Content and Color changed by **JavaScript**.<p id='element_from_script'>para text</p>"; // Content change

domP.style.color = "red"; // Style change
domP.style.fontStyle = "italic"; 
logToHTML('13. DOM Manipulation: The paragraph text and color were successfully updated.');

// --- 14. Events ---
let btn = document.getElementById("btn-click-me");
btn.addEventListener("click", function() {
    alert("Button Clicked!");
    document.getElementById('event-message').textContent = "Button was clicked, alert shown!";
});

btn.addEventListener("mouseover", function() {
    btn.style.backgroundColor = "red";
    document.getElementById('event-message').textContent = "Button was clicked, alert shown!";
});


let input = document.getElementById("test-input");
input.addEventListener("keyup", function() {
    console.log("test",input.value);    
});


logToHTML('14. Events: Click the button above to trigger the alert and update the message.');

// --- 15. Timing Functions ---
setTimeout(() => {
    document.getElementById('timing-demo').textContent = 'Demo: setTimeout successfully ran after 2 seconds.';
    logToHTML("15. Timing: setTimeout ran.");
}, 2000);

// --- 16. Error Handling ---
try {
    let fail = undefinedVariable; 


} catch (e) {
    console.log('error in catch - ',e.message)
}

// --- 17. JSON ---
let jsonObj = { name: "Raj", age: 25 };
let jsonString = JSON.stringify(jsonObj);
let newObj = JSON.parse(jsonString);
document.getElementById('json-results').textContent = 
    `Stringified: ${jsonString}. Parsed Name: ${newObj.name}.`;
logToHTML(`17. JSON Demo: Parsed object property: ${newObj.name}`);

// --- 18. Fetch API (Async operation) ---
document.getElementById('fetch-demo').textContent = 'Demo: Fetching data... (Check log when done)';
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => {
        document.getElementById('fetch-demo').textContent = 
            `Demo: Fetch successful! Post Title: "${data.title}"`;
        logToHTML(`18. Fetch Demo: Fetched Title: ${data.title}`);
    })
    .catch(err => {
        document.getElementById('fetch-demo').textContent = `Demo: Fetch failed! ${err.message}`;
        logToHTML(`18. Fetch Error: ${err.message}`);
    });

// --- 19. Local Storage ---
localStorage.setItem("username", "Raj")

let storedUser = localStorage.getItem("username");

console.log(storedUser)

localStorage.removeItem("username");
document.getElementById('local-storage-demo').textContent = 
    `Set: "Raj". Got: "${storedUser}". Removed: ${localStorage.getItem("username")}`;
logToHTML(`19. Local Storage: Retrieved username: ${storedUser}`);

// --- 20. ES6+ Features ---
let [numA, numB] = [10, 20]; // Destructuring
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // Spread
let template = `Sum: ${numA + numB}`; // Template literal
document.getElementById('es6-demo').textContent = 
    `Destructuring: numA=${numA}. Spread: arr2=[${arr2}]. Template: ${template}`;
logToHTML(`20. ES6+: Template literal output: ${template}`);


//introduction to jquery
$(document).ready(function() {
    $('#var_print').html('test jquery text'); 
});