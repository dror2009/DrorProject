function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    const welcomeElement = document.querySelector(".welcome");

    // Get the bounding box of the welcome message
    const rect = welcomeElement.getBoundingClientRect();
    menu.style.top = `50px`; // Place the menu below the welcome message
    menu.style.right = `40px`; // Align with the left edge of the welcome message

    // Toggle the menu visibility
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        populateMenu();
        menu.classList.add("show");
    }
}

function populateMenu() {
    const menu = document.getElementById("dropdown-menu");
    menu.innerHTML = ""; // Clear previous menu items

    if (document.getElementById("welcome-message").textContent.includes("Welcome, ")) {
        menu.innerHTML += `<ul>
            <li><a href="/pages/update/userpage.aspx">Profile</a></li>
            <li><a href="/pages/chat.aspx">Chat</a></li>
            <li><a href="#" onclick="logout()">Logout</a></li>
        </ul>`;
    } else {
        menu.innerHTML += `<ul>
            <li><a href="/pages/login.aspx">Login</a></li>
            <li><a href="/pages/signup.aspx">Signup</a></li>
        </ul>`;
    }
}

function logout() {
    fetch("/ashx/logout.ashx", { method: "POST" }) // Server-side handler for logout
        .then(() => {
            window.location.href = "/pages/main.aspx";
        })
        .catch((error) => console.error("Logout failed:", error));
}
