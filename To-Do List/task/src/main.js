function addItem(text) {
    const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];
    let todo = JSON.stringify({"text":text, "checked":false})
    let tasks = tasklist.push(todo)
    let taskList = document.getElementById("task-list");
    let li = document.createElement("li");
    let test = JSON.stringify(todo)
    li.innerHTML =
        '<span class="task">' + test  + '</span>';
    taskList.appendChild(li);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteItem(iter) {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

}


function itemChecked(iter) {
    let taskList = JSON.parse(localStorage.getItem("tasks"));
    taskList[iter]["checked"] = true
    localStorage.setItem("tasks", JSON.stringify(taskList))
    }


function loadLocalStorage() {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    for (let task in taskList) {
        let tasks = document.getElementById("task-list");
        let li = document.createElement("li");
        li.innerHTML =
            '<input type="checkbox"><span class="task">'
            + taskList[task]["text"]  + '</span><button class="delete-btn" onClick="this.parentNode.remove()">+</button>';
        tasks.appendChild(li);
        }
    }

window.onload = loadLocalStorage

document.getElementById("add-task-button")
    .addEventListener("click", function () {
        let taskList = document.getElementById("task-list");
        let text = document.getElementById("input-task").value
        let li = document.createElement("li");
        li.innerHTML =
            '<input type="checkbox"><span class="task">'
            + text  + '</span><button class="delete-btn" onClick="this.parentNode.remove()">+</button>';
        taskList.appendChild(li);
        const tasklist = JSON.parse(localStorage.getItem("tasks")) || [];
        let todo = [{"text":text, "checked":false}]
        let tasks = tasklist.concat(todo)
        localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    );


document.getElementById("fortnite2")
    .addEventListener("click", function () {
        localStorage.setItem("tasks", JSON.stringify([]))
    })

document.getElementById("fortnite")
    .addEventListener("click", function () {
        let tasklist = document.getElementById("task-list");
        let taskList = localStorage.getItem("tasks") || [];
        let li = document.createElement("li")
        li.innerHTML =
            '<span>' + taskList + '</span>'
        tasklist.appendChild(li)
    })

