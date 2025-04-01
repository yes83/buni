document.getElementById("chat").addEventListener("click", function() {
    document.getElementById("chat-container").style.right = "0";
    document.querySelector(".container").style.width = "50%";
});

document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chat-container").style.right = "-50%";
    document.querySelector(".container").style.width = "90%";
});

const surveys = {
    unsure: {
        title: "Unsure Survey",
        question: "What is making you unsure?"
    },
    sad: {
        title: "Sad Survey",
        question: "What is making you sad?"
    },
    stressed: {
        title: "Stressed Survey",
        question: "What is causing your stress?"
    }
};

document.querySelectorAll(".survey-btn").forEach(button => {
    button.addEventListener("click", function() {
        const type = this.id;
        document.getElementById("survey-title").innerText = surveys[type].title;
        document.getElementById("survey-question").innerText = surveys[type].question;
        document.getElementById("survey-box").style.display = "block";
    });
});

