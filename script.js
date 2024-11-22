function startDrama() {
  alert("🎂 It's your day! Tap anywhere to start the music and party on! 🥳🎶");
  // playing music
  playmusic();
  
  // Start fireworks animation
  createFireworks();
}
function playmusic(){
  
  const music = document.getElementById('birthday-music');

  // Start the music with muted volume initially (to bypass autoplay block)
  music.play().then(() => {
    // Once the music starts, unmute and fade in the volume
    setTimeout(() => {
      music.muted = false; // Unmute the audio
      fadeInMusic(music);  // Gradually increase volume
    }, 100); // Short delay to allow initial playback

  }).catch((error) => {
    console.log("Autoplay was blocked, please interact with the page to start the music.");
  });
}

function fadeInMusic(audioElement) {
  let volume = 0; // Start at low volume
  const fadeInterval = setInterval(() => {
    if (volume < 1) {
      volume += 0.05; // Increment volume
      audioElement.volume = Math.min(volume, 1); // Cap volume at 1
    } else {
      clearInterval(fadeInterval); // Stop increasing volume
    }
  }, 200); // Smooth fade every 200ms
}

function createFireworks() {
  const fireworksContainer = document.getElementById('fireworks-container');
  fireworksContainer.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.animationDelay = `${Math.random()}s`;
    fireworksContainer.appendChild(firework);
  }
}

// Fireworks animation
document.head.insertAdjacentHTML(
  'beforeend',
  `<style>
    .firework {
      position: absolute;
      bottom: 0;
      width: 8px;
      height: 8px;
      background-color: #ff4757;
      border-radius: 50%;
      animation: explode 1.5s ease-out infinite;
    }
  </style>`
);
