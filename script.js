document.querySelector(".add").addEventListener("click", () => {
    if (document.querySelector(".new-task input").value != 0) {
        document.querySelector(".tasks").innerHTML += `
            <div class="task">
                <span class="task-text">${document.querySelector(".new-task input").value}</span>
                <button class="delete">Delete</button>
            </div>
        `;
        document.querySelector(".new-task input").value = "";
        let deleteButtons = document.querySelectorAll(".delete");
        for (let i = 0; i < deleteButtons.length; ++i) {
            deleteButtons[i].addEventListener("click", () => {
                deleteButtons[i].parentNode.remove();
            })
        }
        let tasks = document.querySelectorAll(".task-text");
        for (let i = 0; i < tasks.length; ++i) {
            tasks[i].addEventListener("click", () => {
                tasks[i].classList.toggle("completed");
            })
        }
    }
});