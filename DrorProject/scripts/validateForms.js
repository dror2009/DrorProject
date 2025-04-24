document.addEventListener("DOMContentLoaded", function () {
    console.log("Validation script loaded and running..."); // Debugging log

    // =================== Configuration =================== //

    const MIN_USERNAME_LENGTH = 3; //username min length
    const MAX_USERNAME_LENGTH = 15; //username max length
    const MIN_FNAME_LENGTH = 2; //first name min length
    const MAX_FNAME_LENGTH = 15; //first name max length
    const MIN_LNAME_LENGTH = 2; //last name min length
    const MAX_LNAME_LENGTH = 15; //last name max length
    const MIN_PASSWORD_LENGTH = 4; //password min length
    const MAX_PASSWORD_LENGTH = 15; // password max length
    const MIN_EMAIL_LENGTH = 6; //email min length
    const MAX_EMAIL_LENGTH = 30; //email max length
    const MIN_AGE = 13; //age min value
    const MAX_AGE = 120; //age max value
    const MIN_YEAR_BORN = 1900; //year born min value
    const MAX_YEAR_BORN = new Date().getFullYear() - 12; //year born max value
    const MAX_PHONE_LENGTH = 10; //phone number max length

    // Patterns for validation
    const NAME_PATTERN = /^[a-zA-Z\u0590-\u05FF\s]+$/; // English & Hebrew letters only
    const USERNAME_PATTERN = /^[a-zA-Z0-9\u0590-\u05FF\s]+$/; // Hebrew, English, numbers
    const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PHONE_PATTERN = /^(05[0-9]|0[2-9])\d{7}$/; // Israeli phone format

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
    function enforceLengthRestrictions(selector, maxLength) {
        const input = document.querySelector(selector);
        if (input) {
            input.addEventListener("input", function () {
                if (input.value.length > maxLength) {
                    input.value = input.value.slice(0, maxLength);
                }
            });
        }
    }

    // Strict phone number validation (Numbers only, max 10 digits, no special characters)
    function enforcePhoneNumberRestrictions(selector, maxLength) {
        const input = document.querySelector(selector);
        if (input) {
            input.addEventListener("input", function () {
                let cleanedValue = input.value.replace(/\D/g, ''); // Remove all non-numeric characters

                // Enforce max length
                if (cleanedValue.length > maxLength) {
                    cleanedValue = cleanedValue.slice(0, maxLength);
                }

                input.value = cleanedValue; // Update input field with cleaned value
            });
        }
    }

    // Apply length restrictions to relevant fields (ONLY IF THEY EXIST)
    enforceLengthRestrictions("[name='uName']", MAX_USERNAME_LENGTH);
    enforceLengthRestrictions("[name='fName']", MAX_FNAME_LENGTH);
    enforceLengthRestrictions("[name='lName']", MAX_LNAME_LENGTH);
    enforceLengthRestrictions("[name='pwd']", MAX_PASSWORD_LENGTH);
    enforceLengthRestrictions("[name='pwd1']", MAX_PASSWORD_LENGTH);
    enforceLengthRestrictions("[name='email']", MAX_EMAIL_LENGTH);
    enforceLengthRestrictions("[name='emmail']", MAX_EMAIL_LENGTH);

    // Apply phone number restrictions (Numbers only, max 10 characters)
    enforcePhoneNumberRestrictions("[name='phoneNum']", MAX_PHONE_LENGTH);

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
    if ($("#login").length) {
        $("#login").validate({
            // (a) Use your custom rules via the plugin's rules/messages
            rules: {
                uName: {
                    required: true,
                    minlength: MIN_USERNAME_LENGTH,
                    pattern: USERNAME_PATTERN
                },
                pwd: {
                    required: true,
                    minlength: MIN_PASSWORD_LENGTH
                }
            },
            messages: {
                uName: {
                    required: "Username is required",
                    minlength: `At least ${MIN_USERNAME_LENGTH} chars`
                },
                pwd: {
                    required: "Password is required",
                    minlength: `At least ${MIN_PASSWORD_LENGTH} chars`
                }
            },

            // 2) submitHandler only runs when the form is valid
            submitHandler: function (form) {
                // form is the DOM element; you can still use jQuery
                const formData = $(form).serialize();

                $.ajax({
                    type: "POST",
                    url: "login.aspx",
                    data: formData,
                    success: function (data) {
                        const html = $(data);
                        const msg = html.find("#resultArea").html();
                        $("#resultArea").html(msg);

                        if (html.find("#shouldClear").html() === "true") {
                            form.reset();
                            $("#welcome-message").html("Welcome, " + $("input[name=uName]").val());
                        } else {
                            $("#welcome-message").html("Welcome Guest");
                        }
                    },
                    error: function (xhr, status, err) {
                        $("#resultArea").text("Error: " + err);
                    }
                });
                return false; // prevent normal submit
            }
        });
    }
    if ($("#signup").length) {
        // 1) Validate the form when it is submitted
        $("#signup").validate({
            rules: {
                uName: {
                    required: true,
                    minlength: 5,
                    pattern: /^[a-zA-Z0-9]+$/  // Allow alphanumeric usernames only
                },
                fName: {
                    required: true,
                    minlength: 2
                },
                lName: {
                    required: true,
                    minlength: 2
                },
                age: {
                    required: true,
                    min: 18,
                    max: 120
                },
                email: {
                    required: true,
                    email: true
                },
                pwd: {
                    required: true,
                    minlength: 8
                },
                pwd1: {
                    required: true,
                    minlength: 8,
                    equalTo: "#password"  // Ensure passwords match
                },
                phoneNum: {
                    required: true,
                    minlength: 9
                },
                city: {
                    required: true
                }
            },
            messages: {
                uName: {
                    required: "Please enter a username.",
                    minlength: "Your username must be at least 5 characters long."
                },
                fName: {
                    required: "Please enter your first name.",
                    minlength: "Your first name must be at least 2 characters long."
                },
                lName: {
                    required: "Please enter your last name.",
                    minlength: "Your last name must be at least 2 characters long."
                },
                age: {
                    required: "Please enter your age.",
                    min: "You must be at least 18 years old.",
                    max: "Please enter a valid age."
                },
                email: {
                    required: "Please enter a valid email address.",
                    email: "Please enter a valid email address."
                },
                pwd: {
                    required: "Please provide a password.",
                    minlength: "Your password must be at least 8 characters long."
                },
                pwd1: {
                    required: "Please re-enter your password.",
                    minlength: "Your password must be at least 8 characters long.",
                    equalTo: "Passwords do not match."
                },
                phoneNum: {
                    required: "Please enter your phone number.",
                    minlength: "Phone number must be at least 9 digits."
                },
                city: {
                    required: "Please select a city."
                }
            },
            submitHandler: function (form) {
                // Prevent form submission (handled by AJAX)
                const formData = $(form).serialize();  // Serialize form data for submission

                $.ajax({
                    type: "POST",
                    url: "signup.aspx",  // Your server-side signup handler
                    data: formData,
                    success: function (response) {
                        const html = $(response);
                        const msg = html.find("#resultArea").html();  // Assuming you have an area for this
                        $("#resultArea").html(msg);  // Update the result area with server response

                        if (html.find("#shouldClear").html() === "true") {
                            form.reset();  // Clear the form if necessary
                            $("#welcome-message").html("Welcome, " + $("input[name=uName]").val());
                        } else {
                            $("#welcome-message").html("Welcome Guest");
                        }
                    },
                    error: function (xhr, status, error) {
                        // Handle errors
                        $("#resultArea").html("Error: " + error);
                    }
                });
                return false;  // Prevent normal form submission
            }
        });
    }
    console.log("Validation script successfully applied.");
});
