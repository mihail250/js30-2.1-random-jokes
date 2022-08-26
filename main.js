const url = 'https://type.fit/api/quotes';
const quote = document.querySelector('.quote');
const image = document.querySelector('.image');
const  theButton = document.querySelector('.theButton');

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
  };
  getData();
  
  function showData(data) {
    let RandomNumber = getRandomIntInclusive(0, data.length);
    quote.innerHTML = data[RandomNumber].text
    image.innerHTML = data[RandomNumber].author
  };

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  

  theButton.addEventListener('click', getData);