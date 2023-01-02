

const todoInput = document.querySelector('.todo-input'); 
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 


todoButton.addEventListener('click',addToDo) ; 

function addToDo(event){
    event.preventDefault(); 
    // This prevents the form from busbmitting
    console.log("hello") ; 


    const todoDiv= document.createElement('div');
    todoDiv.classList.add('todo'); 

    const newTodo=document.createElement('li');
    newTodo.innerText='hey'; 

    newTodo.classList.add('todo-item'); 

    todoDiv.appendChild(newTodo);
    
    todoInput.value = "";
    const completedButton = document.createElement("button");

    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");

    todoDiv.appendChild(completedButton);


    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';


    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

}
