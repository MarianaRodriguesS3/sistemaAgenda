import { adicionarContato, verificarLogin } from "./sistema.js";

if (!verificarLogin()) {
    window.location.href = "login.html";
} else {

const btnAdicionarContato = document.getElementById("btnAdicionarContato");
btnAdicionarContato.addEventListener('click', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;

    adicionarContato({nome : nome, telefone : telefone, endereco : endereco, email : email});
    
})

const btnCancelarAdicionar = document.getElementById("btnCancelarAdicionar");
btnCancelarAdicionar.addEventListener('click', (e)  => {
    e.preventDefault();
    window.location.href = 'paginaAgenda.html'

})
}