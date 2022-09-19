
function correctForm(event) {
	event.preventDefault();
  document.querySelector('input[id="email"]').value = "";
}

document.querySelector('.enter_email').addEventListener('submit', correctForm);