function playAudio(type) {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    // Define arrays of possible audio files for each type
    let audioFiles = [];

    switch (type) {
        case 'light-skin':
            audioFiles = ['audio/fair skin/aud1.mp3', 'audio/fair skin/aud2.mp3', 'audio/fair skin/aud3.mp3', 'audio/fair skin/aud4.mp3', 'audio/fair skin/aud5.mp3', 'audio/fair skin/aud6.mp3', 'audio/fair skin/aud7.mp3', 'audio/fair skin/aud8.mp3'];
            break;
        case 'dark-skin':
            audioFiles = ['audio/dark_skin/aud1.mp3', 'audio/dark_skin/aud2.mp3', 'audio/dark_skin/aud3.mp3', 'audio/dark_skin/aud4.mp3', 'audio/dark_skin/aud5.mp3', 'audio/dark_skin/aud6.mp3', 'audio/dark_skin/aud7.mp3', 'audio/dark_skin/aud8.mp3', 'audio/dark_skin/aud9.mp3'];
            break;
        case 'privilege':
            audioFiles = ['audio/priv/aud.mp3', 'audio/priv/aud1.mp3', 'audio/priv/aud2.mp3', 'audio/priv/aud3.mp3', 'audio/priv/aud4.mp3', 'audio/priv/aud5.mp3', 'audio/priv/aud6.mp3', 'audio/priv/aud7.mp3'];
            break;
        case 'discrimination':
            audioFiles = ['audio/discr/aud1.mp3', 'audio/discr/aud2.mp3', 'audio/discr/aud3.mp3', 'audio/discr/aud5.mp3', 'audio/discr/aud6.mp3', 'audio/discr/aud7.mp3', 'audio/discr/aud8.mp3', 'audio/discr/aud9.mp3', 'audio/discr/aud10.mp3'];
            break;
        default:
            audioFiles = [];
    }

    // If audio files are available, pick a random one
    if (audioFiles.length > 0) {
        const randomIndex = Math.floor(Math.random() * audioFiles.length); // Random index
        const randomAudio = audioFiles[randomIndex]; // Get the random audio file
        audioSource.src = randomAudio;
        audioPlayer.load(); // Reload the audio element to ensure the new source is set
        audioPlayer.play(); // Play the randomly selected audio
    }
}

function submitFeedback() {
    const feedback = document.getElementById('userFeedback').value;
    if (feedback) {
        alert('Thank you for your feedback!');
        document.getElementById('userFeedback').value = ''; // Reset the feedback form
    } else {
        alert('Please enter your thoughts before submitting.');
    }
}
