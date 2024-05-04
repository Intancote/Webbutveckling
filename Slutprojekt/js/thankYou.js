window.onload = function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Call the validation function
        if (!validateForm()) {
            return;
        }
        // Redirect to the thank you page
        window.location.href = "./contactReceived.html";
    });
};

function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    // Check if name is empty
    if (!name) {
        alert("Please enter your name.");
        return false;
    }

    // Check if email is empty
    if (!email) {
        alert("Please enter your email.");
        return false;
    }

    // Check if name is valid
    let nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
        alert("Invalid name. Only letters and spaces allowed.");
        return false;
    }

    // Check if email is valid
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    // Check if subject is empty
    if (!subject) {
        alert("Please enter a subject.");
        return false;
    }

    // Check if message is empty
    if (!message) {
        alert("Please enter a message.");
        return false;
    }

    return true;
}