// Funkcija za pauzu
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Glavna funkcija slajdera
async function Slajder() {
  const images = ["slike/cok1.jpg", "slike/cok2.jpg", "slike/cok3.jpg"];
  const slika = document.getElementById("slajd");
  if (!slika) return console.error("Nema elementa #slajd");

  // Dodaj CSS transition za fade (ako nije već u style.css)
  slika.style.transition = "opacity 1s ease-in-out";
  slika.style.opacity = 1;

  let i = 0;
  while (true) {
    // Fade out
    slika.style.opacity = 0;
    await sleep(1000); // 1 sekunda za fade-out

    // Promeni sliku
    slika.src = images[i];
    i = (i + 1) % images.length;

    // Fade in
    slika.style.opacity = 1;
    await sleep(4000); // 4 sekunde prikaza pre sledeće promene
  }
}

// Pokreni kad se stranica učita
document.addEventListener("DOMContentLoaded", Slajder);
