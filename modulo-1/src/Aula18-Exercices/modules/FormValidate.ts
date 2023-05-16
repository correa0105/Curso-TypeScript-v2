import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEventFn = (event: Event) => {
  event.preventDefault();
  hideErrorMessage(form);

  checkFormEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPassword(password, password2);

  if (shouldSendForm(form)) {
    console.log('Formulário Enviado');
  }
};

form.addEventListener('submit', submitEventFn);

function checkFormEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'Este campo não pode ser vazio');
    }
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) {
    showErrorMessage(input, 'Email inválido');
  }
}

function checkPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password2, 'As senhas não conferem');
  }
}

function hideErrorMessage(form: HTMLFormElement): void {
  const errorMessages = form.querySelectorAll('.' + SHOW_ERROR_MESSAGES);
  errorMessages.forEach((message) =>
    message.classList.remove(SHOW_ERROR_MESSAGES),
  );
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let sendForm = true;

  const errorMessages = form.querySelectorAll('.' + SHOW_ERROR_MESSAGES);
  errorMessages.forEach(() => (sendForm = false));

  return sendForm;
}
