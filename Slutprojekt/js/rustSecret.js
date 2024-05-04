// Array of audio file paths
let audioFiles = [
    './audio/rustHeadshotSecret.mp3',
    './audio/rustEokaSecret.mp3',
    './audio/rustHempSecret.mp3',
    './audio/rustTeam_InviteSecret.mp3'
];

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Variable to keep track of whether an audio is currently playing
let isPlaying = false;

document.addEventListener('click', function(event) {
    if (event.target.closest('.nav-main') && !isPlaying) {
        // Create a new audio element with a randomly selected audio file
        let audio = new Audio(getRandomElement(audioFiles));
        // Set the volume to 10%
        audio.volume = 0.1;
        // Play the audio
        audio.play();

        // Set isPlaying to true
        isPlaying = true;

        // Listen for the ended event to allow new audio to play
        audio.addEventListener('ended', function() {
            // Set isPlaying to false when the audio has ended
            isPlaying = false;
        });
    }
});
