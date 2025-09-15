document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("menjaj-temu");
  if (button) {
    button.addEventListener("click", () => {
      document.body.classList.toggle("tamna-tema");
    });
  } else {
    console.error("Dugme sa ID-jem 'menjaj-temu' nije pronađeno.");
  }
});
