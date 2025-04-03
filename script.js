document.addEventListener("DOMContentLoaded", function() {
    const surveyContainer = document.getElementById("survey-container");
    const surveyTitle = document.getElementById("survey-title");
    const surveyQuestions = document.getElementById("survey-questions");
    const surveyResponse = document.getElementById("survey-response");
    const responseMessage = document.getElementById("response-message");

    document.querySelectorAll(".emotion-btn").forEach(button => {
        button.addEventListener("click", function() {
            const emotion = this.getAttribute("data-emotion");
            surveyContainer.style.display = "block";
            surveyResponse.style.display = "none";

            if (emotion === "stressed") {
                surveyTitle.innerText = "Stressed Survey";
                surveyQuestions.innerHTML = "<p>What is making you stressed?</p><input type='text' id='response'>";
            } else if (emotion === "sad") {
                surveyTitle.innerText = "Sad Survey";
                surveyQuestions.innerHTML = "<p>Why are you feeling sad?</p><input type='text' id='response'>";
            } else if (emotion === "unsure") {
                surveyTitle.innerText = "Unsure Survey";
                surveyQuestions.innerHTML = "<p>What is making you unsure?</p><input type='text' id='response'>";
            }
        });
    });

    document.getElementById("submit-survey").addEventListener("click", function() {
        surveyContainer.style.display = "none";
        surveyResponse.style.display = "block";
        responseMessage.innerText = "Thank you for sharing. It's okay to feel this way. Remember to take breaks and breathe.";
    });

    const chatBox = document.getElementById("chatbox");
    document.getElementById("chat-btn").addEventListener("click", function() {
        chatBox.style.display = "block";
    });

    document.getElementById("close-chat").addEventListener("click", function() {
        chatBox.style.display = "none";
    });

    document.getElementById("send-btn").addEventListener("click", function() {
        let input = document.getElementById("user-input").value;
        document.getElementById("chat-content").innerHTML += `<p>You: ${input}</p>`;
        document.getElementById("user-input").value = "";
    });
});

