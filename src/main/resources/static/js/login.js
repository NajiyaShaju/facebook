function loginValidateEmpty() {
    txtEmail = document.getElementById("txtEmail");
    span_Email = document.getElementById("spanEmail");
    txtPassword = document.getElementById("txtPassword");
    spanPassword = document.getElementById("spanPassword");
    st = true;
    if (txtEmail.value == "") {
        st = false;
        span_Email.innerHTML = "Enter your Email or Phone";
        span_Email.style.color = "red";
        txtEmail.style.borderColor = "red";
    } else {
        span_Email.innerHTML = "";
        span_Email.style.color = "";
        txtEmail.style.borderColor = "";
    }
    if (txtPassword.value == "") {
        st = false;
        spanPassword.innerHTML = "Enter your Password";
        spanPassword.style.color = "red";
        txtPassword.style.borderColor = "red";
    } else {
        spanPassword.innerHTML = "";
        spanPassword.style.color = "";
        txtPassword.style.borderColor = "";
    }
    return st;
}

function registerValidateEmpty() {
    txtFirstName = document.getElementById('txtFirstname');
    spanFirstName = document.getElementById("spanFirstName");
    txtLastName = document.getElementById("txtLastName");
    spanLastName = document.getElementById("spanLastName");
    txtMobile = document.getElementById("txtMobile");
    spanMobile = document.getElementById("spanMobile");
    txtPass = document.getElementById("txtPass");
    spanPass = document.getElementById("spanPass");
    gender = document.getElementsByName("gender");
    male = document.getElementById("labelMale");
    female = document.getElementById("labelFemale");
    custom = document.getElementById("labelCustom");
    spanGender = document.getElementById("spanGender");
    month = document.getElementById("slctMonth");
    day = document.getElementById("slctDay");
    year = document.getElementById("slctYear");
    spanDate = document.getElementById("spanDate");
    spanValid = document.getElementById("spanValid");
    status = true;
    if (txtFirstName.value == "") {
        txtFirstName.style.borderColor = "red";
        spanFirstName.innerHTML = "Enter First Name";
        spanFirstName.style.color = "red";
        status = false;
    } else {
        txtFirstName.style.borderColor = "";
        spanFirstName.innerHTML = "";
        spanFirstName.style.color = "";
    }
    if (txtLastName.value == "") {
        txtLastName.style.borderColor = "red";
        spanLastName.innerHTML = "Enter Last Name";
        spanLastName.style.color = "red";
        status = false;
    } else {
        txtLastName.style.borderColor = "";
        spanLastName.innerHTML = "";
        spanLastName.style.color = "";
    }
    if (txtMobile.value == "") {
        txtMobile.style.borderColor = "red";
        spanMobile.innerHTML = "Enter Mobile Number or Email Address";
        spanMobile.style.color = "red";
        status = false;
    } else {
        txtMobile.style.borderColor = "";
        spanMobile.innerHTML = "";
        spanMobile.style.color = "";
    }
    if (txtPass.value == "") {
        txtPass.style.borderColor = "red";
        spanPass.innerHTML = "Enter Password";
        spanPass.style.color = "red";
        status = false;
    } else {
        txtPass.style.borderColor = "";
        spanPass.innerHTML = "";
        spanPass.style.color = "";
    }
    if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false) {
        male.style.color = "red";
        female.style.color = "red";
        custom.style.color = "red";
        spanGender.style.color = "red";
        spanGender.innerHTML = "Enter your Gender";
        status = false;
    } else {
        male.style.color = "grey";
        female.style.color = "grey";
        custom.style.color = "grey";
        spanGender.style.color = "";
        spanGender.innerHTML = "";
    }
    if (month.value == "0") {
        month.style.borderColor = "red";
        spanDate.style.color = "red";
        spanDate.innerHTML = "Enter your Date of Birth";
        status = false;
    } else {
        month.style.borderColor = "";
        spanDate.style.color = "";
        spanDate.innerHTML = "";

    }
    if ((month.value == "4" || month.value == "6" || month.value == "9" || month.value == "11") && day.value == "31") {
        spanValid.style.color = "red";
        spanValid.innerHTML = "Enter a valid date";
        status = false;
    } else {
        spanValid.innerHTML = "";
        spanValid.style.color = "";
    }
    if (month.value == "2" && (day.value == "29" || day.value == "30" || day.value == "31")) {
        if ((year.value % 4 == 0) && day.value == "29") {
            spanValid.innerHTML = "";
            spanValid.style.color = "";
        } else {
            spanValid.innerHTML = "Enter a valid date";
            spanValid.style.color = "red";
            status = false;
        }
    }
    if (day.value == "0") {
        day.style.borderColor = "red";
        spanDate.style.color = "red";
        spanDate.innerHTML = "Enter your Date of Birth";
        status = false;
    } else {
        day.style.borderColor = "";
        spanDate.style.color = "";
        spanDate.innerHTML = "";

    }
    if (year.value == "0") {
        year.style.borderColor = "red";
        spanDate.style.color = "red";
        spanDate.innerHTML = "Enter your Date of Birth";
        status = false;
    } else {
        year.style.borderColor = "";
        spanDate.style.color = "";
        spanDate.innerHTML = "";

    }
    return status;
}