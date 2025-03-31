function showSurvey(type) {
    document.querySelectorAll('.survey').forEach(s => s.style.display = 'none');
    document.getElementById(`survey-${type}`).style.display = 'block';
}

function submitSurvey(type) {
    let response = document.getElementById(`response-${type}`);
    response.textContent = "Thank you for your response! Buni suggests taking deep breaths and writing down your thoughts.";
}

// Chat
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

    chatBody.innerHTML += `<p class="buni-text">Buni: I hear you. You're doing great! 💖</p>`;
    document.getElementById("user-input").value = "";
}
