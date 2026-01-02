function validateContact() {
    let name = document.getElementById("first");
    let email = document.getElementById("email");
    let message = document.getElementById("message");



    let isValid = true;
    let messages = [];

    if (name.value.trim() === "") {
        isValid = false;
        messages.push("Name is requried.");
        name.classList.add('is-invalid');
        name.style.border = "1px solid red";
    } else {
        name.style.border = "2px solid green";
        name.classList.remove('is-invalid');
        name.classList.add("is-valid");
    }

    if (email.value.trim() === ""){
        isValid = false;
        messages.push("Email is requried.");
        email.classList.add("is-invalid")
        email.style.border = "1px solid red"
    } else if (!isValidEmail(email.value.trim())){
        isValid = false;
        messages.push("Please eneter a valid email address.");
        email.classList.add("is-invalid");
    } else { 
        email.style.border = "1px solid green";
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }

    if (message.value.trim() === ""){
        isValid = false;
        messages.push("message is requried");
        message.classList.add("is-invalid");
        message.style.border = "1px, solid, red";
    } else {
        isValid = false;
        message.classList.add("is-valid");
        message.style.border = "1px solid green"
        
    }

    



    

    return isValid;

}
    

