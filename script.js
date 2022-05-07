'use strict';

//setting up variables
const form = document.querySelector('.form');
const item = document.querySelector('.todo-item');
const btnDel = document.querySelector('.delete-btn');
const editBtn = document.querySelector('.edit-btn');
const input = document.querySelector('.input');
const ul = document.querySelector('.ul');
let todos = [];
//submit action
window.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    // DisplayUi();
    newTask();
    form.reset();
    setTask();
    UI();
  });
  UI();
});

function UI() {
  if (localStorage.length > 0) {
    getTasks();
    console.log('ok');
  } else {
    console.log('not ok');
  }
  if (todos) {
    todos.forEach(todo => {
      const htmlLi = `
        <li class='${todo.done ? 'Done' : 'Not-Done'}'>
            <span class="todo-item">${todo.title}</span>
            <button class="edit-btn">update</button>
            <button class="delete-btn">delete</button>
        </li>
      `;
      ul.insertAdjacentHTML('afterbegin', htmlLi);
    });
  }
}
function newTask() {
  const task = {
    title: input.value,
    done: false,
    id: Date.now(),
  };
  if (task.title) {
    pushArr(task);
  }
}

function pushArr(task) {
  if (task.title) {
    todos.push(task);
    console.log(task);
    console.log('todos :- ', todos);
  }
}

function setTask() {
  if (todos) {
    console.log('not empty');
  }
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTasks() {
  const localS = JSON.parse(localStorage.getItem('todos'));
  todos = localS;
  console.log('=========================================');
}
