import { alterarDadosCadastrais, getUsuario, verificarLogin } from "./sistema.js";

if (!verificarLogin()) {
    window.location.href = "login.html";
} else {
// busca o id do usuário
const idUsuario = localStorage.getItem('idUsuario');

const infoUsuario = await getUsuario(idUsuario)

if (infoUsuario) {

    let nome = infoUsuario.nome;
    let login = infoUsuario.login;
    let senha = infoUsuario.senha;


    document.getElementById("nome").value = nome;
    document.getElementById("login").value = login;
    document.getElementById("senha").value = senha;

} else {
    alert('Contato inexistente');
    window.location.href = 'paginaAgenda.html'
}

//enviando as informações alteradas para a api
const salvarAlteracoes = document.getElementById("salvarAlteracoes");
salvarAlteracoes.addEventListener('click', (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    alterarDadosCadastrais({ idUsuario: idUsuario, nome: nome, login: login, senha: senha });
})





//Botão cancelar

const btnCancelarCadastro = document.getElementById("btnCancelarCadastro");
btnCancelarCadastro.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'paginaAgenda.html'

})
}