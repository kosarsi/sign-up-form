let passwordLabel = document.querySelector('#match-alert');
let passwordInput = document.querySelector('#password-entry');
let confirmPassword = document.querySelector('#confirm-password');
let submitButton = document.querySelector('#submit');

passwordInput.addEventListener("input", function() {
    if (passwordInput.value.trim() != "") {
        passwordInput.style.border = "1px solid lightgray"; 
    } else {
        passwordInput.style.border = "1px solid red";
    }
    passwordLabel.textContent = "";
});

confirmPassword.addEventListener("input", function() {
    if (confirmPassword.value.trim() != "") {
        confirmPassword.style.border = "1px solid lightgray";
    } else {
        confirmPassword.style.border = "1px solid red";
    }
    passwordLabel.textContent = "";
})

function checkPasswords() {
    let password1 = passwordInput.value;
    let password2 = confirmPassword.value; 
    if (password1 != password2) {
        passwordLabel.textContent = "*Passwords do not match";
        passwordInput.value = "";
        confirmPassword.value = "";
        passwordInput.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
        return false; 
    } else {
        passwordLabel.textContent = "";
        return true;
    }
} 