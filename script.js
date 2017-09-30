/**
 * function create form
 */
function createForm() {
    var form = document.createElement("form");
    document.querySelector('#wrap-form').appendChild(form);
    form.setAttribute("action", "https://www.google.ru/");
    form.setAttribute("name", "login");
    form.setAttribute("onsubmit", "return validateForm()");


    // Creating inputs
    var inputAge = document.createElement('input');
    inputAge.setAttribute("type", "text");
    inputAge.setAttribute("name", "age");
    inputAge.classList.add("form-control");
    inputAge.setAttribute("placeholder", "age");
    form.appendChild(inputAge);

    var inputUsername = document.createElement('input');
    inputUsername.setAttribute("type", "text");
    inputUsername.setAttribute("name", "username");
    inputUsername.classList.add("form-control");
    inputUsername.setAttribute("placeholder", "user_");
    form.appendChild(inputUsername);

    var inputDate = document.createElement('input');
    inputDate.setAttribute("type", "text");
    inputDate.setAttribute("name", "date");
    inputDate.classList.add("form-control");
    inputDate.setAttribute("placeholder", "dd/mm/yyyy");
    form.appendChild(inputDate);


    var inputSubmit = document.createElement('input');
    inputSubmit.setAttribute("type", "submit");
    inputSubmit.setAttribute("value", "Validate Me");
    inputSubmit.classList.add("btn", "btn-success");
    form.appendChild(inputSubmit);
}

createForm();

/**
 * function checkUser validation
 */
function checkUser() {
    var userElement = document.querySelector('input[name="username"]').value;
    if (!userElement.startsWith("user_")) {
        document.querySelector('input[name="username"]').style.borderColor = "#dc3545";
        alert("Your data is invalid");
        return false;
    }
    else {
        document.querySelector('input[name="username"]').style.borderColor = "#28a745";
        return true;

    }
}

/**
 * function checkAge validation
 */
function checkAge() {
    var ageElement = document.querySelector('input[name="age"]').value;
    if (!ageElement.match(/^\d+$/)) {
        document.querySelector('input[name="age"]').style.borderColor = "#dc3545";
        alert("Your data is invalid");
        return false;
    } else {
        document.querySelector('input[name="age"]').style.borderColor = "#28a745";
        return true;
    }
}

/**
 * function checkDate validation
 */
function checkDate() {
    var dateElement = document.querySelector('input[name="date"]').value;

    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    currentDate = day + '/' + month + '/' + year;

    if (dateElement == "") {
        document.querySelector('input[name="date"]').style.borderColor = "#dc3545";
        alert("Your data is invalid");
        return false;
    }
    else if (dateElement != currentDate) {
        document.querySelector('input[name="date"]').style.borderColor = "#dc3545";
        alert("Your data is invalid");
        return false;
    } else {
        document.querySelector('input[name="date"]').style.borderColor = "#28a745";
        return true;
    }
}

function validateForm() {

    var user = checkUser();
    var age = checkAge();
    var date = checkDate();

    if (user && age && date) {
        alert("Your form is valid!");
        return true;
    }
    else {
        return false;
    }
}
