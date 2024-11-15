document.addEventListener('DOMContentLoaded', function() {
    // Clear input fields on page load
    clearFormFields();

    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('send-btn');

    if (form && submitButton) {
        // Function to handle form validation when the "Send Message" button is clicked
        submitButton.addEventListener('click', function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Clear previous error messages
            clearErrors();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const yourMessage = document.getElementById('yourMessage').value.trim();

            // Validation flag
            let isValid = true;

            // Name validation
            if (!name) {
                showError('nameError', 'Name is required.');
                isValid = false;
            } else if (/\d/.test(name)) {
                showError('nameError', 'Name should not contain numbers.');
                isValid = false;
            }

            // Email validation
            if (!email) {
                showError('emailError', 'Email is required.');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('emailError', 'Invalid email format.');
                isValid = false;
            }

            // Phone validation
            if (!phone) {
                showError('phoneError', 'Phone number is required.');
                isValid = false;
            } else if (!validatePhone(phone)) {
                showError('phoneError', 'Invalid phone number format.');
                isValid = false;
            }

            // Subject validation
            if (!subject) {
                showError('subjectError', 'Subject is required.');
                isValid = false;
            }

            // Message validation
            if (!yourMessage) {
                showError('messageError', 'Message is required.');
                isValid = false;
            }

            // If the form is valid, you can submit it
            if (isValid) {
                // Optionally, submit the form or handle it as needed
                alert("Form submitted successfully!");
                form.reset(); // Clear form after submission
            }
        });

        // Function to show error message
        function showError(elementId, message) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = message;
            }
        }

        // Function to clear error messages
        function clearErrors() {
            const errorElements = document.getElementsByClassName('error-message');
            for (let i = 0; i < errorElements.length; i++) {
                errorElements[i].textContent = '';
            }
        }

        // Function to validate email format
        function validateEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }

        // Function to validate phone format
        function validatePhone(phone) {
            const phonePattern = /^[\d\+\-\(\)\s]+$/; // Allow numbers, spaces, and symbols like +, -, ()
            return phonePattern.test(phone);
        }
    }

    // Function to clear form fields
    function clearFormFields() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.reset();  // Reset all fields in the form
        }
    }
});
