function alerta(){
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

function verify (){
  alert('Campos inválidos');
    event.preventDefault();
}

function validacao (event){
  let status = false;
  if(document.getElementById('name').value === ''){
    verify();
  }

  if( document.getElementById('lastname').value === ''){
    verify();
  }

  if( document.getElementById('phonemail').value === ''){
    verify();
  }

  if( document.getElementById('senha').value === ''){
    verify();
  }

  if( document.getElementById('nascimento').value === ''){
    verify();
  }
  
  if (document.getElementById('fem').checked) {
    status = true;
  }

  if (document.getElementById('masc').checked) {
    status = true;
  }

  if (document.getElementById('perso').checked) {
    status = true;
  }

  if (status === false) {
    verify();
  }
}

function generoPersonaliza(){
  const input = document.createElement('input');
  input.placeholder = 'Gênero (opcional)';
  input.name = 'gender-custom';
  input.className = 'genero-personalizado';
  const genero = document.querySelector('#genero');
  genero.appendChild(input);
}

window.onload = function (){
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', alerta);
  const btnCadastro = document.querySelector('#facebook-register');
  btnCadastro.addEventListener('click' , validacao);
  const radio = document.querySelector("#perso");
  radio.addEventListener('click', generoPersonaliza);
};
