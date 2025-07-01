//extrair os dados de um contato específico
import { alterarContato, buscarContatoEditar, verificarLogin } from "./sistema.js";

if (!verificarLogin()) {
    window.location.href = "login.html";
} else {
// busca o id do usuário
const params = new URLSearchParams(window.location.search);
const idContato = params.get('idContato');

const infoContato = await buscarContatoEditar(idContato);

if (infoContato) {

    let nome = infoContato.nome;
    let telefone = infoContato.telefone;
    let endereco = infoContato.endereco;
    let email = infoContato.email;

    document.getElementById("nome").value = nome;
    document.getElementById("telefone").value = telefone;
    document.getElementById("endereco").value = endereco;
    document.getElementById("email").value = email;
    
}else{
    alert('Contato inexistente');
    window.location.href = 'paginaAgenda.html'
}

//enviando as informações alteradas para a api
const btnSalvarAlteracoes = document.getElementById("btnSalvarAlteracoes");
btnSalvarAlteracoes.addEventListener('click', (e)  => {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;
    let email = document.getElementById("email").value;

    console.log(telefone)

    alterarContato({idContato: idContato, nome: nome, telefone: telefone, endereco: endereco, email: email});

})

//Botão cancelar

const btnCancelarAlterar = document.getElementById("btnCancelarAlterar");
btnCancelarAlterar.addEventListener('click', (e)  => {
    e.preventDefault();
    window.location.href = 'paginaAgenda.html'

})

}

