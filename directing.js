function checkCode() {
    var enteredCode = document.getElementById("codeInput").value;

    if (enteredCode === "4 Septembre 2023") {
        window.location.href = "https://flcorp.github.io/flcflix-v3-testweb/"; // Redirige vers le prototype
    } else {
        alert("Malheureusemen,t ce n'est pas le bon code :/"); // Affiche un message d'erreur
    }
}