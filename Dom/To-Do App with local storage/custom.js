//Declare variables
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

//Empty array to store the tasks
let arrayOfTasks = [];

//Trigger Get data from local storage function
getDataFromLocalStorageForm();

//Check if Theres tasks In local storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

//Add Task Function
submit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value); //Add tasks to tasksField
        input.value = "";            //Empty Input Field
    }
}

//Click on task element
tasksDiv.addEventListener("click", (e) => {
    //Remove task from local storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    //Delete Button
    if (e.target.classList.contains("del")) {
        //Remove element from page
        e.target.parentElement.remove();
    }
    //Task Element
    if (e.target.classList.contains("task")) {
        //Toggle completed for the task
        toggleStatusTaskWith(e.target.getAttribute("data-id"))
        //Toggle done class
        e.target.classList.toggle("done");
    }
});

//Add tasks to tasksField Function
function addTaskToArray(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    //Push Task to arrayOfTasks
    arrayOfTasks.push(task);
    //Add Tasks to page
    addElementsToPageForm(arrayOfTasks);
    //Add Tasks To local Storage
    addDataToLocalStorageForm(arrayOfTasks);
}

function addElementsToPageForm(arrayOfTasks) {
    //Empty tasks div
    tasksDiv.innerHTML = "";
    //Looping On Array Of Tasks
    arrayOfTasks.forEach((task) => {
        //Create main div
        let div = document.createElement("div");
        div.className = "task";
        //Check if task is done
        if (task.completed === true) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        //Create Delete Button
        console.log(div);
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        //Append Button To Main Div
        div.appendChild(span);
        //Add Task div to tasks container
        tasksDiv.appendChild(div);
    });
}

function addDataToLocalStorageForm(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorageForm() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageForm(tasks);
    }
}

function deleteTaskWith(taskId) {
    //For explain only
    // for (let i = 0; i < arrayOfTasks.length; i++) {
    //     console.log(`${arrayOfTasks[i].id} === ${taskId}`);
    // }
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addDataToLocalStorageForm(arrayOfTasks)
}

function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++){
        if (arrayOfTasks[i].id == taskId) {
        arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
        }
    }
    addDataToLocalStorageForm(arrayOfTasks);
}