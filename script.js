function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    if (passwordInput.length < 8) {
        showError("Password must be 8 characters or more.");
    } else if (!/\d/.test(passwordInput)) {
        showError("Password must include at least one number.");
    } else if (!/[A-Z]/.test(passwordInput)) {
        showError("Password must include at least one capital letter.");
    } else {
        errorElement.innerText = "";
        alert(`Strong password detected. Password set to ${passwordInput}!`);
    }
}

function showError(message) {
    const errorElement = document.getElementById("error");
    errorElement.innerText = message;
}
