const flowers = document.querySelectorAll(".flower");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

flowers.forEach((flower) => {
  flower.addEventListener("click", () => {
    const compliment = flower.getAttribute("data-compliment");
    popupText.textContent = compliment;
    popup.classList.remove("hidden");
  });
});

function closePopup() {
  popup.classList.add("hidden");
}
