function showSurvey(type) {
    document.querySelectorAll('.survey').forEach(survey => survey.style.display = 'none');
    document.getElementById(`survey-${type}`).style.display = 'block';
}

function submitSurvey(type) {
    let level = document.getElementById(`${type}-level`).value;
    let reason = document.getElementById(`${type}-reason`).value;

    let responseMessage = `Your ${type} level is ${level}. `;
    
    if (level <= 3) {
        responseMessage += "You're doing great! Keep focusing on the positive.";
    } else if (level <= 7) {
        responseMessage += `It's okay to feel this way. Expressing your feelings about "${reason}" is a good step.`;
    } else {
        responseMessage += `It's completely okay to feel this way. Consider talking to a trusted friend or practicing self-care.`;
    }

    alert(responseMessage);
}
