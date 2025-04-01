function openSurvey(type) {
    document.getElementById("surveyBox").style.display = "block";
}

function submitSurvey() {
    let responseText = document.getElementById("surveyInput").value;
    let responseArea = document.getElementById("surveyTextarea").value;
    if (responseText.trim() || responseArea.trim()) {
        document.getElementById("surveyResponse").innerHTML = 
            `<p>Thank you for your response: <strong>${responseText}</strong></p>`;
    }
}

function openChat() {
    document.getElementById("chatContainer").style.display = "flex";
    document.body.style.gridTemplateColumns = "50% 50%";
}

function handleChat(event) {
    if (event.key === "Enter") {
        let input = document.getElementById("chatInput").value;
        if (input.trim()) {
            let chatBox = document.getElementById("chatMessages");
            chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
            document.getElementById("chatInput").value = "";
        }
    }
}
