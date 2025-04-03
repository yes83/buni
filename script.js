function showSurvey(type) {
    let question = "";
    if (type === "stressed") {
        question = "Do you feel overwhelmed today?";
    } else if (type === "sad") {
        question = "Are you feeling down today?";
    } else if (type === "unsure") {
        question = "Are you confused about something?";
    }

    document.getElementById("survey-question").innerText = question;
    document.getElementById("survey-container").classList.remove("hidden");
}

function submitSurvey(answer) {
    alert("Thank you for your response: " + answer);
    document.getElementById("survey-container").classList.add("hidden");
}

function toggleChat() {
    let chatBox = document.getElementById("chat-box");
    if (chatBox.classList.contains("hidden")) {
        chatBox.classList.remove("hidden");
    } else {
        chatBox.classList.add("hidden");
    }
}

function sendMessage() {
    let input = document.getElementById("chat-input").value;
    if (input.trim() === "") return;

    let chatMessages = document.querySelector(".chat-messages");
    let messageElement = document.createElement("p");
    messageElement.textContent = "You: " + input;
    chatMessages.appendChild(messageElement);

    document.getElementById("chat-input").value = "";
}
