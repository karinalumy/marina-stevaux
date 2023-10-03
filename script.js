document.addEventListener("DOMContentLoaded", function () {
    var whatsappButton = document.getElementById("whatsapp-button");
    var whatsappPopup = document.getElementById("whatsapp-popup");
    var closeButton = document.getElementById("close-button");

    // Exibir o pop-up quando o botão for clicado
    whatsappButton.addEventListener("click", function () {
        whatsappPopup.style.display = "block";
    });

    // Fechar o pop-up quando o botão "Fechar" for clicado
    closeButton.addEventListener("click", function () {
        whatsappPopup.style.display = "none";
    });
});