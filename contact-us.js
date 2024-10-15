function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple checks for empty fields
    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields before submitting.");
        return false;  // Prevents form from being submitted
    }

    // Email validation (basic regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;  // If all checks pass, form can be submitted
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form from submitting without validation

    if (validateForm()) {
        // If validation passes, proceed with EmailJS
        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        }

        emailjs.send("service_2bprv6t", "template_a4cstpu", params)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Email sent successfully!");
            }, function(error) {
                console.log('FAILED...', error);
                alert("Failed to send email. Please try again.");
            });
    }
});
