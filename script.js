let form = document.querySelector("form");
let alr = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let cardnumber = document.getElementById("cardNumber");

    if (cardnumber.value === "" || !/[0-9]{13,16}/.test(cardnumber.value)) {
        alr.classList.remove("d-none");
        cardnumber.classList.add("is-invalid");
    } else {
        alr.classList.add("d-none");
        cardnumber.classList.remove("is-invalid");
        cardnumber.classList.add("is-valid");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let cvcnumber = document.getElementById("cvcNumber");

    if (cvcnumber.value === "" || !/[0-9]{3}/.test(cvcnumber.value)) {
        alr.classList.remove("d-none");
        cvcnumber.classList.add("is-invalid");
    } else {
        alr.classList.add("d-none");
        cvcnumber.classList.remove("is-invalid");
        cvcnumber.classList.add("is-valid");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let amount = document.getElementById("amount");

    if (amount.value === "" || !/[0-9]{1,50}/.test(amount.value)) {
        alr.classList.remove("d-none");
        amount.classList.add("is-invalid");
    } else {
        alr.classList.add("d-none");
        amount.classList.remove("is-invalid");
        amount.classList.add("is-valid");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstname = document.getElementById("firstName");

    if (firstname.value === "" || !/[a-zA-Z]/.test(firstname.value)) {
        alr.classList.remove("d-none");
        firstname.classList.add("is-invalid");
    } else {
        alr.classList.add("d-none");
        firstname.classList.remove("is-invalid");
        firstname.classList.add("is-valid");
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let lastname = document.getElementById("lastName");

    if (lastname.value === "" || !/[a-zA-Z]/.test(lastname.value)) {
        alr.classList.remove("d-none");
        lastname.classList.add("is-invalid");
    } else {
        alr.classList.add("d-none");
        lastname.classList.remove("is-invalid");
        lastname.classList.add("is-valid");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let city = document.getElementById("city");

    if (city.value === "") {
        alr.classList.remove("d-none");
        city.classList.add("is-invalid");
    } else {
        alr.classList.add("d-none");
        city.classList.remove("is-invalid");
        city.classList.add("is-valid");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let state = document.getElementById("state");

    if (state.value === "" || state.value === "null") {
        alr.classList.remove("d-none");
        state.classList.add("is-invalid");
    } else {
        alr.classList.add("d-none");
        state.classList.remove("is-invalid");
        state.classList.add("is-valid");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let postalcode = document.getElementById("postalCode");

    if (postalcode.value === "" || !/[0-9]{3,6}/.test(postalcode.value)) {
        alr.classList.remove("d-none");
        postalcode.classList.add("is-invalid");
    } else {
        alr.classList.add("d-none");
        postalcode.classList.remove("is-invalid");
        postalcode.classList.add("is-valid");
    }
});