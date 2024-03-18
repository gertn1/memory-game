

const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

// Função que retorna uma função closure
const validateInput = () => {
  // Aqui está a função closure que encapsula o estado do botão
  return ({ target }) => {
    if (target.value.length > 3) {
      button.removeAttribute('disabled');
      return;
    }

    button.setAttribute('disabled', '');
  };
};

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
};

// Aqui chamamos a função validateInput para obter a função closure e adicionamos o listener de input
input.addEventListener('input', validateInput());


form.addEventListener('submit', handleSubmit);
