function showSurvey(type) {
    let questions = {
        stressed: "What’s making you feel stressed?",
        sad: "What’s making you feel sad?",
        unsure: "What are you feeling unsure about?"
    };

    let surveyHTML = `
        <div class="survey-box">
            <h2>${questions[type]}</h2>
            <input type="text" id="response" placeholder="Your response...">
            <button class="submit-button" onclick="submitSurvey('${type}')">Submit</button>
        </div>
    `;

    document.getElementById("surveyContainer").innerHTML = surveyHTML;
}

function submitSurvey(type) {
    let response = document.getElementById("response").value;
    if (response.trim() === "") return;

    let responses = {
        stressed: "It sounds like you're dealing with a lot. Try taking deep breaths and taking breaks.",
        sad: "I'm sorry you're feeling this way. Talking to someone you trust might help.",
        unsure: "Uncertainty can be tough. Try breaking things down step by step."
    };

    document.getElementById("surveyContainer").innerHTML = `
        <div class="survey-box">
            <h2>Thank you for sharing.</h2>
            <p>${responses[type]}</p>
        </div>
    `;
}

function openChat() {
    document.getElementById("chatContainer").classList.remove("hidden");
    document.body.style.display = "grid";
    document.body.style.gridTemplateColumns = "50% 50%";
}

function closeChat() {
    document.getElementById("chatContainer").classList.add("hidden");
    document.body.style.display = "block";
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    let input = document.getElementById("userInput").value;
    if (!input.trim()) return;

    let chatBox = document.querySelector(".chat-messages");
    chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
    chatBox.innerHTML += `<p><strong>Buni:</strong> I'm here for you!</p>`;
    document.getElementById("userInput").value = "";
}

