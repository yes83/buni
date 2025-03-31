function showSurvey(type) {
    document.querySelectorAll('.survey').forEach(s => s.style.display = 'none');
    document.getElementById(`survey-${type}`).style.display = 'block';
}

function submitSurvey(type) {
    alert(`Thank you for your response! Buni will provide helpful advice soon.`);
}

// Chat Functionality
function openChat() {
    document.getElementById("chat-popup").style.display = "block";
}

function closeChat() {
    document.getElementById("chat-popup").style.display = "none";
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBody = document.getElementById("chat-body");

    if (userInput.trim() === "") return;

    // Display user message
    let userMessage = document.createElement("p");
    userMessage.textContent = userInput;
    userMessage.style.background = "#c1e1c1";
    userMessage.style.padding = "8px";
    userMessage.style.borderRadius = "5px";
    userMessage.style.textAlign = "right";
    userMessage.style.margin = "5px 0";
    chatBody.appendChild(userMessage);

    // Buni's response
    let responses = [
        "I'm here for you! 🌸",
        "Deep breaths can help. Try it now!",
        "You are stronger than you think! 💪",
        "I'm sending virtual bunny hugs! 🐰"
    ];
    let buniMessage = document.createElement("p");
    buniMessage.textContent = responses[Math.floor(Math.random() * responses.length)];
    buniMessage.classList.add("buni-text");
    chatBody.appendChild(buniMessage);

    document.getElementById("user-input").value = "";
}

