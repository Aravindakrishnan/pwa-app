document.addEventListener("keydown",(e)=>{
    if(e.code === "Enter") {
        fireIt();
    }
})

const fireIt = () => {
    const todoText = document.querySelector(".todo__text").value;
    
    if(todoText===""){
        pushAlert("warning","Kindly Enter Something...")
        return;
    }
    const todoItem = insertTodo(todoText);
    const template = `
    <div id=${todoItem.id} class="todo__card">
        <h3 class="todo__title">${todoText}</h4>
        <button onclick=deleteTodo(${todoItem.id}) class="todo__delete btn"><ion-icon name="trash-outline"></ion-icon></button>    
    </div>
    `
    const todoCards = document.querySelector(".todo__cards");
    todoCards.innerHTML += template;
}

