function showSurvey(feeling) {
    let surveyContainer = document.getElementById("survey-container");
    let message = "";

    if (feeling === "stressed") {
        message = "<strong>Thank you for sharing.</strong><br>It sounds like you're dealing with a lot. Try taking deep breaths and taking breaks.";
    } else if (feeling === "sad") {
        message = "<strong>Thank you for sharing.</strong><br>Remember, it's okay to feel sad. Talk to someone you trust.";
    } else if (feeling === "unsure") {
        message = "<strong>Thank you for sharing.</strong><br>It's okay not to have all the answers. Take things one step at a time.";
    }

    surveyContainer.innerHTML = `<div>${message}</div>`;
    surveyContainer.style.display = "block";
}

function toggleChat() {
    let chatbox = document.getElementById("chatbox");
    if (chatbox.classList.contains("active")) {
        chatbox.classList.remove("active");
    } else {
        chatbox.classList.add("active");
    }
}

function sendMessage() {
    let input = document.getElementById("chat-input");
    let messages = document.getElementById("chat-messages");

    if (input.value.trim() !== "") {
        let userMessage = `<div style="background: white; color: black; padding: 10px; border-radius: 10px; margin-bottom: 10px;">${input.value}</div>`;
        messages.innerHTML += userMessage;
        input.value = "";
    }
}
