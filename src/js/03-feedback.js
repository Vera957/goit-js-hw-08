const local = 'feedback-form-state';
const form = document.querySelector('form');
const email = document.querySelector('input[type="email"]');
const options = { email: '', message: '' };

localStorage.setItem(local, JSON.stringify(options));

form.addEventListener('input', inputChange);

function inputChange(e) {
  const checkIfEmail = e.target == email;
  if (checkIfEmail) {
    options.email = e.target.value;
  } else {
    options.message = e.target.value;
  }
  return options && localStorage.setItem(local, JSON.stringify(options));
}

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(options);
  localStorage.clear();
  form.reset();
}
