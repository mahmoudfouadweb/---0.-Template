<<<<<<< HEAD
'use strict';

//DOM variables
const container = document.querySelector('.container');

// colors array
let colorArr = [];
let favouriteColors = [];

// creating a new elements
const newDiv = divNums => {
  for (let i = 0; i < divNums; i++) {
    const div = document.createElement('div');
    div.classList.add('color-container');
    container.insertAdjacentElement('afterbegin', div);
  }
};
newDiv(130);

// Generate random Color
const color = function () {
  let colorCode = '';
  let hex = '0123456789abcdef';
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    colorCode += hex.substring(random, random + 1);
  }
  return `#${colorCode}`;
};
color();

function displayUI() {
  const all = document.querySelectorAll('.color-container');
  all.forEach(ele => {
    [ele.textContent, ele.style.backgroundColor] = [color(), color()];
  });
}
displayUI();
||||||| 993f1bd
console.log('hi there');
=======
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
>>>>>>> 3e7cf3d173edbca674e895b38447a9f889f0504f
