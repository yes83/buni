function showSurvey(type) {
    document.querySelectorAll('.survey-box').forEach(s => s.style.display = 'none');
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

    let userMessage = document.createElement("p");
    userMessage.textContent = userInput;
    chatBody.appendChild(userMessage);

    let responses = [
        "I'm here for you! 🌸",
        "Deep breaths can help. Try it now!",
        "You are stronger than you think! 💪",
        "I'm sending virtual bunny hugs! 🐰"
    ];
    let buniMessage = document.createElement("p");
    buniMessage.textContent = responses[Math.floor(Math.random() * responses.length)];
    chatBody.appendChild(buniMessage);

    document.getElementById("user-input").value = "";
}

