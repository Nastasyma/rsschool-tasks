import numbers2 from './4-4.js';

const body = document.querySelector('body');
const main_container = document.querySelector('.main_container');
const game_field = document.querySelector('.game_field');


function sort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let arrayNums2 = [];
function sortNums2() {
  for (let i = 0; i < numbers2.length; i++) {
    arrayNums2.push(numbers2[i]);
  }
  sort(arrayNums2);
}
sortNums2();
console.log(arrayNums2);

function createNums2() {
  for (let i = 0; i < arrayNums2.length; i++) {
    const game_number = document.createElement('div');
    game_number.classList.add('game_number');
    game_number.innerText = arrayNums2[i].content;
    game_number.style.background = arrayNums2[i].background;
    game_number.style.border = arrayNums2[i].border;
    game_number.id = arrayNums2[i].id;
    game_field.appendChild(game_number);
  }
}
createNums2();
const game_numbers = document.querySelectorAll('.game_number');
console.log(game_numbers)

let click = 0;
for (let i = 0; i < game_numbers.length; i++) {
  game_numbers[i].addEventListener('click', (e) => {
    click++;
    console.log(e.target);
    console.log(game_numbers[i-1])
})
}
