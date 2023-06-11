function checkCode() {
    var enteredCode = document.getElementById("codeInput").value;

    if (enteredCode === "1986") {
        window.location.href = "menu.html"; // Redirige vers la page du Menu Zelda
    }
    if (enteredCode === "1998") {
        window.location.href = "test.html"; // Redirige vers la page de Test
    } else {
        alert("Indice: Liscence de Nintendo"); // Affiche un message d'erreur
    }
}