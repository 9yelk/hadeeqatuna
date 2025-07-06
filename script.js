// Background music fade-in
const bgMusic = document.getElementById("bg-music");
let audioContext;
let gainNode;

// Fade in the music smoothly
function startMusicFadeIn() {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  audioContext.resume().then(() => {
    const source = audioContext.createMediaElementSource(bgMusic);
    gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);

    source.connect(gainNode).connect(audioContext.destination);
    bgMusic.play();
    gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 5); // 5 sec fade-in
  });
}

// Compliment popup
const flowers = document.querySelectorAll(".flower");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

flowers.forEach((flower) => {
  flower.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering document click event
    const compliment = flower.getAttribute("data-compliment");
    popupText.textContent = compliment;

    // Position popup near the flower click but adjust so it stays in viewport
    const popupWidth = 320; // approx width with padding
    let left = e.pageX;
    if (left + popupWidth > window.innerWidth) {
      left = window.innerWidth - popupWidth - 20;
    }
    popup.style.left = left + "px";
    const popupHeight = 150; // approx height of popup box
let top = e.pageY - popupHeight;
if (top < 0) top = 10; // keep it in view
popup.style.top = top + "px";
    popup.classList.remove("hidden");

    document.body.classList.add("popup-open");
  });
});

// Close popup if clicking anywhere else
document.addEventListener("click", (e) => {
  const isFlower = e.target.closest(".flower");
  const isPopup = e.target.closest("#popup");
  if (!isFlower && !isPopup) {
    closePopup();
  }
});

function closePopup() {
  popup.classList.add("hidden");
  document.body.classList.remove("popup-open");
}

// Floating pixels
const pixelContainer = document.getElementById("pixel-container");

function createFloatingPixel() {
  const pixel = document.createElement("div");
  pixel.classList.add("floating-pixel");
  pixel.style.left = Math.random() * window.innerWidth + "px";
  pixel.style.top = window.innerHeight + "px";

  // Randomize color slightly
  const colors = ["#ffb6c1", "#ffc0cb", "#ffe4e1"];
  pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  pixelContainer.appendChild(pixel);

  setTimeout(() => {
    pixel.remove();
  }, 5000);
}

// Create pixels every 300ms
setInterval(createFloatingPixel, 300);
