// Importar a classe que queremos testar
import Usuario from "../classes/Usuario";


//Descrevendo o teste da classe
describe('Usuario class', () => {
    const usuario = new Usuario(0, 'Roberto', '123456', '12345678');

    test('set nome -> invalid name', () => {
        // Act & Assert
        expect(() => {
            usuario.nome = 'Pi 2';
        }).toThrow("O nome deve ter pelo menos 3 letras");
    });

    test('set login -> invalid login', () => {
        // Act & Assert
        expect(() => {
            usuario.login = '1234';
        }).toThrow("O login deve ter no mínimo 5 caracteres");
    });

    test('add contato -> invalid fone number ', () => {
        // Act & Assert
        expect(() => {
            usuario.adicionarContato('Luiza', '(32)9999-9999', 'Rua 15 de Jau 293, centro', '123@gmail.com')
        }).toThrow();
    });
})