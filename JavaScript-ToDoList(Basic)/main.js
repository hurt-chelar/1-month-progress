

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

}