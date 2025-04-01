function showSurvey(type) {
    document.querySelectorAll('.survey-box').forEach(s => s.style.display = 'none');
    document.getElementById(`survey-${type}`).style.display = 'block';
}

function submitSurvey(type) {
    alert(`Thank you for your response! Buni is here to support you.`);
}

// Chat Functionality
function openChat() {
    document.getElementById("chat-popup").style.display = "block";
    document.getElementById("main-content").style.width = "50%";
}

function closeChat() {
    document.getElementById("chat-popup").style.display = "none";
    document.getElementById("main-content").style.width = "100%";
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
    chatBody.appendChild(userMessage);

    document.getElementById("user-input").value = "";
}
