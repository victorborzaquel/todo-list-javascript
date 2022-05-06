const btnAddTodo = document.getElementById('btn-add-todo');
const newTodo = document.getElementById('add-todo');
const allTasks = document.getElementById('tasks')

let allTodo = []

btnAddTodo.addEventListener("click", addTodo)

window.addEventListener('keypress', e => {
    if (e.keyCode === 13) addTodo()
})


function addTodo() {
    if (!newTodo.value) return

    allTodo.push({ id: allTodo.length, name: newTodo.value, completed: false })
    newTodo.value = ''

    refreshAllTodo()
}

function deleteTodo(index) {
    allTodo = allTodo.filter(todo => todo.id !== index)

    refreshAllTodo()
}

function completeTodo(index) {
    allTodo = allTodo.map(todo => {
        let updatedTodo = todo

        if (todo.id === index) {
            updatedTodo.completed = !updatedTodo.completed
        }

        return updatedTodo
    })

    refreshAllTodo()
}

function refreshAllTodo() {
    allTasks.innerHTML = ''

    allTodo.forEach((todo, index) => {
        allTasks.innerHTML += [
            `<div class="task"">`,
            `    <div class="task-content">`,
            `        <input onclick="completeTodo(${index})" ${todo.completed ? 'checked' : ''} type="checkbox" name="task-completed" id="">`,
            `        <p class="task-title">${todo.name}</p>`,
            `    </div>`,
            `    <div class="task-delete-content">`,
            `        <button class="btn-task-delete" onclick="deleteTodo(${index})">Delete Task</button>`,
            `    </div>`,
            `</div>`,
        ].join('')
    })
}