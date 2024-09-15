// Get form and input elements
const registerForm = document.getElementById('registerForm');
const patientNameInput = document.getElementById('patient_name');
const phoneNumberInput = document.getElementById('phonenumber');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const message = document.getElementById('message');

// Function to validate phone number (example: checks for 10 digits)
function isValidPhoneNumber(phone) {
    const phonePattern = /^[0-9]{10}$/; // Adjust regex as per your phone number validation rules
    return phonePattern.test(phone);
}

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Form submit event listener
registerForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous message
    message.textContent = '';
    message.style.color = 'red';

    // Basic validation checks
    if (patientNameInput.value.trim() === '') {
        message.textContent = 'Please enter your first name.';
        return;
    }

    if (!isValidPhoneNumber(phoneNumberInput.value.trim())) {
        message.textContent = 'Please enter a valid 10-digit phone number.';
        return;
    }

    if (!isValidEmail(emailInput.value.trim())) {
        message.textContent = 'Please enter a valid email address.';
        return;
    }

    if (usernameInput.value.trim() === '') {
        message.textContent = 'Please enter a username.';
        return;
    }

    if (passwordInput.value.length < 6) {
        message.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        message.textContent = 'Passwords do not match.';
        return;
    }

    // If all validations pass, show success message or handle successful registration
    message.style.color = 'green';
    message.textContent = 'Registration successful!';
    registerForm.reset(); // Reset form fields
});
