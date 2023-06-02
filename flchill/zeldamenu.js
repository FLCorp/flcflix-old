function checkCode() {
    var enteredCode = document.getElementById("codeInput").value;

    if (enteredCode === "1986") {
        window.location.href = "menu.html"; // Redirige vers la page sécurisée
    } else {
        alert("Indice: Liscence de Nintendo"); // Affiche un message d'erreur
    }
}