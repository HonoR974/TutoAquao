document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const menu = document.getElementById("menu");

  toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("visible");

    // Ajouter ou supprimer la classe 'visible' pour afficher ou masquer le menu
    if (menu.classList.contains("visible")) {
      setTimeout(() => {
        menu.style.overflow = "visible";
      }, 3000); // 3000 millisecondes (3 secondes) pour l'affichage initial
    } else {
      menu.style.overflow = "hidden";
    }
  });
});
