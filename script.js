document.addEventListener("DOMContentLoaded", function () {
    const surveyContainer = document.getElementById("survey-container");

    function showSurvey(type) {
        let surveyHTML = `
            <div class="survey-box">
                <h2>${type} Survey</h2>
                <p>${getSurveyQuestion(type)}</p>
                <textarea placeholder="Share your feelings..."></textarea><br>
                <button class="submit-button">Submit</button>
            </div>
        `;
        surveyContainer.innerHTML = surveyHTML;
    }

    function getSurveyQuestion(type) {
        const questions = {
            "Unsure": "What's making you feel unsure today?",
            "Sad": "What’s making you feel sad?",
            "Stressed": "What’s causing your stress?",
        };
        return questions[type];
    }

    document.getElementById("unsure").addEventListener("click", () => showSurvey("Unsure"));
    document.getElementById("sad").addEventListener("click", () => showSurvey("Sad"));
    document.getElementById("stressed").addEventListener("click", () => showSurvey("Stressed"));
});

