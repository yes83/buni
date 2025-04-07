function showSurvey(type) {
  let question = '';
  if (type === 'stressed') question = "What's making you feel stressed?";
  else if (type === 'sad') question = "What’s making you feel sad?";
  else if (type === 'unsure') question = "What is making you unsure?";

  document.getElementById('survey-container').innerHTML = `
    <div class="survey-box">
      <h3>${question}</h3>
      <input type="text" placeholder="Your response..." />
      <br />
      <button onclick="submitSurvey()">Submit</button>
    </div>
  `;
}

function submitSurvey() {
  document.getElementById('survey-container').innerHTML = `
    <div class="survey-box">
      <h3>Thank you for sharing.</h3>
      <p>It sounds like you're dealing with a lot. Try taking deep breaths and taking breaks.</p>
    </div>
  `;
}

function toggleChat() {
  const chat = document.getElementById('chatbox');
  chat.classList.toggle('hidden');
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const msg = input.value.trim();
  if (msg === '') return;

  const chat = document.getElementById('chat-messages');
  chat.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
  chat.innerHTML += `<div><strong>Buni:</strong> I hear you. Take a deep breath. 🌸</div>`;
  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}

