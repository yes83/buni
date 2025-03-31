document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".emotion-button");
    const surveyContainer = document.getElementById("survey-container");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let emotion = this.id;
            displaySurvey(emotion);
        });
    });

    function displaySurvey(emotion) {
        let surveyHTML = "";
        
        if (emotion === "unsure") {
            surveyHTML = `
                <h3>Uncertainty Survey</h3>
                <p>What's making you feel unsure?</p>
                <textarea placeholder="Share your feelings..."></textarea>
                <br>
                <button class="submit">Submit</button>
            `;
        } else if (emotion === "sad") {
            surveyHTML = `
                <h3>Sadness Survey</h3>
                <p>What's making you feel sad?</p>
                <textarea placeholder="Share your feelings..."></textarea>
                <br>
                <button class="submit">Submit</button>
            `;
        } else if (emotion === "stressed") {
            surveyHTML = `
                <h3>Stress Survey</h3>
                <p>What's causing your stress?</p>
                <textarea placeholder="Share your feelings..."></textarea>
                <br>
                <button class="submit">Submit</button>
            `;
        }

        surveyContainer.innerHTML = surveyHTML;
        surveyContainer.style.display = "block";

        // Add event listener to new submit button
        document.querySelector(".submit").addEventListener("click", function () {
            alert("Survey submitted! Thank you for sharing.");
            surveyContainer.style.display = "none";
        });
    }
});
