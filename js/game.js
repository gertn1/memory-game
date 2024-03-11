// Seleção de elementos do DOM
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

// Função Lambda para criar elementos HTML
const createElement = (tag, className) => {  
  const element = document.createElement(tag);
  element.className = className;
  return element;
}


let firstCard = '';  
let secondCard = '';  

const checkEndGame = () => {  
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(this.loop);

    // Se todas as cartas foram desativadas (pares encontrados), exibe mensagem no HTML
    const mensagemContainer = document.getElementById('mensagem-container');
    mensagemContainer.innerHTML = `Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML} segundos`;
   
    mensagemContainer.classList.add('mensagem-estilizada');
  
  }
}



const checkCards = () => {  
  // Obtém os personagens das cartas selecionadas
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  // Se os personagens coincidirem, desativa as cartas
  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    // Limpa as variáveis de cartas selecionadas
    firstCard = '';
    secondCard = '';

    // Verifica se o jogo chegou ao fim
    checkEndGame();

  } else {
    // Se os personagens não coincidirem, esconde as cartas após um curto intervalo
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      // Limpa as variáveis de cartas selecionadas
      firstCard = '';
      secondCard = '';

    }, 500);
  }
}

// Função para revelar uma carta ao ser clicada
const revealCard = ({ target }) => {  
  // Verifica se a carta já foi revelada
  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  // Se a primeira carta ainda não foi escolhida
  if (firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {
    // Se a segunda carta ainda não foi escolhida, a revela e verifica as cartas
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    // Verifica as cartas selecionadas
    checkCards();
  }
}

// Função para criar uma carta com base no personagem fornecido
const createCard = (character) => {  
  // Cria elementos HTML para a carta, frente e verso
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  // Define a imagem de fundo da frente da carta
  front.style.backgroundImage = `url('../images/${character}.png')`;

  // Adiciona as faces à carta
  card.appendChild(front);
  card.appendChild(back);

  // Adiciona um evento de clique para revelar a carta
  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

// Função para carregar o jogo
const loadGame = () => {  
  // Cria uma lista duplicada de personagens e a embaralha
  const duplicateCharacters = [...characters, ...characters];
  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  // Utiliza a função de alta ordem 'forEach' para iterar sobre o array
  shuffledArray.forEach((character) => {
    // Cria uma carta para cada personagem e a adiciona à grade (grid)
    const card = createCard(character);
    grid.appendChild(card);
  });
}

// Função para iniciar o temporizador do jogo
const startTimer = () => {  
  // Utiliza a função setInterval para incrementar o tempo a cada segundo
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);
}

// Executado quando a página é totalmente carregada
window.onload = () => {  
  // Configura o nome do jogador, inicia o temporizador e carrega o jogo
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

