function openSurvey(type) {
    document.getElementById("survey-container").style.display = "block";
}

function submitSurvey() {
    let response = document.getElementById("survey-input").value;
    document.getElementById("survey-response").innerText = "Thank you for your response: " + response;
}

function toggleChat() {
    let chatBox = document.getElementById("chat-container");
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
}

function sendMessage() {
    let input = document.getElementById("chat-input").value;
    let chatBox = document.getElementById("chat-box");
    let newMessage = document.createElement("p");
    newMessage.textContent = "You: " + input;
    chatBox.appendChild(newMessage);
    document.getElementById("chat-input").value = "";
}
