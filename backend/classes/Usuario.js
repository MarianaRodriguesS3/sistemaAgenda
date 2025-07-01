import Contato from "./Contato.js";

export default class Usuario{
    #idUsuario;
    #nome;
    #login;
    #senha;
    #contatos;

    constructor(idUsuario, nome, login, senha){
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.#contatos = [];
        this.#idUsuario = idUsuario;
    }

    set nome(nome){ 
        const exp = /^[A-Za-z]{3}/;
        if (nome.match(exp)){   
            this.#nome = nome;      
        } else {        
            throw new Error("O nome deve ter pelo menos 3 letras");
        }   
    }   

    set login(login){   
        const exp = /^[A-Za-z0-9]{5,}$/;
        if (login.match(exp)){          
            this.#login = login;    
        } else {            
            throw new Error("O login deve ter no mínimo 5 caracteres");
        }   
    }   

    set senha(senha){   
        const exp = /^[A-Za-z0-9]{8,}$/;
        if (senha.match(exp)){          
            this.#senha = senha;    
        } else {            
            throw new Error("A senha deve ter no mínimo 8 caracteres");
        }   
    }   

    get nome(){
        return this.#nome;
    }

    get login(){
        return this.#login;
    }   

    get senha(){
        return this.#senha;
    }

    get idUsuario(){
        return this.#idUsuario;
    }

    get contatos(){
        return this.#contatos;
    }

    /*
    Recebe os dados de um contato determina qual será o id dele e o adiciona na lista de contatos.
    */
    adicionarContato(nome, telefone, endereco, email){
        const idContato = this.#contatos.length;
        let c1;
        c1 = new Contato(idContato, nome, telefone, endereco, email);
        this.#contatos.push(c1);
    }

    /*
    Verifica se o contato existe, utilizando o idContato
    Se o contato existir altera seus dados, caso contrário dispara um erro 
    */
    alterarContato(idContato, nome, telefone, endereco, email){
        const contato = this.#contatos[idContato];
        if (contato != undefined){ 
            contato.nome = nome; 
            contato.telefone = telefone;
            contato.endereco = endereco;
            contato.email = email;
        } else {
            throw new Error('Contato inexistente');
        }
    }
    
    /*
    busca o contato que possui o nome exatamente igual ao nome informado
    */
    buscarContatoPorNome(nome){
        const contatos = this.#contatos
        let contato = null;
        /*
        for (let index = 0; index < contatos.length; index++) {
            contato = contatos[index];
            if (contato.nome == nome){
                return contato;
            }
        }
        */
        contato = contatos.find((contato) => contato.nome == nome)

        return contato;
    }

    /*busca todos os contatos que contenham no nome o texto informado */
    buscarContatosPorNome(texto){
        const contatos = this.#contatos
        let contato = [];

        const exp = new RegExp(texto,'i');
        contato = contatos.filter((contato) => contato.nome.match(exp))

        return contato;
    }

    /*Remove o contato armazenado no indice idContato. Se não existir o contato no índice dispara um erro */
    removerContato(idContato){
        if (this.#contatos[idContato]){
            delete this.#contatos[idContato]
        } else {
            throw new Error('Contato inexistente');
        }  
    }

    //toJSON
    toJSON(){
        return {
            idUsuario : this.#idUsuario,
            nome : this.#nome,
            login : this.#login,
            senha : this.#senha,
        }
    }
}



