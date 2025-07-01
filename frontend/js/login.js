import { logar, getUsuario } from "./sistema.js";

const btnLogar = document.getElementById("btnLogar");
btnLogar.addEventListener('click', (e) => {
    e.preventDefault();
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    logar({ login: login, senha: senha })
})


