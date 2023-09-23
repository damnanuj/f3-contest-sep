




function showProfile() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Checking if all fields are filled or not
    if (!fullName || !email || !password) {
        document.getElementById("error-message").textContent = "Oops! All fields are mandatory!";
        return;
    } else {
        // Clear the error message if all fields are filled
        document.getElementById("error-message").textContent = "";
    }

    if (password !== confirmPassword) {
        document.getElementById("error-message").textContent = "Oops! Passwords do not match.";
        return;
    } 
    else {
        // Clear the error message if all fields are filled and passwords match
        document.getElementById("error-message").textContent = "";
    }

    document.getElementById("profileFullName").textContent = " " + fullName;
    document.getElementById("profileEmail").textContent = " " + email;
    document.getElementById("profilePassword").textContent = " " + password;

    // Hide the signup form and show the profile
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("profile").style.display = "block";
}

function showSignupForm() {
    // Clear the input fields
    document.getElementById("signup").reset();

    // Show the signup form and hide the profile
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("profile").style.display = "none";
}