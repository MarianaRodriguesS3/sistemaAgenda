export default class Contato {
    #idContato;
    #nome;
    #telefone;
    #endereco;
    #email;

    constructor(idContato, nome, telefone, endereco, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.email = email;
        this.#idContato = idContato;
    }

    set nome(nome){
        const exp = /^[A-Za-z]{3}/;

        if (nome.match(exp)){
            this.#nome = nome;    
        } else {
            throw new Error("O nome deve ter pelo menos 3 caracteres");
        }
    }

    set telefone(telefone){
        //telefone = '(99) 99999-9999';
        const exp = /^\(\d{2}\)\s?\d{4,5}\-\d{4}$/;
		/*
		https://regex101.com/
		*/
        if (telefone.match(exp)){
            this.#telefone = telefone;
        } else {            
            throw new Error("O telefone deve seguir o formato (99)99999-9999");
        }
    }

    set endereco(endereco){
        if (endereco.length >= 10) {
            this.#endereco = endereco;
        } else {
            throw new Error("O endereço deve ter pelo menos 10 caracteres");
        }
    }

    set email(email){
        const exp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;    

        if (email.match(exp)){
            this.#email = email;
        } else {
            throw new Error("O email não corresponde a um endereço válido");
        }
    }

    get nome(){
        return this.#nome;
    }

    get telefone(){
        return this.#telefone;
    }   

    get email(){
        return this.#email;
    }   

    get idContato(){
        return this.#idContato;
    } 
    
    get endereco(){
        return this.#endereco;
    }

    toString(){
        return `Nome: ${this.#nome} | Telefone: ${this.#telefone} | Email: ${this.#email} | Endereço: ${this.#endereco}`;
    }

    //toJSON
    toJSON(){   
        return {
            idContato: this.#idContato,
            nome: this.#nome,
            telefone: this.#telefone,
            email: this.#email,
            endereco: this.#endereco
        }
    }
}