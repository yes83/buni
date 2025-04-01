function showSurvey(type) {
    document.querySelectorAll('.survey-box').forEach(s => s.style.display = 'none');
    document.getElementById(`survey-${type}`).style.display = 'block';
}

function submitSurvey(type) {
    alert("Thank you for your response! Buni is here to help. 💖");
}

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
    userMessage.style.background = "#c1e1c1";
    userMessage.style.padding = "8px";
    userMessage.style.borderRadius = "5px";
    userMessage.style.textAlign = "right";
    chatBody.appendChild(userMessage);

    let responses = ["I'm here for you! 🌸", "Take a deep breath!", "You're doing great!", "Sending virtual hugs! 🐰"];
    let buniMessage = document.createElement("p");
    buniMessage.textContent = responses[Math.floor(Math.random() * responses.length)];
    buniMessage.classList.add("buni-text");
    chatBody.appendChild(buniMessage);

    document.getElementById("user-input").value = "";
}
