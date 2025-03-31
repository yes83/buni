// Show Survey
function showSurvey(type) {
    document.querySelectorAll('.survey').forEach(survey => {
        survey.style.display = 'none';
    });
    document.getElementById(`survey-${type}`).style.display = 'block';
}

// Hide Survey
function hideSurvey(type) {
    document.getElementById(`survey-${type}`).style.display = 'none';
}
