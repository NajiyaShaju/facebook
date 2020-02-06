function validateEmpty() {
    email = document.getElementById("txtEmail");
    password = document.getElementById("txtPassword");
    spanEmail = document.getElementById("spanEmail");
    spanPassword = document.getElementById("spanPassword");
    console.log(spanEmail);
    st = true;
    if (email.value == "") {
        st = false;
        spanEmail.innerHtml = "Enter your Email Id";
        spanEmail.style.color = "red";
        email.style.borderColor = "red";
    } else {
        spanEmail.innerHtml = "";
        spanEmail.style.color = "";
        spanEmail.style.borderColor = "";
    }
    if (password.value == "") {
        st = false;
        spanPassword.innerHtml = "Enter your Email Id";
        spanPassword.style.color = "red";
        password.style.borderColor = "red";
    } else {
        spanPassword.innerHtml = "";
        spanPassword.style.color = "";
        password.style.borderColor = "";
    }
    return st;
}