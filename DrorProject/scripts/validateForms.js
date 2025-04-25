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
    const NUMERIC_PATTERN = /^\d+$/;  // Only digits (for numeric fields)

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
    };
    // JQuery form.validate pattern
    $.validator.addMethod("pattern", function (value, element, pattern) {
        if (this.optional(element)) return true;
        return pattern.test(value);
    }, "Invalid format.");

    if ($("#login").length) {
        $("#login").validate({
            // (a) Use your custom rules via the plugin's rules/messages
            rules: {
                uName: {
                    required: true,
                    minlength: MIN_USERNAME_LENGTH,
                    maxlength: MAX_USERNAME_LENGTH,
                    pattern: USERNAME_PATTERN
                },
                pwd: {
                    required: true,
                    minlength: MIN_PASSWORD_LENGTH,
                    maxlength: MAX_PASSWORD_LENGTH
                }
            },
            messages: {
                uName: {
                    required: "Username is required",
                    minlength: `At least ${MIN_USERNAME_LENGTH} characters`,
                    maxlength: `Username cannot exceed ${MAX_USERNAME_LENGTH} characters.`
                },
                pwd: {
                    required: "Password is required",
                    minlength: `At least ${MIN_PASSWORD_LENGTH} characters`,
                    maxlength: `Password cannot exceed ${MAX_USERNAME_LENGTH} characters.`

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
                            $("#welcome-message").html("Welcome, " + $("input[name=uName]").val());
                            form.reset();
                            $("#loginForm").hide();
                            $("#loginSuccess").show();
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
                    minlength: MIN_USERNAME_LENGTH,
                    maxlength: MAX_USERNAME_LENGTH,
                    pattern: USERNAME_PATTERN
                },
                fName: {
                    required: true,
                    minlength: MIN_FNAME_LENGTH,
                    maxlength: MAX_FNAME_LENGTH,
                    pattern: NAME_PATTERN
                },
                lName: {
                    required: true,
                    minlength: MIN_LNAME_LENGTH,
                    maxlength: MAX_LNAME_LENGTH,
                    pattern: NAME_PATTERN
                },
                age: {
                    required: true,
                    min: MIN_AGE,
                    max: MAX_AGE,
                    pattern: NUMERIC_PATTERN  // Ensure only numbers are entered
                },
                email: {
                    required: true,
                    email: true,
                    minlength: MIN_EMAIL_LENGTH,
                    maxlength: MAX_EMAIL_LENGTH,
                    pattern: EMAIL_PATTERN
                },
                pwd: {
                    required: true,
                    minlength: MIN_PASSWORD_LENGTH,
                    maxlength: MAX_PASSWORD_LENGTH
                },
                pwd1: {
                    required: true,
                    minlength: MIN_PASSWORD_LENGTH,
                    maxlength: MAX_PASSWORD_LENGTH,
                    equalTo: "#password"  // Ensure passwords match
                },
                phoneNum: {
                    required: true,
                    minlength: 9,
                    maxlength: MAX_PHONE_LENGTH,
                    pattern: PHONE_PATTERN  // Ensure phone number is valid
                },
                city: {
                    required: true
                },
                yearBorn: {
                    required: true,
                    min: MIN_YEAR_BORN,
                    max: MAX_YEAR_BORN,
                    pattern: NUMERIC_PATTERN  // Ensure only numbers are entered
                },
                prefix: {
                    required: true
                }
            },
            messages: {
                uName: {
                    required: "Please enter a username.",
                    minlength: `Username must be at least ${MIN_USERNAME_LENGTH} characters long.`,
                    maxlength: `Username cannot exceed ${MAX_USERNAME_LENGTH} characters.`,
                    pattern: ERROR_MESSAGES.username
                },
                fName: {
                    required: "Please enter your first name.",
                    minlength: `First name must be at least ${MIN_FNAME_LENGTH} characters long.`,
                    maxlength: `First name cannot exceed ${MAX_FNAME_LENGTH} characters.`,
                    pattern: ERROR_MESSAGES.name
                },
                lName: {
                    required: "Please enter your last name.",
                    minlength: `Last name must be at least ${MIN_LNAME_LENGTH} characters long.`,
                    maxlength: `Last name cannot exceed ${MAX_LNAME_LENGTH} characters.`,
                    pattern: ERROR_MESSAGES.name
                },
                age: {
                    required: "Please enter your age.",
                    min: `Age must be at least ${MIN_AGE} years.`,
                    max: `Age must be less than ${MAX_AGE} years.`,
                    pattern: "Please enter a valid number for age."
                },
                email: {
                    required: "Please enter a valid email address.",
                    email: ERROR_MESSAGES.email,
                    minlength: `Email must be at least ${MIN_EMAIL_LENGTH} characters long.`,
                    maxlength: `Email cannot exceed ${MAX_EMAIL_LENGTH} characters.`
                },
                pwd: {
                    required: "Please provide a password.",
                    minlength: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`,
                    maxlength: `Password cannot exceed ${MAX_PASSWORD_LENGTH} characters.`
                },
                pwd1: {
                    required: "Please re-enter your password.",
                    minlength: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`,
                    maxlength: `Password cannot exceed ${MAX_PASSWORD_LENGTH} characters.`,
                    equalTo: "Passwords do not match."
                },
                phoneNum: {
                    required: "Please enter your phone number.",
                    minlength: "Phone number must be at least 9 digits.",
                    maxlength: `Phone number cannot exceed ${MAX_PHONE_LENGTH} digits.`,
                    pattern: ERROR_MESSAGES.phone
                },
                yearBorn: {
                    required: "Please enter your year of birth.",
                    min: `Year of birth must be after ${MIN_YEAR_BORN}.`,
                    max: `Year of birth must be before ${MAX_YEAR_BORN}.`,
                    pattern: "Please enter a valid year."
                },
                city: {
                    required: "Please select a city."
                },
                prefix: {
                    required: "Please enter a valid prefix."
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
                            $("#welcome-message").html("Welcome, " + $("input[name=uName]").val());
                            form.reset();  // Clear the form if necessary
                            $("#signupForm").hide();
                            $("#signupSuccess").show();
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
    if ($("#update").length) {
        // 1) Validate the form when it is submitted
        $("#update").validate({
            rules: {
                uName: {
                    required: true,
                    minlength: MIN_USERNAME_LENGTH,
                    maxlength: MAX_USERNAME_LENGTH,
                    pattern: USERNAME_PATTERN
                },
                fName: {
                    required: true,
                    minlength: MIN_FNAME_LENGTH,
                    maxlength: MAX_FNAME_LENGTH,
                    pattern: NAME_PATTERN
                },
                lName: {
                    required: true,
                    minlength: MIN_LNAME_LENGTH,
                    maxlength: MAX_LNAME_LENGTH,
                    pattern: NAME_PATTERN
                },
                age: {
                    required: true,
                    min: MIN_AGE,
                    max: MAX_AGE,
                    pattern: NUMERIC_PATTERN  // Ensure only numbers are entered
                },
                email: {
                    required: true,
                    email: true,
                    minlength: MIN_EMAIL_LENGTH,
                    maxlength: MAX_EMAIL_LENGTH,
                    pattern: EMAIL_PATTERN
                },
                pwd: {
                    required: true,
                    minlength: MIN_PASSWORD_LENGTH,
                    maxlength: MAX_PASSWORD_LENGTH
                },
                pwd1: {
                    required: true,
                    minlength: MIN_PASSWORD_LENGTH,
                    maxlength: MAX_PASSWORD_LENGTH,
                    equalTo: "#pwd"  // Ensure passwords match
                },
                phoneNum: {
                    required: true,
                    minlength: 9,
                    maxlength: MAX_PHONE_LENGTH,
                    pattern: PHONE_PATTERN  // Ensure phone number is valid
                },
                city: {
                    required: true
                },
                yearBorn: {
                    required: true,
                    min: MIN_YEAR_BORN,
                    max: MAX_YEAR_BORN,
                    pattern: NUMERIC_PATTERN  // Ensure only numbers are entered
                },
                prefix: {
                    required: true
                }
            },
            messages: {
                uName: {
                    required: "Please enter a username.",
                    minlength: `Username must be at least ${MIN_USERNAME_LENGTH} characters long.`,
                    maxlength: `Username cannot exceed ${MAX_USERNAME_LENGTH} characters.`,
                    pattern: ERROR_MESSAGES.username
                },
                fName: {
                    required: "Please enter your first name.",
                    minlength: `First name must be at least ${MIN_FNAME_LENGTH} characters long.`,
                    maxlength: `First name cannot exceed ${MAX_FNAME_LENGTH} characters.`,
                    pattern: ERROR_MESSAGES.name
                },
                lName: {
                    required: "Please enter your last name.",
                    minlength: `Last name must be at least ${MIN_LNAME_LENGTH} characters long.`,
                    maxlength: `Last name cannot exceed ${MAX_LNAME_LENGTH} characters.`,
                    pattern: ERROR_MESSAGES.name
                },
                age: {
                    required: "Please enter your age.",
                    min: `Age must be at least ${MIN_AGE} years.`,
                    max: `Age must be less than ${MAX_AGE} years.`,
                    pattern: "Please enter a valid number for age."
                },
                email: {
                    required: "Please enter a valid email address.",
                    email: ERROR_MESSAGES.email,
                    minlength: `Email must be at least ${MIN_EMAIL_LENGTH} characters long.`,
                    maxlength: `Email cannot exceed ${MAX_EMAIL_LENGTH} characters.`
                },
                pwd: {
                    required: "Please provide a password.",
                    minlength: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`,
                    maxlength: `Password cannot exceed ${MAX_PASSWORD_LENGTH} characters.`
                },
                pwd1: {
                    required: "Please re-enter your password.",
                    minlength: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`,
                    maxlength: `Password cannot exceed ${MAX_PASSWORD_LENGTH} characters.`,
                    equalTo: "Passwords do not match."
                },
                phoneNum: {
                    required: "Please enter your phone number.",
                    minlength: "Phone number must be at least 9 digits.",
                    maxlength: `Phone number cannot exceed ${MAX_PHONE_LENGTH} digits.`,
                    pattern: ERROR_MESSAGES.phone
                },
                yearBorn: {
                    required: "Please enter your year of birth.",
                    min: `Year of birth must be after ${MIN_YEAR_BORN}.`,
                    max: `Year of birth must be before ${MAX_YEAR_BORN}.`,
                    pattern: "Please enter a valid year."
                },
                city: {
                    required: "Please select a city."
                },
                prefix: {
                    required: "Please enter a valid prefix."
                }
            },
            submitHandler: function (form) {
                // Prevent form submission (handled by AJAX)
                const formData = $(form).serialize();  // Serialize form data for submission

                $.ajax({
                    type: "POST",
                    url: "update.aspx",  // Your server-side signup handler
                    data: formData,
                    success: function (response) {
                        const html = $(response);
                        const msg = html.find("#resultArea").html();  // Assuming you have an area for this
                        $("#resultArea").html(msg);  // Update the result area with server response

                        if (html.find("#shouldClear").html() === "true") {
                            $("#welcome-message").html("Welcome, " + $("input[name=uName]").val());
                            form.reset();  // Clear the form if necessary
                            $("#updateForm").hide();
                            $("#updateSuccess").show();
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
