function showSurvey(type) {
    document.querySelectorAll('.survey-box').forEach(s => s.style.display = 'none');
    document.getElementById(`survey-${type}`).style.display = 'block';
}

function submitSurvey(type) {
    alert(`Thank you for your response! Buni will provide helpful advice soon.`);
}

// Chat Functionality
function openChat() {
    let chatPopup = document.getElementById("chat-popup");
    chatPopup.style.display = "block";
    chatPopup.style.left = "50%";
    chatPopup.style.top = "50%";
}

function closeChat() {
    document.getElementById("chat-popup").style.display = "none";
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBody = document.getElementById("chat-body");

    if (userInput.trim() === "") return;

    let userMessage = `<p style="text-align:right;">${userInput}</p>`;
    chatBody.innerHTML += userMessage;

    let responses = [
        "I'm here for you! 🌸",
        "Deep breaths can help. Try it now!",
        "You are stronger than you think! 💪",
        "Sending virtual bunny hugs! 🐰"
    ];
    chatBody.innerHTML += `<p class="buni-text">${responses[Math.floor(Math.random() * responses.length)]}</p>`;

    document.getElementById("user-input").value = "";
}

// Make Chat Pop-up Draggable
let chatPopup = document.getElementById("chat-popup");
let chatHeader = document.querySelector(".chat-header");

let isDragging = false;
let offsetX, offsetY;

chatHeader.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - chatPopup.getBoundingClientRect().left;
    offsetY = e.clientY - chatPopup.getBoundingClientRect().top;
    chatPopup.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        chatPopup.style.left = `${e.clientX - offsetX}px`;
        chatPopup.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    chatPopup.style.cursor = "grab";
});

