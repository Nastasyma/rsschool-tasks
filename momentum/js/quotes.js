import langObject from './languageObj.js';
import { language, langs } from './settings.js';

// ------- quotes -------

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');


// получить рандомное число от min до max
function getNumQuote(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let randomQuote;

// получить данные из файла, вывести рандомно цитату по номеру от 1 до 20 при загрузке страницы
async function getQuotes() {  
  const quotes = langObject[language].quote;
  const res = await fetch(quotes);
  const data = await res.json(); 
  randomQuote = getNumQuote(1, 20);
  quote.textContent = data[randomQuote].text;
  author.textContent = data[randomQuote].author;  
}
getQuotes();

// вывести рандомно цитату по номеру от 1 до 20 при клике на кнопку 
changeQuote.addEventListener('click', () => {
  getQuotes();
  randomQuote = getNumQuote(1, 20);
});

// переключение языка в настройках меняет язык цитаты
langs.forEach(el => {
  el.addEventListener('change', (e) => {
    getQuotes();
  })
})

window.addEventListener('DOMContentLoaded', getQuotes);