import _, { set } from 'lodash';

const local = 'feedback-form-state';
const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector('textarea[name="message"]');
const options = { email: '', message: '' };

form.addEventListener('input', function (e) { 
    options.email = e.currentTarget.elements.email.value;
    options.message = e.currentTarget.elements.message.value;
  result();
  return options;
});

const result = _.throttle(updateLocalStorage, 500);

function updateLocalStorage() {
  localStorage.setItem(local, JSON.stringify(options));
}

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(options);
  localStorage.clear();
  form.reset();
}

const parsedStorage = JSON.parse(localStorage.getItem(local));

window.onload = fillForm(parsedStorage);

function fillForm(obj) {
  if (parsedStorage !== null) {
    message.value = obj.message;
    email.value = obj.email;
    options.message = parsedStorage.message;
    options.email = parsedStorage.email;
  }
}

