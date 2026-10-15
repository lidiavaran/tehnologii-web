let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+[0-9]{0,2}@e-uvt\.ro$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

    if (!emailRegex.test(email)) {
        alert("Eroare: Adresa de email trebuie să respecte formatul UVT (ex: prenume.nume@e-uvt.ro sau prenume.nume01@e-uvt.ro)!");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Eroare: Parola trebuie să aibă cel puțin 7 caractere și să conțină litere mari, litere mici, cifre și un caracter special!");
        return;
    }

    alert("Login reușit! Se redirecționează către pagina principală...");
    window.location.href = "home.html";
});