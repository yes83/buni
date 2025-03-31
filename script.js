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

    let userMessage = `<p style="text-align:right;">${userInput}</p>`;
    chatBody.innerHTML += userMessage;

    let responses = [
        "I'm here for you! 🌸",
        "Deep breaths can help. Try it now!",
        "You are stronger than you think! 💪",
        "Sending virtual bunny hugs! 🐰"
    ];
    chatBody.innerHTML += `<p class="buni-text">${responses[Math.floor(Math.random() * responses.length)]}</p>`;

    document.getElementById("user-input").value = "";
}
