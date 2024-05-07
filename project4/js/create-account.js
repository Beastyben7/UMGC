//Input Validation
function validateInputs(event) {

    event.preventDefault();

//First Name
    const fName = document.getElementById('fName').value;
    const fNameError = document.getElementById('fNameError');
    if (fName.length == 0) {
        fNameError.style.display = 'block';
    }
    else {
        fNameError.style.display = 'none'
    };

//Last Name
    const lName = document.getElementById('lName').value;
    const lNameError = document.getElementById('lNameError');
    if (lName.length == 0) {
        lNameError.style.display = 'block'
    }
    else {
        lNameError.style.display = 'none'
    };
    
//Email
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (email.length <= '3') {
        emailError.style.display = 'block'
    }
    else {
        emailError.style.display = 'none'
    };

//Password
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 8) {
        passwordError.style.display = 'block';
    }
    else {
        passwordError.style.display = 'none'
    };

//Privacy Policy
    const agreePrivacy = document.getElementById('agreePrivacy');
    const agreePrivacyError = document.getElementById('agreePrivacyError');
    if (agreePrivacy.checked) {
        agreePrivacyError.style.display = 'none'
    }
    else {
        agreePrivacyError.style.display = 'block'
    };

//New Window on Validation
    if (
        fNameError.style.display === 'none' && 
        lNameError.style.display === 'none' &&
        emailError.style.display === 'none' &&
        passwordError.style.display === 'none' && 
        agreePrivacyError.style.display === 'none' 
    )
    {
        window.localStorage.setItem('fName', fName);
        window.localStorage.setItem('lName', lName);
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('password', password);
        
        window.location.href = 'explore-properties.html'}
    else {
        alert('Please fill out all required fields correctly.');
    };
}

document.getElementById('form').addEventListener('submit', validateInputs);


