// === Password Prompt + Background Music ===
window.onload = function () {
  const password = prompt("Enter password:");
  if (password === "iluvdyelii") {
    document.getElementById('login-screen').style.display = 'none';

    const bgMusic = document.getElementById("bg-music");
    bgMusic.play().catch(() => {
      document.addEventListener("click", () => {
        bgMusic.play();
      }, { once: true });
    });

  } else {
    alert("Incorrect password!");
    document.body.innerHTML = ""; // Blank screen if incorrect
  }
};

// === Compliment popup ===
const flowers = document.querySelectorAll(".flower");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

flowers.forEach((flower) => {
  flower.addEventListener("click", (e) => {
    e.stopPropagation();
    const compliment = flower.getAttribute("data-compliment");
    popupText.textContent = compliment;

    const popupWidth = 320;
    let left = e.pageX;
    if (left + popupWidth > window.innerWidth) {
      left = window.innerWidth - popupWidth - 20;
    }
    popup.style.left = left + "px";

    const popupHeight = 150;
    let top = e.pageY - popupHeight;
    if (top < 0) top = 10;
    popup.style.top = top + "px";

    popup.classList.remove("hidden");
    document.body.classList.add("popup-open");
  });
});

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

// === Floating Pixels ===
const pixelContainer = document.getElementById("pixel-container");

function createFloatingPixel() {
  const pixel = document.createElement("div");
  pixel.classList.add("floating-pixel");
  pixel.style.left = Math.random() * window.innerWidth + "px";
  pixel.style.top = window.innerHeight + "px";

  const colors = ["#ffb6c1", "#ffc0cb", "#ffe4e1"];
  pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  pixelContainer.appendChild(pixel);

  setTimeout(() => {
    pixel.remove();
  }, 5000);
}

setInterval(createFloatingPixel, 300);
