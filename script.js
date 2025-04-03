function showAdvice(feeling) {
    let adviceText = "";

    if (feeling === "unsure") {
        adviceText = "Feeling unsure is normal. Try breaking things down into smaller steps and talking to a trusted friend or writing down your thoughts.";
    } else if (feeling === "sad") {
        adviceText = "It's okay to feel sad. Take time for yourself, engage in activities that make you happy, and don't be afraid to reach out for support.";
    } else if (feeling === "stressed") {
        adviceText = "Stress can be overwhelming. Take deep breaths, organize your tasks, and don't hesitate to take breaks. You're doing great!";
    }

    document.getElementById("advice-text").textContent = adviceText;
    document.getElementById("advice-box").style.display = "block";
}
