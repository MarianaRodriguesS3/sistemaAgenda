import { verificarLogin } from "./sistema.js";

if (verificarLogin) {
    window.location.href = "login.html";
} else {
    window.location.href = 'paginaAgenda.html'
}
