// Show survey based on emotion selected
function showSurvey(feeling) {
    let surveyContainer = document.getElementById("survey-container");
    let surveyHTML = "";

    if (feeling === "sad") {
        surveyHTML = `
            <div class="survey">
                <h3>Sadness Survey</h3>
                <p>On a scale of 1 to 10, how sad are you?</p>
                <input type="number" min="1" max="10">
                <p>What's making you feel sad?</p>
                <textarea placeholder="Share your feelings..."></textarea>
                <button onclick="submitSurvey('sad')">Submit</button>
            </div>
        `;
    } else if (feeling === "stressed") {
        surveyHTML = `
            <div class="survey">
                <h3>Stress Survey</h3>
                <p>On a scale of 1 to 10, how stressed are you?</p>
                <input type="number" min="1" max="10">
                <p>What’s causing you stress?</p>
                <textarea placeholder="Share your stress..."></textarea>
                <button onclick="submitSurvey('stressed')">Submit</button>
            </div>
        `;
    } else if (feeling === "unsure") {
        surveyHTML = `
            <div class="survey">
                <h3>Unsure Survey</h3>
                <p>Can you describe what you're feeling?</p>
                <textarea placeholder="Your thoughts..."></textarea>
                <button onclick="submitSurvey('unsure')">Submit</button>
            </div>
        `;
    }

    surveyContainer.innerHTML = surveyHTML;
}

// Submit survey and show response
function submitSurvey(feeling) {
    let responseMessage = "";

    if (feeling === "sad") {
        responseMessage = "Buni says: I'm sorry you're feeling this way 💕 Try to talk to someone close to you and do something you enjoy!";
    } else if (feeling === "stressed") {
        responseMessage = "Buni says: Stress can be tough! 🧘‍♀️ Try deep breathing, taking a break, or making a small to-do list.";
    } else if (feeling === "unsure") {
        responseMessage = "Buni says: It's okay to feel unsure! Reflect on your emotions and take things one step at a time. 💖";
    }

    document.getElementById("survey-container").innerHTML = `<p>${responseMessage}</p>`;
}

// Open chat popup
function openChat() {
    document.getElementById("chat-popup").style.display = "block";
}

// Close chat popup
function closeChat() {
    document.getElementById("chat-popup").style.display = "none";
}

// Send message in chat
function sendMessage() {
    let chatInput = document.getElementById("chat-input").value;
    let chatMessages = document.getElementById("chat-messages");

    if (chatInput.trim() !== "") {
        chatMessages.innerHTML += `<p><strong>You:</strong> ${chatInput}</p>`;
        chatMessages.innerHTML += `<p><strong>Buni:</strong> I'm here for you! 💖</p>`;
        document.getElementById("chat-input").value = "";
    }
}

