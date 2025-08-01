
document.getElementById('start-voice').addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';

  recognition.start();

  recognition.onresult = function (event) {
    const speechResult = event.results[0][0].transcript;
    document.getElementById('voice-text').textContent = "You said: " + speechResult;
  };

  recognition.onerror = function (event) {
    document.getElementById('voice-text').textContent = "Voice recognition error: " + event.error;
  };
});
