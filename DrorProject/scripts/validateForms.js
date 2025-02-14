document.addEventListener("DOMContentLoaded", function () {
    console.log("Validation script loaded and running..."); // Debugging log

    // =================== Configuration =================== //

    const MIN_USERNAME_LENGTH = 3;
    const MAX_USERNAME_LENGTH = 15;
    const MIN_FNAME_LENGTH = 2;
    const MAX_FNAME_LENGTH = 15;
    const MIN_LNAME_LENGTH = 2;
    const MAX_LNAME_LENGTH = 15;
    const MIN_PASSWORD_LENGTH = 4;
    const MAX_PASSWORD_LENGTH = 15;
    const MIN_EMAIL_LENGTH = 6;
    const MAX_EMAIL_LENGTH = 30;
    const MIN_AGE = 0;
    const MAX_AGE = 120;
    const MIN_YEAR_BORN = 1900;
    const MAX_YEAR_BORN = new Date().getFullYear();

    // Patterns for validation
    const NAME_PATTERN = /^[a-zA-Z\u0590-\u05FF\s]+$/; // English & Hebrew letters only
    const USERNAME_PATTERN = /^[a-zA-Z0-9\u0590-\u05FF\s]+$/; // Hebrew, English, numbers
    const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PHONE_PATTERN = /^(05[0-9]|0[2-9])-?\d{7}$/; // Israeli phone format

    // Error messages
    const ERROR_MESSAGES = {
        name: `Must contain only English or Hebrew letters (min ${MIN_FNAME_LENGTH}, max ${MAX_FNAME_LENGTH} characters).`,
        username: `Username must be English/Hebrew/numbers (min ${MIN_USERNAME_LENGTH}, max ${MAX_USERNAME_LENGTH} characters).`,
        passwordLength: `Password must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters.`,
        age: `Age must be between ${MIN_AGE} and ${MAX_AGE}.`,
        email: `Invalid email format (e.g., example@gmail.com).`,
        phone: "Invalid IL phone format (e.g., 052-1234567).",
        yearBorn: `Year must be between ${MIN_YEAR_BORN} and ${MAX_YEAR_BORN}.`,
        passwordMatch: "Passwords do not match.",
        selectOption: "Please select an option.",
        checkbox: "Please select at least one hobby."
    };

    // =================== Helper Functions =================== //

    function showError(input, message) {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains("error-message")) {
            errorElement = document.createElement("span");
            errorElement.classList.add("error-message");
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = message;
        errorElement.style.color = "red";
        errorElement.style.display = "block";
    }

    function clearError(input) {
        let errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains("error-message")) {
            errorElement.remove();
        }
    }

    // Restrict input length (blocks further input)
    function enforceLengthRestrictions(selector, minLength, maxLength) {
        const input = document.querySelector(selector);
        if (input) {
            input.addEventListener("input", function () {
                if (input.value.length > maxLength) {
                    input.value = input.value.slice(0, maxLength);
                }
            });
        }
    }

    // Apply length restrictions to relevant fields (ONLY IF THEY EXIST)
    enforceLengthRestrictions("[name='uName']", MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH);
    enforceLengthRestrictions("[name='fName']", MIN_FNAME_LENGTH, MAX_FNAME_LENGTH);
    enforceLengthRestrictions("[name='lName']", MIN_LNAME_LENGTH, MAX_LNAME_LENGTH);
    enforceLengthRestrictions("[name='pwd']", MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH);
    enforceLengthRestrictions("[name='pwd1']", MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH);
    enforceLengthRestrictions("[name='email']", MIN_EMAIL_LENGTH, MAX_EMAIL_LENGTH);
    enforceLengthRestrictions("[name='emmail']", MIN_EMAIL_LENGTH, MAX_EMAIL_LENGTH);

    // Real-time validation
    document.querySelectorAll("input, select").forEach(input => {
        if (input) {
            input.addEventListener("input", function () {
                validateField(input);
            });
        }
    });

    function validateField(input) {
        let isValid = true;
        let errorMessage = "";

        if (["fName", "lName"].includes(input.name)) {
            if (input.value.length < MIN_FNAME_LENGTH) {
                isValid = false;
                errorMessage = `Must be at least ${MIN_FNAME_LENGTH} characters.`;
            } else if (!NAME_PATTERN.test(input.value)) {
                isValid = false;
                errorMessage = ERROR_MESSAGES.name;
            }
        }

        if (input.name === "uName") {
            if (input.value.length < MIN_USERNAME_LENGTH) {
                isValid = false;
                errorMessage = `Must be at least ${MIN_USERNAME_LENGTH} characters.`;
            } else if (!USERNAME_PATTERN.test(input.value)) {
                isValid = false;
                errorMessage = ERROR_MESSAGES.username;
            }
        }

        if (["pwd", "pwd1"].includes(input.name)) {
            if (input.value.length < MIN_PASSWORD_LENGTH) {
                isValid = false;
                errorMessage = ERROR_MESSAGES.passwordLength;
            }
        }

        if (["age", "mage"].includes(input.name)) {
            const ageValue = parseInt(input.value, 10);
            if (isNaN(ageValue) || ageValue < MIN_AGE || ageValue > MAX_AGE) {
                isValid = false;
                errorMessage = ERROR_MESSAGES.age;
            }
        }

        if (["email", "emmail"].includes(input.name)) {
            if (!EMAIL_PATTERN.test(input.value)) {
                isValid = false;
                errorMessage = ERROR_MESSAGES.email;
            }
        }

        if (input.name === "yearBorn") {
            const yearValue = parseInt(input.value, 10);
            if (isNaN(yearValue) || yearValue < MIN_YEAR_BORN || yearValue > MAX_YEAR_BORN) {
                isValid = false;
                errorMessage = ERROR_MESSAGES.yearBorn;
            }
        }

        if (input.name === "phoneNum") {
            if (!PHONE_PATTERN.test(input.value)) {
                isValid = false;
                errorMessage = ERROR_MESSAGES.phone;
            }
        }

        if (input.name === "pwd1") {
            const passwordInput = document.querySelector("[name='pwd']");
            if (passwordInput && passwordInput.value !== input.value) {
                isValid = false;
                errorMessage = ERROR_MESSAGES.passwordMatch;
            }
        }

        if (["city", "citty", "phonePrefix"].includes(input.name)) {
            if (input.value.trim() === "") {
                isValid = false;
                errorMessage = ERROR_MESSAGES.selectOption;
            }
        }

        if (!isValid) {
            showError(input, errorMessage);
        } else {
            clearError(input);
        }

        return isValid;
    }

    document.querySelectorAll("form").forEach(form => {
        if (form) {
            form.addEventListener("submit", function (event) {
                let isValid = true;
                form.querySelectorAll("input, select").forEach(input => {
                    if (!validateField(input)) {
                        isValid = false;
                    }
                });

                if (!isValid) {
                    event.preventDefault();
                }
            });
        }
    });

    console.log("Validation script successfully applied.");
});
