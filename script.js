function openSurvey(type) {
    let title = document.getElementById("survey-title");
    let question = document.getElementById("survey-question");
    
    if (type === "unsure") {
        title.innerText = "Unsure Survey";
        question.innerText = "What is making you feel unsure?";
    } else if (type === "sad") {
        title.innerText = "Sad Survey";
        question.innerText = "On a scale of 1 to 10, how sad are you feeling?";
    } else if (type === "stressed") {
        title.innerText = "Stressed Survey";
        question.innerText = "What is causing your stress?";
    }

    document.getElementById("survey-container").classList.remove("hidden");
}

function submitSurvey() {
    let response = document.getElementById("survey-response");
    response.innerText = "Thank you for sharing! We appreciate your response.";
}

function toggleChat() {
    document.body.classList.add("split-screen");
}

function closeChat() {
    document.body.classList.remove("split-screen");
}

function sendMessage(event) {
    if (event.key === "Enter") {
        let input = document.getElementById("chat-input");
        let chatBox = document.getElementById("chat-box");

        if (input.value.trim() !== "") {
            let message = document.createElement("p");
            message.innerText = "You: " + input.value;
            chatBox.appendChild(message);
            input.value = "";
        }
    }
}
