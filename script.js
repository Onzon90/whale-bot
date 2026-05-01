const envelope = document.getElementById("envelope");
const card = document.getElementById("card");

function openCard() {
  envelope.classList.add("open");
  setTimeout(() => {
    card.classList.add("show");
  }, 500);
}

function closeCard() {
  card.classList.remove("show");
  envelope.classList.remove("open");
}

// Click + Touch support
envelope.addEventListener("click", openCard);
envelope.addEventListener("touchstart", openCard);
