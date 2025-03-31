document.addEventListener("DOMContentLoaded", function () {
    const surveyContainer = document.getElementById("survey-container");

    function showSurvey(type) {
        let surveyHTML = `
            <div class="survey-box">
                <h2>${type} Survey</h2>
                <p>${getSurveyQuestion(type, 1)}</p>
                <input type="number" min="1" max="10" placeholder="Rate from 1-10"><br><br>

                <p>${getSurveyQuestion(type, 2)}</p>
                <textarea placeholder="Share your feelings..."></textarea><br>

                <button class="submit-button">Submit</button>
            </div>
        `;

        surveyContainer.innerHTML = surveyHTML;

        document.querySelector(".submit-button").addEventListener("click", () => showResponse(type));
    }

    function getSurveyQuestion(type, questionNumber) {
        const questions = {
            "Unsure": [
                "On a scale of 1 to 10, how uncertain are you feeling?",
                "What are you feeling unsure about?"
            ],
            "Sad": [
                "On a scale of 1 to 10, how sad are you feeling?",
                "What’s making you feel sad?"
            ],
            "Stressed": [
                "On a scale of 1 to 10, how stressed are you?",
                "What’s causing your stress?"
            ]
        };
        return questions[type][questionNumber - 1];
    }

    function showResponse(type) {
        let responseHTML = `
            <div class="survey-box">
                <h2>Buni's Advice</h2>
                <p>${getResponseMessage(type)}</p>
            </div>
        `;
        surveyContainer.innerHTML = responseHTML;
    }

    function getResponseMessage(type) {
        const responses = {
            "Unsure": "Feeling unsure is normal. Try breaking things down into smaller steps and talking to a trusted friend or writing down your thoughts.",
            "Sad": "Sadness can be tough, but you're not alone. Engaging in activities you enjoy, talking to someone, or practicing mindfulness can help.",
            "Stressed": "Stress can be overwhelming. Take deep breaths, organize your tasks, and don't hesitate to take breaks. You're doing great!"
        };
        return responses[type];
    }

    document.getElementById("unsure").addEventListener("click", () => showSurvey("Unsure"));
    document.getElementById("sad").addEventListener("click", () => showSurvey("Sad"));
    document.getElementById("stressed").addEventListener("click", () => showSurvey("Stressed"));
});


