

const buttonEntrar = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');

buttonEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  const emailOrPhone = document.getElementById('user-email-phone').value;
  alert(emailOrPhone);
});

function createParagraph() {
  const container = document.querySelector('.form-container');
  const paragraph = document.createElement('p');
  deleteParagraph(container);
  container.appendChild(paragraph);
  paragraph.innerText = 'Campos inválidos';
  paragraph.id = 'validation-error';
}

function deleteParagraph(container) {
  const paragraph = document.querySelector('#validation-error');
  if (paragraph !== null) {
    container.removeChild(paragraph);
  }
}

registerButton.addEventListener('click', (event) => {
  event.preventDefault();
  const registerInput = document.getElementsByClassName('register-input');
  let cont = 0;
  for (let index = 0; index < registerInput.length; index += 1) {
    if (registerInput[index].type === 'radio') {
      if (registerInput[index].checked === false) {
        cont += 1;
      }
    } else if (registerInput[index].value === '') {
      createParagraph();
      return;
    }
  }
  if (cont >= 3) {
    createParagraph();
    return;
  }
});
