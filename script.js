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
newDiv(45);

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

const btnColor = document.querySelector('.color-container');
