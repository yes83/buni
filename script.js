function showSurvey(type) {
    document.querySelectorAll('.survey').forEach(s => s.style.display = 'none');
    document.getElementById(`survey-${type}`).style.display = 'block';
}

function submitSurvey(type) {
    let responseText = {
        unsure: "Uncertainty is okay! Take a deep breath and focus on one step at a time.",
        sad: "It's okay to feel sad sometimes. Try doing something you love to lift your mood!",
        stressed: "You're strong! Try deep breathing exercises to calm yourself."
    };
    
    let survey = document.getElementById(`survey-${type}`);
    let responseElement = survey.querySelector(".survey-response");
    responseElement.textContent = responseText[type];
}

function openChat() {
    document.getElementById("chat-popup").style.display = "block";
    document.body.style.display = "grid";
    document.body.style.gridTemplateColumns = "50% 50%";
}

function closeChat() {
    document.getElementById("chat-popup").style.display = "none";
    document.body.style.display = "block";
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBody = document.getElementById("chat-body");

    if (userInput.trim() === "") return;

    let userMessage = document.createElement("p");
    userMessage.textContent = userInput;
    userMessage.style.textAlign = "right";
    chatBody.appendChild(userMessage);

    let responses = [
        "I'm here for you! 🌸",
        "Take deep breaths. You're doing great!",
        "You are stronger than you think! 💪",
        "Virtual bunny hugs! 🐰"
    ];
    let buniMessage = document.createElement("p");
    buniMessage.textContent = responses[Math.floor(Math.random() * responses.length)];
    chatBody.appendChild(buniMessage);

    document.getElementById("user-input").value = "";
}

