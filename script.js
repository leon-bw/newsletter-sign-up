const subscribe = document.querySelector('#subscribe');
const success = document.querySelector('#success');
const dismiss = document.querySelector('#dismiss');
const form = document.querySelector(".card__form");
const errorMessage = document.querySelector('.card__error');

// Show Error and Message
function showError(input,message) {
    const email = document.querySelector("#email");
    email.className = 'input--error';
    errorMessage.classList.remove('hidden');
    errorMessage.innerText = message;
}

// Validate Email Address
function validEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

//Show Success
function showSuccess() {
    email.className = '';
    errorMessage.classList.add('hidden');
    success.classList.remove('hidden');
    subscribe.classList.add('hidden');
}

// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validEmail(email.value)) {
        showError(errorMessage, 'Valid email required');
    } else {
        showSuccess();
    }
});

dismiss.addEventListener('click', (e) => {
    success.classList.add('hidden');
    subscribe.classList.remove('hidden');
});