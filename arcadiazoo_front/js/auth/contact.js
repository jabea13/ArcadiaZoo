const inputMail = document.getElementById("email2");
inputMail.addEventListener("keyup", validateForm);

const inputText = document.getElementById("content2");
inputText.addEventListener("keyup", validateForm);

const inputSubject = document.getElementById("subject2");
inputSubject.addEventListener("keyup", validateForm);

const btnSubmit = document.getElementById("connexion1");
btnSubmit.addEventListener("click", checkCredentials);

function validateForm(){
    const mailOk = validateMail(inputMail);
    const textOk = validateText(inputText);
    const subjectOk = validateSubject(inputSubject);

    if (mailOk && textOk && subjectOk){
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

function validateText(input){
    const textRegex = /<[^>]*>?/g;
    const textUser = input.value;
    if(mailUser.match(textRegex)){
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

function validateSubject(input){
    const subjectconst subjectRegex = /<[^>]*>?/g;
    const subjectUser = input.value;
    if(mailUser.match(subjectRegex)){
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