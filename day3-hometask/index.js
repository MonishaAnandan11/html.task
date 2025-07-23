// ----- GLOBAL SCOPE -----
console.log("-----GLOBAL SCOPE-----");
let tasks = [];

function showGlobalTasks() {
    console.log("Tasks in global array:", tasks);
}
showGlobalTasks();



// ----- FUNCTION + CALLBACK FUNCTION -----
console.log("-----FUNCTION + CALLBACK FUNCTION-----");
const addTask = (task, callback) => {
    tasks.push(task);
    console.log("Task added: " + task);
    if (callback) {
        callback(); 
    }
};

const printTasks = function () {
    console.log("Current Tasks:");
    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]);
    }
};

addTask("Finish project", printTasks);
addTask("Study JavaScript", printTasks);



// ----- ADD MULTIPLE TASKS USING REST PARAMETER -----
console.log("-----ADD MULTIPLE TASKS USING REST PARAMETER-----");
const addMultipleTasks = (...taskList) => {
    for (let i = 0; i < taskList.length; i++) {
        tasks.push(taskList[i]);
    }
    console.log("Multiple tasks added:", taskList);
    printTasks();
};

addMultipleTasks("Clean room", "Write notes", "Go cycling");



// ----- VARIABLE SCOPE -----
console.log("-----VARIABLE SCOPE-----");
let outsideVar = "I'm outside the function";

function checkScope() {
    let insideVar = "I'm inside the function";

    if (true) {
        let blockVar = "I'm inside a block";
        console.log("Inside Block Scope:");
        console.log(outsideVar);
        console.log(insideVar);
        console.log(blockVar);
    }

    console.log("Inside Function Scope:");
    console.log(outsideVar);
    console.log(insideVar);
    // console.log(blockVar); 
}

console.log("Outside Function:");
console.log(outsideVar);
// console.log(insideVar);
// console.log(blockVar); 

checkScope();

