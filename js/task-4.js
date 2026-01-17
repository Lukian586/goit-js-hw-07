const form = document.querySelector(".login-form");

form.addEventListener("submit", send);

function send(event) {
    event.preventDefault();
    const emailVal = event.target.elements.email.value.trim();
    const passwordVal = event.target.elements.password.value.trim();
    if (emailVal === "" || passwordVal === "") {
        alert("All form fields must be filled in");
        return;
    }
    const info = {
        email: emailVal,
        password: passwordVal,
    };
    console.log(info);
    form.reset();
}


