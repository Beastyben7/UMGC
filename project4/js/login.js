function validateLogin(event) {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailCorrect = window.localStorage.getItem('email')
    const passwordCorrect = window.localStorage.getItem('password')

    if (email == emailCorrect && password == passwordCorrect)
    {window.location.href = 'explore-properties.html'}
    else {
        alert('Your email or password is incorrect. Please try again.')
    }
}

document.getElementById('formLogin').addEventListener('submit', validateLogin);