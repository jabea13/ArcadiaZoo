const inputMail = document.getElementById("email1");
inputMail.addEventListener("keyup", validateForm);

const inputPassword = document.getElementById("password1");
inputPassword.addEventListener("keyup", validateForm);

const btnConnexion = document.getElementById("connexion1");
btnConnexion.addEventListener("click", checkCredentials);

function validateForm(){
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

    if (mailOk && passwordOk && passwordConfirmOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateMail(input){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmationPassword(inputPassword, inputConfirmPassword){
    if(inputPassword.value == inputConfirmPassword.value){
        inputConfirmPassword.classList.add("is-valid");
        inputConfirmPassword.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPassword.classList.add("is-invalid");
        inputConfirmPassword.classList.remove("is-valid");
        return false;
    }
}

function validatePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function checkCredentials(){
    if(mailInput.value == "test@mail.com" && passwordInput.value == "Azerty@123"){
        alert("Vous êtes connecté");

        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);

        setCookie(tokenCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}