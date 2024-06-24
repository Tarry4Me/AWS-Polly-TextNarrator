function convertTextToSpeech() {
    const text = document.getElementById('text-input').value;
    fetch('https://your-backend-url.com/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text })
    })
        .then(response => response.json())
        .then(data => {
            const audioElement = document.getElementById('audio-output');
            audioElement.src = data.audioUrl;
            audioElement.hidden = false;
            audioElement.play();
        })
        .catch(error => console.error('Error:', error));
}
