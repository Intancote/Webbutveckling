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
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if name is empty
    if (!name) {
        alert("Please enter a name.");
        return false;
    }

    // Check if name is valid
    var nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
        alert("Invalid name. Only letters and spaces allowed.");
        return false;
    }

    // Check if email is valid
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    // Check if message is empty
    if (!message) {
        alert("Please enter a message.");
        return false;
    }

    return true;
}