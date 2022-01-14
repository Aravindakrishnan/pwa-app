function insertTodo(todo) {
    const todos = readTodos();
    const todoItem = {
        id : Math.floor(Math.random() * 99999),
        todo 
    }

    if(todos.length === 0) {
        saveTodos([todoItem])
        pushAlert("success",`Item id : ${todoItem.id} is Inserted...`)
        return todoItem;
    }

    todos.push(todoItem);

    saveTodos(todos);
    pushAlert("success",`Item id : ${todoItem.id} is Inserted...`)
    return todoItem;
}

function readTodos() {
    const todos = localStorage.getItem("todos");
    if(!todos) {
        return [];
    }
    return JSON.parse(todos);
}

function saveTodos(todos) {
    localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteTodo(todoId) {
    const todos = readTodos();
    const todo = getTodoById(todoId)
    const filteredTodos = todos.filter(todo => { return todo.id != todoId})
    saveTodos(filteredTodos);
    renderTodo();
    pushAlert("danger",`Item id : ${todoId} is Deleted...`)
    return todo;   
}

function getTodoById(todoId) {
    const todos = readTodos();
    const todo = todos.find(todo=> todo.id === todoId);
    return todo;
}

const renderTodo = () => {
    const todos = readTodos();
    const todoCards = document.querySelector(".todo__cards");
    const todoTemplate = todos.map(todo=>{
        return `
        <div id=${todo.id} class="todo__card">
        <h3 class="todo__title">${todo.todo}</h4>
        <button onclick=deleteTodo(${todo.id}) class="todo__delete btn"><ion-icon name="trash-outline"></ion-icon></button>    
        </div>
        `
    })
    todoCards.innerHTML = todoTemplate.join("");
} 

const clearAll = () => {
    localStorage.setItem("todos",JSON.stringify([]));
    pushAlert("warning",`All items are cleared...`)
    renderTodo();
}

const clearBtn = document.querySelector(".clear__btn");
clearBtn.addEventListener("click",clearAll);

renderTodo();