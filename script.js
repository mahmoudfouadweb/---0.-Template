'use strict';
const form = document.querySelector('.formselect');
const item = document.querySelector('.todo-item');
const btnDel = document.querySelector('.js-delete-todo');
const input = document.querySelector('.inputselect');
const todoUl = document.querySelector('.js-todo-list');
// input object

function addTodo(todoText, id) {
  const todoobject = {
    todoText: document.querySelector('.inputselect').value,
    checked: false,
    id: Date.now(),
  };
  console.log(todoobject);
  renderTodo(todoobject);
}

form.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
  form.reset();
});
let todoArray = [];
function renderTodo(todo) {
  const item = document.querySelector(`[data-key='${todo.id}']`);
  const isChicked = todo.checked ? 'Done' : '';
  const newList = document.createElement('li');
  newList.setAttribute('class', `todo-item ${isChicked}`);
  newList.setAttribute('data-key', todo.id);
  newList.innerHTML = `
    <input id="${todo.id}"  type="checkbox"/>
    <label for "${todo.id}"  class="tick js-tick"></label>
    <span>${todo.todoText}</span>
    <button class="delete-todo js-delete-todo">
    <button class="delete-todo js-delete-todo">
    <svg fill="var(--svgcolor)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
    </button>
`;
  todoUl.append(newList);
  todoArray.push(renderTodo());
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}

// submit data
// let todos = [];
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   let value = todoObject.todoText;
//   let liHTML;
//   console.log(value);
//   console.log();
//   for (let i = 0; i < todos.length; i++) {
//     liHTML = `
//     <li class="todo-item" data-key="123456">
//         <input type="checkbox" id='${todoObject.id}'>
//         <label for="123456" class="tick js-tick"></label>
//         <span>${todos[i]}</span>
//         <button class="delete-todo js-delete-todo"><svg fill="var(--svgcolor)" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
//           viewBox="0 0 24 24">
//         <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
//         </svg>
//         </button>
//     </li>
//     `;
//   }
//   todos.push(input.value);
//   todoUl.insertAdjacentHTML('afterbegin', liHTML);
//   console.log('arr:- ', todos);
//   console.log('all obJ:- ', todoObject);
//   form.reset();
// });

// // delete
// document.querySelector('.js-delete-todo').addEventListener('click', e => {
//   e.preventDefault();

//   for (let i = 0; i < todoUl.length; i++) {}
// });
