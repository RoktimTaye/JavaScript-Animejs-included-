let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#loginForm");
// Step 1
form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    //Step 2 Checks if anything is empty
    // Clear previous errors
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    //Step 3 Check weather the email and password is valid or not with regex
    // Regex patterns
    const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    // Step 4 Now the regex result is stored 
    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);
    // Step 5 If the email and password is not valid then show the error message
    let isValid = true;

    if (!emailAns) {
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if (!passwordAns) {
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }
    // Step 6 If everything is correct then show the success message
    if (isValid) {
        document.querySelector("#resultMessage").textContent = "Everything is correct";
    }
});