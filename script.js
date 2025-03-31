// Show Surveys
function showSurvey(type) {
    document.getElementById("survey-box").style.display = "block";
    document.getElementById("survey-title").innerText = type.charAt(0).toUpperCase() + type.slice(1) + " Survey";
}

// Submit Survey
function submitSurvey() {
    document.getElementById("survey-response").innerHTML = "<p><strong>Thank you for your response!</strong></p><p>Buni suggests: Take deep breaths, write down your thoughts, and talk to someone you trust. 🌸</p>";
}

// Open Chat (Enables Split-Screen)
function openChat() {
    document.body.classList.add("split-screen");
    document.getElementById("chat-container").style.display = "block";
}

// Close Chat (Back to Normal Layout)
function closeChat() {
    document.body.classList.remove("split-screen");
    document.getElementById("chat-container").style.display = "none";
}

// Chat Functionality
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBody = document.getElementById("chat-body");

    if (userInput.trim() === "") return;

    chatBody.innerHTML += `<p class="user-message">${userInput}</p>`;

    let responses = [
        "I'm here for you! 🌸",
        "Deep breaths can help. Try it now!",
        "You are stronger than you think! 💪",
        "I'm sending virtual bunny hugs! 🐰"
    ];

    setTimeout(() => {
        chatBody.innerHTML += `<p class="buni-text">${responses[Math.floor(Math.random() * responses.length)]}</p>`;
    }, 1000);

    document.getElementById("user-input").value = "";
}
