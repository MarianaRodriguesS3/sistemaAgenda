const urlAPI = 'http://localhost:3333';

let idUsuario = localStorage.getItem('idUsuario');
export async function logar(dados) {
    try {
        const resposta = await fetch(`${urlAPI}/logar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        });

        const info = await resposta.json();

        if (resposta.status == 200) {
            alert(`Usuario logado: idUsuario:${info.idUsuario}`)
            localStorage.setItem('idUsuario', info.idUsuario);
            window.location.href = 'paginaAgenda.html';
        }
        if (resposta.status == 400) {
            alert(info.message)
        }
    } catch (e) {
        alert('Servidor fora do ar!!!');
    }

}
export function deslogar() {
    localStorage.removeItem('idUsuario');
    idUsuario = null;
    window.location.href = 'login.html';
}
export function verificarLogin() {
    if (idUsuario) {
        return true;
    } else {
        return false;
    }
}

export async function getUsuario() {
    if (idUsuario) {
        try {
            const resposta = await fetch(`${urlAPI}/usuario/${idUsuario}`);
            const info = await resposta.json();

            if (resposta.status == 200) {
                return info;
            } else {
                alert(info.message);
            }
        } catch (e) {
            alert('Servidor fora do ar!!!')
        }
    }

    return null;
}

export async function buscarTodosContatos() {
    try {
        const resposta = await fetch(`${urlAPI}/contatos/${idUsuario}`);
        const info = await resposta.json();

        if (resposta.status == 200) {
            return info;
        } else {
            alert(info.message);
        }
    } catch (e) {
        alert('Servidor fora do ar!!!')
    }
}

export async function buscarContatoEditar(idContato) {
    try {
        const resposta = await fetch(`${urlAPI}/contato/${idUsuario}/${idContato}`);
        const info = await resposta.json();

        if (resposta.status == 200) {
            return info;
        } else {
            alert(info.message);
        }
    } catch (e) {
        alert('Servidor fora do ar!!!')
    }
    return null
}

export async function cadastrarUsuario(dados) {
    try {
        const resposta = await fetch(`${urlAPI}/usuario`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        });

        const info = await resposta.json();
        if (resposta.status == 201) {
            alert(info.message);
            window.location.href = "login.html";
        } else {
            alert(info.message)
        }
    } catch (e) {
        alert('Servidor fora do ar!!!');
    }

}

export async function adicionarContato(dados) {

    if (idUsuario) {
        dados.idUsuario = idUsuario;
        try {
            const resposta = await fetch(`${urlAPI}/contato`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dados),
            });

            const info = await resposta.json();
            if (resposta.status == 201) {
                alert(info.message);
                window.location.href = "paginaAgenda.html";
            } else {
                alert(info.message)
            }
        } catch (e) {
            alert('Servidor fora do ar!!!');
        }
    } else {
        alert('Você precisa estar logado');
        window.location.href = "login.html";
    }
}

export async function alterarContato(dados) {

    if (idUsuario) {
        dados.idUsuario = idUsuario;
        try {
            const resposta = await fetch(`${urlAPI}/contato`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dados),
            })
            const info = await resposta.json();
            if (resposta.status == 200) {
                alert(info.message);
                window.location.href = 'paginaAgenda.html'
            } else {
                alert(info.message);
            }

        } catch (e) {
            alert('Servidor fora do ar!!!');
        }

    } else {
        alert('nenhum usuario logado');
        window.location.href = 'login.html';
    }
}

export async function excluirContato(idContato) {

    if (idUsuario) {
        try {
            const resposta = await fetch(`${urlAPI}/contato/${idUsuario}/${idContato}`, {
                method: "DELETE",
            });
            const info = await resposta.json();
            if (resposta.status == 200) {
                alert(info.message);
                window.location.href = 'paginaAgenda.html'
            } else {
                alert(info.message);
            }
        }
        catch (e) {
            alert('Servidor fora do ar');

        }
    } else {
        alert('nenhum usuario logado');
        window.location.href = 'login.html';
    }
}

export async function alterarDadosCadastrais(dados) {
    if (idUsuario) {
        try {
            const resposta = await fetch(`${urlAPI}/usuario`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dados),
            });

            const info = await resposta.json();
            if (resposta.status == 200) {
                alert(info.message);
                window.location.href = 'paginaAgenda.html'
            } else {
                alert(info.message);
            }
        } catch (e) {
            alert('Servidor fora do ar');
        }
    } else {
        alert('nenhum usuario logado');
        window.location.href = 'login.html';
    }

}
