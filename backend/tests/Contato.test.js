import Contato from "../classes/Contato.js";

//Cria um contexto para os testes
describe('Classe Contato', () => {

    //Contato criado para ser utilizado em todos os testes
    const contato1 = new Contato(0,"Maria","(32)12345-1234","Rua Pedro José, 123","maria@gmail.com");

    //Testando se os atributos foram alocados corretamente
    test('testando o construtor', ()=>{
        //Verifica se o id é igual a zero        
        expect(contato1.idContato).toEqual(0);

        //Verifica se o nome é igual a Maria
        expect(contato1.nome).toEqual("Maria");

        //Verifica se o telefone é igual a "(32)12345-1234"
        expect(contato1.telefone).toEqual("(32)12345-1234");
        
        //Verifica se o endereço é igual a "Rua Pedro José, 123"
        expect(contato1.endereco).toEqual("Rua Pedro José, 123");
        
        //Verifica se o email é igual a "maria@gmail.com" 
        expect(contato1.email).toEqual("maria@gmail.com");

    });

    //Testa se retorna mensagem de erro para nomes inválido
    //Quando vai testar mensagens de erro é necessário dentro do expect utilizar arrow function
    test('nome inválido', () => {
        expect( () => {
            contato1.nome = "123 Maria 123";
        }).toThrow(/nome/);
    });

    //Testa se retorna mensagem de erro para email inválido
    //Quando vai testar mensagens de erro é necessário dentro do expect utilizar arrow function
    test('email inválido', () => {
        expect( () => {
            contato1.email = "@gmail.com";
        }).toThrow(/email/);
    });

    //Testa se retorna mensagem de erro para telefone inválido
    //Quando vai testar mensagens de erro é necessário dentro do expect utilizar arrow function
    test('telefone inválido', () => {
        expect( () => {
            contato1.telefone = "123-1111";
        }).toThrow("O telefone deve seguir o formato (99)99999-9999");
    });

    //Testa se retorna mensagem de erro para endereço inválido
    //Quando vai testar mensagens de erro é necessário dentro do expect utilizar arrow function
    test('endereço inválido', () => {
        expect( () => {
            contato1.endereco = "Rua A, 12";
        }).toThrow("O endereço deve ter pelo menos 10 caracteres");
    });

})