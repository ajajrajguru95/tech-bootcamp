$(function() {
    console.log("welcome to script-jquery.js");

    // --- Utility to Capture Console Output ---
    const $consoleOutput = $('#console-output');
    const logToHTML = (message) => {
        try {
            const output = (typeof message === 'object' && message !== null)
                ? JSON.stringify(message, null, 2)
                : String(message);
            $consoleOutput.append(output + '\n');
            console.log(message);
        } catch (e) {
            console.error("Error logging message:", e.message);
        }
    };
    logToHTML('--- jQuery Demo Start ---');

    // --- 2. Variables & Constants ---
    var x = 10;
    let y = 20;
    const PI = 3.14;
    y = 35;
    logToHTML(`2. var x: ${x} , let y: ${y}, const PI: ${PI}`);

    function test_var() {
        let x = 30, y = 40;
        $('#var_print').html('print: ' + x);
        $('#var-const-demo').append(`<br>Values in JS: x=${x}, y=${y}, PI=${PI}`);
        logToHTML(`2. Inside function: x=${x}, y=${y}, PI=${PI}`);
    }

    $('#var_print').append('<br>print:' + x);
    test_var();
    $('#var-const-demo').append(`<br>Values in JS: x=${x}, y=${y}, PI=${PI}`);

    // --- 3. Data Types ---
    let name = "Raj", age = 25, isStudent = true, empty = null, notDefined;
    $('#data-type-demo').text(`Demo: Name(${typeof name}), Age(${typeof age}), Null(${typeof empty}), Undefined(${typeof notDefined})`);
    logToHTML(`3. Primitive Types: ${name}, ${age}, ${isStudent}`);

    // --- 4. Operators ---
    let a = 10, b = 5, result = a + b;
    let isEqual = a === "10";
    $('#operators-demo').text(`Demo: a+b = ${result}, a === "10" is ${isEqual}`);
    logToHTML(`4. Operators: ${a} > ${b} is ${a > b}`);

    // --- 5. Control Flow ---
    let num = 2, controlFlowResult = "";
    if (num === 1) controlFlowResult = "test";
    else if (num === 2) controlFlowResult = "Two (If-else)";
    else controlFlowResult = "Other";

    switch(num) {
        case 2: controlFlowResult += ", Two (Switch)"; break;
    }
    $('#control-flow-demo').text(`Result for num=2: ${controlFlowResult}`);
    logToHTML(`5. Control Flow executed for num=2`);

    // --- 6. Loops ---
    let loopOutput = "For loop: ";
    for (let i = 0; i < 3; i++) loopOutput += i + ' ';
    const arrOf = [10, 20];
    loopOutput += " | for...of: ";
    for (let val of arrOf) loopOutput += val + ' ';
    $('#loops-demo').text(loopOutput);
    logToHTML('6. Loops executed');

    // --- 7. Functions ---
    const test_add = (x, y) => x + y;
    let p = test_add(10, 20);
    logToHTML(`7. Function test_add(10,20)=${p}`);

    const add = (p1, p2) => p1 + p2;
    const mul = (p1, p2) => p1 * p2;
    $('#functions-demo').text(`Result: add(2,3) = ${add(2, 3)}, mul(4,5) = ${mul(4, 5)}`);

    // --- 8. Scope & Hoisting ---
    var globalVar = "Global";
    function testScope() {
        let localVar = "Local";
        logToHTML(`8. Inside Function: Global=${globalVar}, Local=${localVar}`);
    }
    testScope();

    // --- 9. Arrays ---
    let demoArr = [1, 2, 3];
    demoArr.push(4);
    let doubled = demoArr.map(v => v * 2);
    let sum = demoArr.reduce((acc, val) => acc + val, 0);
    $('#arrays-results').text(`After push(4): ${demoArr}. Doubled: ${doubled}. Sum: ${sum}`);
    logToHTML(`9. Array Sum=${sum}`);

    // --- 10. Objects ---
    let person = {
        name: "Sara",
        age: 22,
        greet: function() {
            $('#objects-greet').text(`Method Output: Hello ${this.name}`);
        }
    };
    person.greet();

    // --- 11. Strings ---
    let str = " JavaScript test ";
    $('#strings-results').text(`Length: ${str.length}, Trimmed: "${str.trim()}", Uppercase: ${str.toUpperCase()}`);
    logToHTML(`11. String Upper: ${str.toUpperCase()}`);

    // --- 12. Math & Date ---
    let randm = Math.random().toFixed(2);
    let floor = Math.floor(3.9);
    let currentYear = new Date().getFullYear();
    $('#math-date-demo').text(`Math: Random: ${randm}, Floor(3.9): ${floor}`);
    $('#date-demo').text(`Date: Current Year: ${currentYear}`);

    // --- 13. DOM Manipulation ---
    $('#dom-demo')
        .html("Hi! Content and Color changed by **jQuery**.<p id='element_from_script'>para text</p>")
        .css({ color: "red", fontStyle: "italic" });
    logToHTML('13. DOM Manipulation done.');

    // --- 14. Events ---
    $('#btn-click-me')
        .on('click', function() {
            alert("Button Clicked!");
            $('#event-message').text("Button was clicked, alert shown!");
        })
        .on('mouseover', function() {
            $(this).css('background-color', 'red');
            $('#event-message').text("Mouse over button!");
        });

    $('#test-input').on('keyup', function() {
        console.log("Input value:", $(this).val());
    });

    logToHTML('14. Events attached.');

    // --- 15. Timing ---
    setTimeout(() => {
        $('#timing-demo').text('Demo: setTimeout ran after 2s.');
        logToHTML("15. setTimeout ran.");
    }, 2000);

    // --- 16. Error Handling ---
    try {
        let fail = undefinedVariable;
    } catch (e) {
        console.log('error in catch - ', e.message);
    }

    // --- 17. JSON ---
    let jsonObj = { name: "Raj", age: 25 };
    let jsonString = JSON.stringify(jsonObj);
    let newObj = JSON.parse(jsonString);
    $('#json-results').text(`Stringified: ${jsonString}. Parsed Name: ${newObj.name}.`);
    logToHTML(`17. JSON Parsed Name: ${newObj.name}`);

    // --- 18. AJAX (Fetch Equivalent) ---
    $('#fetch-demo').text('Demo: Fetching data...');
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        method: 'GET',
        success: function(data) {
            $('#fetch-demo').text(`Demo: Fetch successful! Post Title: "${data.title}"`);
            logToHTML(`18. Fetched Title: ${data.title}`);
        },
        error: function(err) {
            $('#fetch-demo').text(`Demo: Fetch failed! ${err.statusText}`);
            logToHTML(`18. Fetch Error: ${err.statusText}`);
        }
    });

    // --- 19. Local Storage ---
    localStorage.setItem("username", "Raj");
    let storedUser = localStorage.getItem("username");
    localStorage.removeItem("username");
    $('#local-storage-demo').text(`Set: "Raj". Got: "${storedUser}". Removed: ${localStorage.getItem("username")}`);
    logToHTML(`19. Local Storage: ${storedUser}`);

    // --- 20. ES6+ ---
    let [numA, numB] = [10, 20];
    let arr1 = [1, 2];
    let arr2 = [...arr1, 3, 4];
    let template = `Sum: ${numA + numB}`;
    $('#es6-demo').text(`Destructuring: numA=${numA}. Spread: arr2=[${arr2}]. Template: ${template}`);
    logToHTML(`20. ES6+ Template literal: ${template}`);
});
