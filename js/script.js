const images = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];

// prendo lo slider al quale devo fare l'append degli items
const slider = document.querySelector('.slider');
let contatore = 0;

for(let i = 0; i < images.length; i++){

  console.log(images[i]);
  // creo un div per ogni immagine
  const item = document.createElement('div');

  // gli aggiungo la classe item
  item.className = 'item';

  // solo se i è = contatore aggiungo anche active
  if(i === contatore){
    item.classList.add('active');
  }

  // soluzione alternativa
  /**
   let classItem = 'item';
   if(i === contatore) classItem += ' active';
   item.classList = classItem;
   */

  //inserisco il tag img dentro il div creato
  item.innerHTML = `<img src="${images[i]}" alt="">`;

  console.log(item);

  // append a slider
  slider.append(item);

}

// HTMLCollection -> array di elementi HTML
const items = document.getElementsByClassName('item');

console.log('items',items);
console.log('contatore',contatore);
console.log('item in base al contatore', items[contatore]);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click',function(){
  console.log('contatore',contatore);
  console.log(items[contatore]);
  items[contatore].classList.remove('active');
  console.log(items[contatore]);

  contatore--;
  // se il contatore è < 0 prende l'ultmo elemento dell'array (array.length - 1)
  if(contatore < 0) contatore = items.length - 1;

  console.log('contatore',contatore);
  items[contatore].classList.add('active');
  console.log(items[contatore]);
});

next.addEventListener('click',function(){
  console.log('contatore',contatore);
  console.log(items[contatore]);
  items[contatore].classList.remove('active');
  console.log(items[contatore]);

  contatore++;
  // se il contatore è maggiore della lunghezza dell'array ricominci0 da 0
  if(contatore > items.length - 1) contatore = 0;

  //console.log(items[contatore]);
  items[contatore].classList.add('active');
  console.log(items[contatore]);
});