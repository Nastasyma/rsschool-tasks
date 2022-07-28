// ------- quotes -------

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

// получить данные из файла, вывести рандомно цитату по номеру от 1 до 20
async function getQuotes() {  
  const quotes = 'js/enquotes.json';
  const res = await fetch(quotes);
  const data = await res.json(); 

  function randomQuote(){
    let n = Math.floor(Math.random() * 20);
    quote.textContent = data[n].text;
    author.textContent = data[n].author;  
  }
    randomQuote();
}
getQuotes();

changeQuote.addEventListener('click', getQuotes);
