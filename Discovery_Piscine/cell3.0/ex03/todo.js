function loadTasks() {
    let tasks = getCookie("tasks");
    if (tasks) {
        let taskList = document.getElementById("ft_list");
        let taskArray = tasks.split(",");
        for (let i = taskArray.length - 1; i >= 0; i--) {
            let task = document.createElement("div");
            task.innerHTML = taskArray[i];
            task.addEventListener("click", function() {
                if (confirm("Are you sure you want to delete this task?")) {
                    this.remove();
                    updateCookie();
                }
            });
            taskList.prepend(task);
        }
    }
}

function addTask() {
    let task = prompt("Enter a new task:");
    if (task) {
        let taskList = document.getElementById("ft_list");
        let newTask = document.createElement("div");
        newTask.innerHTML = task;
        newTask.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this task?")) {
                this.remove();
                updateCookie();
            }
        });
        taskList.prepend(newTask);
        updateCookie();
    }
}

function updateCookie() {
    let tasks = [];
    let taskList = document.getElementById("ft_list").children;
    for (let i = 0; i < taskList.length; i++) {
        tasks.push(taskList[i].innerHTML);
    }
    document.cookie = "tasks=" + tasks.join(",");
}

function getCookie(name) {
    let cookie = document.cookie.split("; ");
    for (let i = 0; i < cookie.length; i++) {
        let [cookieName, cookieValue] = cookie[i].split("=");
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}