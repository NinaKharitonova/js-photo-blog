// Recupero degli elementi di interesse dal DOM
const polaroidRow = document.getElementById("row-board");
const layoverEl = document.getElementById("layover");
const closeLayoverEl = document.querySelectorAll(
  '[data-action="close-layover"]'
);
const preview = document.getElementById("preview");

// Generazione delle cards
const polaroidNumber = 6;

fetch("https://jsonplaceholder.typicode.com/photos?_limit=" + polaroidNumber)
  .then((res) => res.json())
  .then((posts) => {
    posts.forEach((post) => {
      polaroidRow.innerHTML += `
        <div class="polaroid">
            <div class="pin"></div>
            <div class="photo">
              <img class="pic" src="${post.url}" />
            </div>
            <p class="caption">
              ${post.title}
            </p>
        </div> `;
    });

    // Aggiunge un event listener a ciascuna foto per mostrare l'overlay al click
    const photoCardsEl = document.querySelectorAll("#row-board .photo");
    photoCardsEl.forEach((cardEl) => {
      cardEl.addEventListener("click", function () {
        layoverEl.classList.remove("d-none");

        // Aggiorna l'immagine di preview nell'overlay
        const clickPhoto = this.querySelector("img.pic");
        if (clickPhoto) {
          preview.src = clickPhoto.src;
          overlay.classList.remove("hidden");
        }
      });
    });

    // Event listener per chiudere l'overlay
    closeLayoverEl.forEach((el) => {
      el.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-action") === "close-layover") {
          layoverEl.classList.add("d-none");
          overlay.classList.add("hidden");
        }
      });
    });
  });
