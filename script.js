function alertEmailOrPhone() {
  const inputEmail = document.querySelector('#user-email-phone');
  alert(inputEmail.value);
}

const button = document.querySelector('#button-login');
button.addEventListener('click', alertEmailOrPhone);

function customizedGender(event) {
  const genderInput = document.querySelector('.customized-gender');
  while (genderInput.firstChild) {
    genderInput.removeChild(genderInput.lastChild);
  }
  if (event.target.value === 'Personalizado') {
    const creatInput = document.createElement('input');
    creatInput.setAttribute('name', 'gender-custom');
    creatInput.setAttribute('placeholder', 'Gênero (opcional)');
    creatInput.setAttribute('class', 'info');
    creatInput.setAttribute('id', 'gender-input');
    genderInput.appendChild(creatInput);
  }
}

const genderOption = document.querySelector('.gender-options');
genderOption.addEventListener('click', customizedGender);


const firstname = document.querySelector('input[name="firstname"]');
const lastname = document.querySelector('input[name="lastname"]');
const emaiLrOrPhone = document.querySelector('input[name="phone_email"]');
const birthDate = document.querySelector('input[name="birthdate"]');

function getInputValues(inpuType) {
  return inpuType.value;
}

function getCustomizedGender(event) {
  if (event.target.className === 'custom-gender') {
    customizedGender();
    event.target.value = document.querySelector('#gender-input').value;
  }
}

const customGender = document.querySelector('.customized-gender');
customGender.addEventListener('change', getCustomizedGender);


function getGenderValue(event) {
  let result = '';
  if (event.target.name === 'gender') {
    result = event.target.value;
  }
  return result;
}

const gender = document.querySelector('.gender-options');
gender.addEventListener('click', getGenderValue);


function clearParagraph() {
  const form = document.querySelector('.message');
  while (form.firstChild) {
    form.removeChild(form.lastChild);
  }
}

function addPersonalInfos() {
  const rightContent = document.querySelector('.right-content');
  if (rightContent.hasChildNodes) {
    while (rightContent.firstChild) {
      rightContent.removeChild(rightContent.lastChild);
    }
    const form = document.createElement('p');
    form.innerText = `Olá, ${getInputValues(firstname)} ${getInputValues(lastname)}
    Email ou Telefone: ${getInputValues(emaiLrOrPhone)}
    Data de nascimento: ${getInputValues(birthDate)}
    Gênero: ${getGenderValue()}`;
    rightContent.appendChild(form);
  }
}

function checkEmptyinputs() {
  const infoClass = document.querySelectorAll('.info');
  let emptyInputs = 0;
  for (let index = 0; index < infoClass.length; index += 1) {
    if (infoClass[index].value === '') {
      emptyInputs += 1;
    }
  }
  return emptyInputs;
}

function buttonSignUp(event) {
  event.preventDefault();
  const checked = document.querySelector('input[name="gender"]:checked');
  const form = document.querySelector('.message');
  const message = document.createElement('p');
  clearParagraph();

  if (checked === null || checkEmptyinputs() > 0) {
    form.appendChild(message);
    message.innerText = 'Campos inválidos';
  } else {
    addPersonalInfos();
  }
}

const btnSignUp = document.querySelector('#facebook-register');
btnSignUp.addEventListener('click', buttonSignUp);

function removeMessage(event) {
  const form = document.querySelector('.message');
  if (event.target) {
    if (form.hasChildNodes()) {
      form.removeChild(form.lastChild);
    }
  }
}

const personalInfos = document.querySelector('.remove-child');
personalInfos.addEventListener('click', removeMessage);
