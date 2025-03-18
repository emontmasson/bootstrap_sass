document.addEventListener("DOMContentLoaded", function() {
    // Sélection de tous les boutons "Voir plus"
    const buttons = document.querySelectorAll(".open-modal");

    // Ajout d'un événement "click" sur chaque bouton
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Récupération du contenu spécifique du service
            const serviceDetails = this.getAttribute("data-service");

            // Mise à jour du contenu de la modale
            document.getElementById("modalContent").textContent = serviceDetails;

            // Affichage de la modale Bootstrap
            const modal = new bootstrap.Modal(document.getElementById("serviceModal"));
            modal.show();
        });
    });
});