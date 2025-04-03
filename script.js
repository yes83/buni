document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-button");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");

    chatButton.addEventListener("click", function () {
        chatContainer.style.display = "block"; // Show chat when button is clicked
    });

    closeChat.addEventListener("click", function () {
        chatContainer.style.display = "none"; // Hide chat when close button is clicked
    });
});

