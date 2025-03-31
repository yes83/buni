function showSurvey(type) {
    document.querySelectorAll('.survey').forEach(s => s.style.display = 'none');
    document.getElementById(`survey-${type}`).style.display = 'block';
}

function submitSurvey(type) {
    document.getElementById('response').innerText = `Thank you for sharing your ${type} feelings. Buni is here for you!`;
}
