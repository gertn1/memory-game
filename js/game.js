
const grid = document.querySelector('.grid'); 
const spanPlayer = document.querySelector('.player'); 
const timer = document.querySelector('.timer'); 

// Lista de personagens
const characters = [ 
  'porco',
  'jacare',
  'gato',
  'cachorro',
  'rato',
  'panda',
  'peixe',
  'leao',
  'galo',
  'baleia',
];

// Função Lambda para criar elementos HTML (Programação funcional)
const createElement = (tag, className) => {  
  const element = document.createElement(tag);
  element.className = className;
  return element;
}


let firstCard = '';  
let secondCard = '';  


 // Utilizando a função de continuação (callback) para verificar o final do jogo (Programação funcional)
const checkEndGame = () => {  
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(this.loop);

  
    const mensagemContainer = document.getElementById('mensagem-container');
    mensagemContainer.innerHTML = `Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML} segundos`;
   
    mensagemContainer.classList.add('mensagem-estilizada');
  
  }
}



const checkCards = () => {  
 
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

 
  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    
    firstCard = '';
    secondCard = '';

   
    checkEndGame();

  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      
      firstCard = '';
      secondCard = '';

    }, 500);
  }
}


const revealCard = ({ target }) => {  
  
  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }


  if (firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();
  }
}
//     // Programação funcional: Utilizando função de alta ordem (checkCards é uma função passada como argumento)

const createCard = (character) => {  
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const loadGame = () => {  
  const duplicateCharacters = [...characters, ...characters];
  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

// Programação funcional: Utilizando a função de alta ordem 'forEach' para iterar o array

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

const startTimer = () => {  
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
}

// Programação funcional: Utilizando uma função de alta ordem (função passada como argumento)
window.onload = () => {  
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}



// // Seleção de elementos do DOM

// const grid = document.querySelector('.grid'); 
// const spanPlayer = document.querySelector('.player'); 
// const timer = document.querySelector('.timer'); 

// // Lista de personagens
// const characters = [ 
//   'beth',
//   'jerry',
//   'jessica',
//   'morty',
//   'pessoa-passaro',
//   'pickle-rick',
//   'rick',
//   'summer',
//   'meeseeks',
//   'scroopy',
// ];

// // Função Lambda para criar elementos HTML (Programação funcional)
// const createElement = (tag, className) => {
//   const element = document.createElement(tag);
//   element.className = className;
//   return element;
// }


// let firstCard = '';  
// let secondCard = '';  


// const checkEndGame = () => {  
//   // Utilizando a função de continuação (callback) para verificar o final do jogo (Programação funcional)
//   const disabledCards = document.querySelectorAll('.disabled-card');

//   if (disabledCards.length === 20) {
//     clearInterval(this.loop);
//     alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
//   }
// }


// const checkCards = () => {  
//   const firstCharacter = firstCard.getAttribute('data-character');
//   const secondCharacter = secondCard.getAttribute('data-character');

//   if (firstCharacter === secondCharacter) {
   
//     firstCard.firstChild.classList.add('disabled-card');
//     secondCard.firstChild.classList.add('disabled-card');

//     firstCard = '';
//     secondCard = '';

//     // Verifica se o jogo chegou ao fim (Programação funcional)
//     checkEndGame();

//   } else {
   
//     setTimeout(() => {
//       firstCard.classList.remove('reveal-card');
//       secondCard.classList.remove('reveal-card');

//       firstCard = '';
//       secondCard = '';

//     }, 500);
//   }
// }


// const revealCard = ({ target }) => {  
  
//   if (target.parentNode.className.includes('reveal-card')) {
//     return;
//   }

  
//   if (firstCard === '') {
//     target.parentNode.classList.add('reveal-card');
//     firstCard = target.parentNode;

//   } else if (secondCard === '') {
   
//     target.parentNode.classList.add('reveal-card');
//     secondCard = target.parentNode;

//     // Programação funcional: Utilizando função de alta ordem (checkCards é uma função passada como argumento)
//     checkCards();
//   }
// }


// const createCard = (character) => {  
//   const card = createElement('div', 'card');
//   const front = createElement('div', 'face front');
//   const back = createElement('div', 'face back');

  
//   front.style.backgroundImage = `url('../images/${character}.png')`;


//   card.appendChild(front);
//   card.appendChild(back);

  
//   card.addEventListener('click', revealCard);
//   card.setAttribute('data-character', character)

//   return card;
// }


// const loadGame = () => {  
//   // Programação funcional: Criando uma lista duplicada de personagens e a embaralhando
//   const duplicateCharacters = [...characters, ...characters];
//   const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

//   // Programação funcional: Utilizando a função de alta ordem 'forEach' para iterar o array
//   shuffledArray.forEach((character) => {
//     const card = createCard(character);
//     grid.appendChild(card);
//   });
// }


// const startTimer = () => {  
  
//   this.loop = setInterval(() => {
//     const currentTime = +timer.innerHTML;
//     timer.innerHTML = currentTime + 1;
//   }, 1000);
// }


// window.onload = () => {  
//   // Programação funcional: Utilizando uma função de alta ordem (função passada como argumento)
//   spanPlayer.innerHTML = localStorage.getItem('player');
//   startTimer();
//   loadGame();
// }

