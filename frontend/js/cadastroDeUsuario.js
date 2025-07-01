import { cadastrarUsuario } from "./sistema.js";

const btnCadastrar = document.getElementById("btnCadastrar");
btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (confirmarSenha == senha) {

       cadastrarUsuario({nome : nome, login : login, senha : senha})
        
    }else{
        alert('O campo confirmar senha deve ser igual à senha.');
        document.getElementById('senha').value = ""; 
        document.getElementById('confirmarSenha').value = "";
    }    
})