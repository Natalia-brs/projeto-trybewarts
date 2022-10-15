const getInputEmail = document.getElementById('email-box');
const getButton = document.getElementById('button-login');

function loginAlert() {
  const dados = ['tryber@teste.com', 123456];
  localStorage.setItem('user', JSON.stringify(dados));
  const recoverUser = JSON.parse(localStorage.getItem('user'));
  getButton.addEventListener('click', () => {
    if (recoverUser[0] === getInputEmail.value && recoverUser[1] === 123456) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}

//comentario

loginAlert();