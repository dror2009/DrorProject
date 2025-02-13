const serverUrl = "/ashx/userTracker.ashx"; // Updated path

// Function to send user status to the server
function sendUserStatus(status) {
    fetch(serverUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, timestamp: new Date().toISOString() })
    }).catch(err => console.error("Error tracking user:", err));
}

// Function to update the connected user count
function updateUserCount() {
    fetch(serverUrl + "?count=true") // Request the current user count
        .then(response => response.json())
        .then(data => {
            document.getElementById("userCount").textContent = `👥 Connected users: ${data.count}`;
        })
        .catch(err => console.error("Error fetching user count:", err));
}

// Notify server when user connects
document.addEventListener("DOMContentLoaded", () => {
    sendUserStatus("connected");
    updateUserCount(); // Update count on load
});

// Detect tab change
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        sendUserStatus("inactive");
    } else {
        sendUserStatus("active");
    }
});

// Detect when user leaves the page
window.addEventListener("beforeunload", () => sendUserStatus("disconnected"));
window.addEventListener("unload", () => sendUserStatus("disconnected"));

// Auto-refresh user count every 5 seconds
setInterval(updateUserCount, 1000);
