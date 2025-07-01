import { buscarTodosContatos, deslogar, getUsuario, verificarLogin } from "./sistema.js";

if (!verificarLogin()) {
    window.location.href = "login.html";
} else {
    //adiciona o nome do usuário na agenda
    const usuario = await getUsuario();

    if (usuario != null) {

        const h1 = document.querySelector('h1');
        h1.innerHTML = `Agenda de ${usuario.nome}`;

    }

    //função para deslogar

    const btnSair = document.querySelector(".btnSair");

    btnSair.addEventListener('click', (e) => {
        e.preventDefault();
        deslogar();
    })

    //Buscar todos os contatos de um usuário

    const contatosUsuario = await buscarTodosContatos();
    console.log(contatosUsuario);

    //construir a tabela dinamica

    function montarTabela(dadosUsuario) {

        const tabelaBody = document.querySelector('tbody');
        tabelaBody.innerHTML = "";
        let body = ''
        dadosUsuario.forEach(element => {
            if (element) {
                const idContato = element.idContato;
                const nomeContato = element.nome;
                // console.log(nomeContato)
                const telContato = element.telefone;
                // console.log(telContato)
                const enderecoContato = element.endereco;
                // console.log(enderecoContato)
                const emailContato = element.email;
                // console.log(emailContato)

                const conteudoTabela =
                    `<tr>
        <td>${nomeContato}</td>
        <td>${telContato}</td>
        <td>${enderecoContato}</td>
        <td>${emailContato}</td>
        <td>
            <a href="alterarContato.html?idContato=${idContato}" class="btnAlterarContato">Alterar</a>
            <a class="btnExcluirContato" href="excluirContato.html?idContato=${idContato}">Excluir</a>
        </td>
        </tr>`

                body = body + conteudoTabela;
            }

        });
        tabelaBody.innerHTML = body;
    }
    montarTabela(contatosUsuario);

    //buscar contato por nomes
    buscar.addEventListener('keyup', (e) => {
        const texto = document.getElementById('buscar').value.trim();

        var contato = [];
        if (texto != "") {
            const exp = new RegExp(texto, 'i');
            contato = contatosUsuario.filter((contato) => contato && contato.nome && contato.nome.match(exp));

            console.log(contato)
            if (contato.length == 0) {
                const tabelaBody = document.querySelector('tbody');
                const contatoNaoEncontrado =
                    `<tr>
        <td colspan="5">Contato não encontrado</td>
     </tr>` ;
                tabelaBody.innerHTML = contatoNaoEncontrado;

            } else {
                montarTabela(contato);

            }
        } else {
            montarTabela(contatosUsuario)
        }

    })

}
