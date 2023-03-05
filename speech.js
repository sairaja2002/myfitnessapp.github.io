const message = document.getElementById('speak');
const tell = document.getElementById('myBtn');
tell.addEventListener("click",textToSpeach);
function textToSpeach(message) {
    const speach = new SpeechSynthesisUtterance(message);
    [speach.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(speach);
}
