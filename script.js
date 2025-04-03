const surveys = {
    unsure: {
        title: "Feeling Unsure?",
        questions: ["What is making you feel unsure?", "Have you tried talking to someone about it?"],
        response: "Feeling unsure is normal. Try breaking things down into smaller steps and talking to a trusted friend or writing down your thoughts."
    },
    sad: {
        title: "Feeling Sad?",
        questions: ["What has been upsetting you?", "Have you taken time for self-care today?"],
        response: "It's okay to feel sad. Take some time to do things that make you happy, like listening to music or going for a walk."
    },
    stressed: {
        title: "Feeling Stressed?",
        questions: ["What has been causing your stress?", "Have you tried any relaxation techniques?"],
        response: "Stress can be overwhelming. Take deep breaths, organize your tasks, and don't hesitate to take breaks. You're doing great!"
    }
};

function showSurvey(feeling) {
    const survey = surveys[feeling];
    document.getElementById("survey-title").innerText = survey.title;
    
    const questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = "";

    survey.questions.forEach((question, index) => {
        const label = document.createElement("label");
        label.innerText = question;
        const input = document.createElement("input");
        input.type = "text";
        input.name = `answer${index}`;
        questionsDiv.appendChild(label);
        questionsDiv.appendChild(input);
        questionsDiv.appendChild(document.createElement("br"));
    });

    document.getElementById("survey-container").style.display = "block";

    document.getElementById("survey-form").onsubmit = function (event) {
        event.preventDefault();
        showResponse(feeling);
    };
}

function showResponse(feeling) {
    const survey = surveys[feeling];
    const responseDiv = document.getElementById("buni-response");
    responseDiv.innerHTML = `<strong>Buni's Advice</strong><p>${survey.response}</p>`;
    responseDiv.style.display = "block";
}

// Chat Feature
function handleChat(event) {
    if (event.key === "Enter") {
        const inputField = document.getElementById("chat-input");
        const message = inputField.value.trim();
        if (message) {
            addToChat("You: " + message);
            generateChatResponse(message);
            inputField.value = "";
        }
    }
}

function addToChat(text) {
    const chatLog = document.getElementById("chat-log");
    const messageElement = document.createElement("p");
    messageElement.innerText = text;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function generateChatResponse(message) {
    const responses = [
        "That sounds tough. I'm here for you!",
        "I understand. Have you tried taking deep breaths?",
        "Remember, you're not alone in this.",
        "It helps to talk about it. What's on your mind?"
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => addToChat("Buni: " + randomResponse), 1000);
}
