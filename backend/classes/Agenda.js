import Usuario from './Usuario.js';

export default class Agenda {
    #usuarios;

    constructor() {
        this.#usuarios = [];
    }

    jaExisteLogin(login) {
        const usuario = this.#usuarios.find((usuario) => usuario.login === login);
        return usuario || null;
    }

    cadastrarUsuario(nome, login, senha) {
        if (this.jaExisteLogin(login)) {
            throw new Error('Já existe um usuário com o login informado');
        }

        const idUsuario = this.#usuarios.length;
        const usuario = new Usuario(idUsuario, nome, login, senha);
        this.#usuarios.push(usuario);
    }

   alterarUsuario(idUsuario, nome, login, senha) {
    const usuario = this.buscarUsuario(idUsuario);
    if (!usuario) {
        throw new Error('Não existe um usuário com o id informado');
    }

    // Faz trim se o valor foi passado
    if (nome !== undefined) nome = nome.trim();
    if (login !== undefined) login = login.trim();
    if (senha !== undefined) senha = senha.trim();

    // Só verifica se o login já existe se ele realmente foi alterado
    if (login !== undefined && login !== usuario.login) {
        const usuLogin = this.jaExisteLogin(login);
        if (usuLogin && usuLogin.idUsuario !== idUsuario) {
            throw new Error('Não é possível mudar o login. O novo login já é utilizado por outro usuário');
        }
    }

    if (nome !== undefined && nome !== usuario.nome) usuario.nome = nome;
    if (login !== undefined && login !== usuario.login) usuario.login = login;
    if (senha !== undefined && senha !== usuario.senha) usuario.senha = senha;
}


    buscarUsuario(idUsuario) {
        return this.#usuarios[idUsuario];
    }

    get usuarios() {
        return this.#usuarios;
    }

    logar(login, senha) {
        const usuario = this.#usuarios.find((u) => u.login === login && u.senha === senha);
        if (usuario) {
            return usuario.idUsuario;
        }

        throw new Error('Login ou senha inválido');
    }
}
