let toDoList = [];  //empty array

if (toDoList.length) {
  renderToDoList();
}

document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
  addToDO();
});

function renderToDoList() {
  let toDoListHTML = '';
  console.log(toDoList.length);
  for (let i = 0; i <= toDoList.length - 1; i++) {
    const toDo = toDoList[i];
    //destructuring
    const {name, dueDate} = toDo;
    const html = `
       <div class="input-name">${name} </div>
       <div class="input-date">${dueDate} </div>  
      <button onclick = "
      " class = "delete-todo-button js-delete-todo-button">Delete</button>  
    `;
    toDoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = toDoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index)=> {
    deleteButton.addEventListener('click',() => {
        toDoList.splice(index,1);
        renderToDoList();
    });
  });
} 

function addToDO() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value

  toDoList.push(
    {
      name,
      dueDate
    });

  inputElement.value = '';
  renderToDoList();
}

