function showSurvey(type) {
  document.getElementById("survey").classList.remove("hidden");
  document.getElementById("thank-you").classList.add("hidden");
  document.getElementById("survey-answer").value = "";

  const title = document.getElementById("survey-title");
  const question = document.getElementById("survey-question");

  if (type === "stressed") {
    title.innerText = "Stressed Survey";
    question.innerText = "What’s making you feel stressed?";
  } else if (type === "sad") {
    title.innerText = "Sad Survey";
    question.innerText = "Why are you feeling sad today?";
  } else if (type === "unsure") {
    title.innerText = "Unsure Survey";
    question.innerText = "What is making you unsure?";
  }
}

function submitSurvey() {
  document.getElementById("survey").classList.add("hidden");
  document.getElementById("thank-you").classList.remove("hidden");
}

function toggleChat() {
  const chatbox = document.getElementById("chatbox");
  chatbox.classList.toggle("hidden");
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  const messages = document.getElementById("chat-messages");

  if (message === "") return;

  const userMessage = document.createElement("div");
  userMessage.textContent = "You: " + message;
  messages.appendChild(userMessage);

  const buniMessage = document.createElement("div");
  buniMessage.textContent = "Buni: I'm here for you 💖 Take a breath, you've got this.";
  messages.appendChild(buniMessage);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}
